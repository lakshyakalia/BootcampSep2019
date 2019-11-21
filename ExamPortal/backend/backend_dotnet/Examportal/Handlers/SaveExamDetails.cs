using Examportal.Auth;
using Examportal.Custom_Models;
using Examportal.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examportal.Handlers
{
    public class SaveExamDetails
    {
        ExamportalContext db = new ExamportalContext();
        public string FetchEmail(HttpContext httpContext)
        {
            Dictionary<string, string> email = new Dictionary<string, string>();

            Authentication auth = new Authentication();
            email = auth.getAllClaims(httpContext);
            return email["Email"];
        }
        public bool SaveExam(ExamDetails exam, HttpContext http)
        {

            var data = db.ExamDetails.FirstOrDefault(e => e.ExamCode == exam.ExamCode);
            if (data != null)
            {
                exam.CreatedDate = DateTime.Now;
                exam.Email = FetchEmail(http);
                var obj = db.Users.Where(e => e.Email == exam.Email).FirstOrDefault();
                exam.CreatedBy = obj.Name;
                db.ExamDetails.Add(exam);
                db.SaveChanges();
                return true;
            }
            return false;
        }
        public List<ExamCustomModel> ViewExamDetails(HttpContext httpContext)
        {

            var data = db.ExamDetails.Where(e => e.Email == FetchEmail(httpContext));
                
            if (data != null )
            {
                var obj = data.Select(a => new ExamCustomModel
                {
                    _id = a.Id,
                    examName = a.ExamName,
                    examCode = a.ExamCode,
                    examDuration = a.ExamDuration,
                    examStartTime = a.ExamStartTime
                }).ToList();
                return obj;
            }
            else
            {
                return null;
            }
            
        }
    }
}
