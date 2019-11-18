using System.Linq;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Examportal.Auth;
using Examportal.Custom_Models;
using System.Collections.Generic;
using Examportal.Handlers;
using System;
using System.IO;
using System.Net.Http.Headers;

namespace Examportal.Controllers
{
    [ApiController]
    [Route("/exam")]
    public class ExamController : ControllerBase
    {
        ExamportalContext db = new ExamportalContext();

        [Route("accessKey")]
        [HttpPost]
        public IActionResult CheckAccessKey([FromBody] ExamDetails value)
        {

            QuestionHandler qh = new QuestionHandler();
            var existingExam = qh.CheckAccessKey(value);
            if (existingExam != null)
            {
                return Ok(true);
            }
            else
            {
                return BadRequest();
            }
        }
        
        [Authorize]
        [Route("accessKey")]
        [HttpGet]        
        public IActionResult GetExamTime()
        {
            Authentication auth = new Authentication();
            var header = auth.getAllClaims(HttpContext);
            string examcode = HttpContext.Request.Headers["examCode"];

            var examData = db.ExamDetails.FirstOrDefault(s => s.ExamCode == examcode);
                
            return Ok(new { examData = examData,submitStatus = false});
            
        }
        [Authorize]
        [Route("endTest")]
        [HttpPost]
        public IActionResult SaveAllQuestions([FromBody] SubmitAnswerCustomModel value)
        {
            Dictionary<string, string> email = new Dictionary<string, string>();
            Authentication auth = new Authentication();
            QuestionHandler qh = new QuestionHandler();

            email = auth.getAllClaims(HttpContext);
            qh.submitAllQuestions(value, email);

            return Ok();
        }
        //[Authorize]
        [HttpPost, Route("/exam/question")]
        public IActionResult uploadQuestion()
        {
            try
            {
                var req = HttpContext.Request.Form;
                String path = Directory.GetCurrentDirectory();
                //String dest = "C:\\Users\\birendra.bhujel\\Desktop\\BootcampSep2019\\ExamPortal\\frontend\\exminer\\public\\assets";

                String dest = "E:\\examportal";
                var file = HttpContext.Request.Form.Files[0];
                //dest = dest + "\\file.txt";
                if (Directory.Exists(dest))
                {
                    
                    var filename = ContentDispositionHeaderValue
                                      .Parse(file.ContentDisposition)
                                      .FileName
                                      .Trim('"');
                    //filename = Path.Combine(dest, $@"\{filename}");
                    //filename = "E:\\octaber.jpg";
                    filename = dest + "\\" + filename;

                    using (FileStream fs = System.IO.File.Create(filename))
                        {
                            file.CopyTo(fs);
                            fs.Flush();
                        }
                    
                    var ImageURL = "/public/assets/" +file.FileName;
                    
                }
                //Questions obj = new Questions();
                //obj.Answer = HttpContext.Request.Form["answer"];
                //obj.QuestionText = req["questionText"]; obj.Option1 = req["option1"]; obj.Option2 = req["option2"];
                //obj.Option3 = req["option3"]; obj.Option4 = req["option4"]; obj.ExamCode = "h093278";
                //obj.Weightage = Convert.ToInt32(req["weightage"]);
                //db.Questions.Add(obj);
                //db.SaveChanges();

                return Ok();
            }catch(Exception e)
            {
                return BadRequest(new { error = e });
            }
        }
        //[Authorize]
        [Route("/exam/question/{id}")]
        [HttpDelete]
        public IActionResult removeQuestions(int id)
        {
            try
            {
                db.Questions.Remove(db.Questions.FirstOrDefault(e => e.Id == id));
                db.SaveChanges();
                return Ok();
            }


            catch (Exception e)
            {
                return BadRequest(new { error = e });
            }
        }

        [Route("/exam/{id}/question")]
        [HttpGet]

        public IActionResult viewQuestions(String id)
        {
            id = HttpUtility.UrlDecode(id);
            try
            {
                var data = db.Questions.Where(e => e.ExamCode == id).Select(a => new {
                    _id = a.Id,
                    questionText = a.QuestionText,
                    option1 = a.Option1,
                    option2 = a.Option2,
                    option3 = a.Option3,
                    option4 = a.Option3,
                    weightage = a.Weightage,
                    answer = a.Answer
                }).ToList();
                return Ok(data);
            }
            catch (Exception e)
            {
                return BadRequest(new { error = e });
            }
        }
        [Route("/exam/question/{id}")]
        [HttpGet]

        public IActionResult editviewQuestions(int id)
        {

            try
            {
                var data = db.Questions.Where(e => e.Id == id).Select(a => new {
                    _id = a.Id,
                    questionText = a.QuestionText,
                    option1 = a.Option1,
                    option2 = a.Option2,
                    option3 = a.Option3,
                    option4 = a.Option3,
                    weightage = a.Weightage,
                    answer = a.Answer,
                    answerType = a.AnswerType
                }).ToList();
                return Ok(data);
            }
            catch (Exception e)
            {
                return BadRequest(new { error = e });
            }
        }
        [Route("/exam/question/{id}")]
        [HttpPatch]

        public IActionResult editQuestions(int id, [FromBody]Questions a)
        {
            try
            {
                var data = db.Questions.Where(s => s.Id == id).FirstOrDefault<Questions>();
                data.QuestionText = a.QuestionText;
                data.Option1 = a.Option1;
                data.Option2 = a.Option2;
                data.Option3 = a.Option3;
                data.Option4 = a.Option3;
                data.Weightage = a.Weightage;
                data.Answer = a.Answer;
                db.Questions.Update(data);
                db.SaveChanges();
                return Ok("User updated");
            }
            catch (Exception e)
            {
                return BadRequest(new { error = e });
            }
        }
    }
}
