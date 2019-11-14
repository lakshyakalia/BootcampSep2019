using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Examportal.Custom_Models
{
    [Table("CandidateAnswer")]
    public class CandidateAnswerCustomModel
    {
        public string Email { get; set; }
        
    }
}
