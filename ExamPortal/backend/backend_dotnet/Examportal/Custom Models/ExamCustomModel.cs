using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examportal.Custom_Models
{
    public class ExamCustomModel
    {
        public int _id { get; set; }
        public string ExamName { get; set; }
        public string ExamCode { get; set; }
        public string Email { get; set; }
        public string ExamDuration { get; set; }
        public string ExamStartTime { get; set; }
    }
}
