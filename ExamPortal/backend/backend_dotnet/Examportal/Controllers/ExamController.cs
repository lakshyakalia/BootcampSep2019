using System.Linq;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Examportal.Auth;
using Microsoft.AspNetCore.Mvc.Filters;
using System;

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
        
        //[Authorize]
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
        //[Authorize]
        [HttpPost, Route("/exam/question")]
        public IActionResult uploadQuestion()
        {
            try
            {
                var req = HttpContext.Request.Form;
                Questions obj = new Questions();
                obj.Answer = HttpContext.Request.Form["answer"];
                obj.QuestionText = req["questionText"]; obj.Option1 = req["option1"]; obj.Option2 = req["option2"];
                obj.Option3 = req["option3"]; obj.Option4 = req["option4"]; obj.ExamCode = "h093278";
                obj.Weightage = Convert.ToInt32(req["weightage"]);
                //db.Questions.Add(obj);
                //db.SaveChanges();
                var file = HttpContext.Request.Form.Files[0];
                String fileName = file.FileName;
                String path = "c:/Users/birendra.bhujel/Desktop/BootcampSep2019/ExamPortal/frontend/exminer/public/assets";
                System.IO.Directory.CreateDirectory(path);
                System.IO.Path.Combine(path, fileName);
                return Ok();
            }catch(Exception e)
            {
                return BadRequest(new { error = e });
            }
        }
    }
}
