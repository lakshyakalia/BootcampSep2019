using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examportal.Custom_Models
{
    public class QuestionCustomModel
    {
        public int QuestionId { get; set; }
        public string QuestionText { get; set; }
        public string Answer { get; set; }
        public string AnswerType { get; set; }
        public string Option1 { get; set; }
        public string ExamCode { get; set; }
    }
}
