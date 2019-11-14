using System.Linq;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Examportal.Auth;

namespace Examportal.Controllers
{
    [ApiController]
    public class ExamController : ControllerBase
    {
        ExamportalContext db = new ExamportalContext();

        [Route("/exam/accessKey")]
        [HttpPost]
        public IActionResult CheckAccessKey([FromBody] ExamDetails value)
        {
            var existingExam = db.ExamDetails.FirstOrDefault(s=> s.ExamCode == value.ExamCode);
            if(existingExam != null)
            {
                return Ok(true);
            }
            else
            {
                return BadRequest();
            }
        }
        
        [Authorize]
        [Route("exam/accessKey")]
        [HttpGet]        
        public IActionResult GetExamTime()
        {
            Authentication auth = new Authentication();
            var header = auth.getAllClaims(HttpContext);
            string examcode = HttpContext.Request.Headers["examCode"];

            var examData = db.ExamDetails.FirstOrDefault(s => s.ExamCode == examcode);
                
            return Ok(new { examData = examData,submitStatus = false});
            
        }
    }
}
