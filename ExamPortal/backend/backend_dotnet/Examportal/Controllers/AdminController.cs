using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Examportal.Custom_Models;
using Examportal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Bcrypt = BCrypt.Net;


namespace Examportal.Controllers
{
    [Route("/examiner")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        ExamportalContext db = new ExamportalContext();
        // GET: api/Admin
        [HttpGet]
        public IEnumerable<Users> Get()
        {
            var itm = db.Users.Where(e => e.AccountType == "Examiner");
            return itm;
        }

        // GET: api/Admin/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
       
        // POST: api/Admin
        [HttpPost]
        public IActionResult Post([FromBody] Users value)
        {
            var data = (from c in db.Users where c.Email == value.Email select c).FirstOrDefault();
            if(data!=null)
            {
                return Ok(new { message="user already exist" });
            }
            else if (data == null)
            {
                value.Password = Bcrypt.BCrypt.HashPassword(value.Password);
                value.CreatedDate = DateTime.Now.ToString("mm-dd-yyyy");
                db.Users.Add(value);
                db.SaveChanges();
                return Ok(true);
            }
            else
            {
                return BadRequest();
            }

        }

        // PUT: api/Admin/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
