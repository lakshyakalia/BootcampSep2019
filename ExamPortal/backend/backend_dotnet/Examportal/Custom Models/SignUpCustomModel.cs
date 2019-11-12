using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Examportal.Custom_Models
{
    public class SignUpCustomModel
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string AccountType { get; set; }
        public string CollegeName { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string ModifiedBy { get; set; }
    }
}
