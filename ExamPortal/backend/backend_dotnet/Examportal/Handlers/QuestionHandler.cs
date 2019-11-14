using Examportal.Custom_Models;
using Examportal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examportal.Handlers
{
    public class QuestionHandler
    {
        ExamportalContext db = new ExamportalContext();
        
        public CandidateAnswer AnswerObject(String email,int score,String examCode,String QId, byte correctStatus, byte submitStatus)
        {
            var answerDetails = new CandidateAnswer() {
                Email = email,
                TotalScore = score,
                TestCode = examCode,
                CompletionTime = DateTime.Now.ToString(),
                Id = Convert.ToInt16(QId),
                CreatedDate = DateTime.Now,
                SubmitExam = submitStatus,
                CorrectStatus = correctStatus
            };
            return answerDetails;
        }
        public string radioOrCheckBoxValue(dynamic value)
        {
            string joinValue;
            int len = value.CheckedOption.Length;
            if(len == 1)
            {
                joinValue = string.Join("",value.CheckedOption);
            }
            else
            {
                joinValue = string.Join(" ", value.CheckedOption);
            }

            return joinValue;
        }

        public Boolean CheckExisitingRightOption(string checkedOption,string QId,string examCode, string email, int updatedScore)
        {
            var status = db.CandidateAnswer.Where(s=> s.Email == email && s.Id == Convert.ToInt16(QId) && s.TestCode == examCode).ToList();
            if(status.Count != 0)
            {
                if(status[0].CorrectStatus == 0)
                {
                    db.CandidateAnswer.Where(s => s.Email == email && s.TestCode == examCode && s.Id== Convert.ToInt16(QId)).ToList().ForEach(s=> s.CorrectStatus = 1);
                    db.CandidateAnswer.Where(s => s.Email == email && s.TestCode == examCode).ToList().ForEach(s=> s.TotalScore = updatedScore);
                    db.SaveChanges();
                }
                return true;
            }
            return false;
        }

        public Boolean CheckExistingWrongOption(string checkedOption,string QId, string examCode, string email, int updatedScore)
        {

            return false;
        }

        public void SaveCorrectOption(dynamic checkAnswer,dynamic existingAnswer, string email,QuestionCustomModel value, string checkedOption)
        {
            Boolean status;
            CandidateAnswer answerDetails;
            if (existingAnswer == null)
            {
                answerDetails = AnswerObject(email, checkAnswer.Weightage, value.Code, value.QId, 1, 0);
                db.CandidateAnswer.Add(answerDetails);
                db.SaveChanges();
            }
            else
            {
                int updatedScore = existingAnswer.TotalScore + checkAnswer.Weightage;
                status = CheckExisitingRightOption(checkedOption,value.QId,value.Code,email,updatedScore);
                if (!status)
                {
                    answerDetails = AnswerObject(email, updatedScore, value.Code, value.QId, 1, 0);
                    db.CandidateAnswer.Add(answerDetails);

                    db.CandidateAnswer.Where(s => s.Email == email && s.TestCode == value.Code).ToList().ForEach(x => x.TotalScore = updatedScore);
                    db.SaveChanges();

                }
            }
            
        }

        public void SaveIncorrectOption(dynamic checkAnswer, dynamic existingAnswer,string email, QuestionCustomModel value, string checkedOption)
        {
            Boolean status;
            CandidateAnswer answerDetails;
            if (existingAnswer == null)
            {
                answerDetails = AnswerObject(email, 0, value.Code, value.QId, 0, 0);
                db.CandidateAnswer.Add(answerDetails);
                db.SaveChanges();
            }
            else
            {
                int updatedScore = existingAnswer.TotalScore - checkAnswer.Weightage;
                status = CheckExistingWrongOption(checkedOption,value.QId,value.Code,email,updatedScore);
                if (!status)
                {
                    answerDetails = AnswerObject(email,existingAnswer.TotalScore, value.Code, value.QId, 0, 0);
                    db.CandidateAnswer.Add(answerDetails);

                    db.CandidateAnswer.Where(s => s.Email == email && s.TestCode == value.Code).ToList().ForEach(x => x.TotalScore = existingAnswer.TotalScore);
                    db.SaveChanges();
                }
            }

        }
    }
}
