using System.Linq;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Examportal.Auth;
using System.Text;
using System.Data.SqlClient;
using static System.Net.Mime.MediaTypeNames;
using System;
using System.Configuration;
using System.IO;
using System.Net;
using Examportal.Custom_Models;

namespace Examportal.Controllers
{
    [ApiController]
    public class ExamController : ControllerBase
    {
        ExamportalContext db = new ExamportalContext();
        private object open;

        public object ExamCode { get; private set; }

        [Route("/exam/accessKey")]
        [HttpPost]
        public IActionResult CheckAccessKey([FromBody] ExamDetails value)
        {
            var existingExam = db.ExamDetails.FirstOrDefault(s => s.ExamCode == value.ExamCode);
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
        [Route("exam/accessKey")]
        [HttpGet]
        public IActionResult GetExamTime()
        {
            Authentication auth = new Authentication();
            var header = auth.getAllClaims(HttpContext);
            string examcode = HttpContext.Request.Headers["examCode"];

            var examData = db.ExamDetails.FirstOrDefault(s => s.ExamCode == examcode);

            return Ok(new { examData = examData, submitStatus = false });

        }
        [Route("test")]
        [HttpPost]
        public IActionResult Test([FromBody]QuestionCustomModel test)
        {
            return Ok();
        }
        //[Authorize]
        [Route("/exam/question")]
        [HttpPost]
        public IActionResult AddQuestion([FromBody]Questions questions)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    string PhotoPath = Convert.ToString(ConfigurationManager.AppSettings["ImagePath"]);

                    Questions newObj = new Questions();

                    newObj.QuestionText = questions.QuestionText;
                    newObj.Answer = questions.Answer;
                    newObj.Option1 = questions.Option1;
                    newObj.Option2 = questions.Option2;
                    newObj.Option3 = questions.Option3;
                    newObj.Option4 = questions.Option4;
                    newObj.Weightage = questions.Weightage;
                    newObj.ExamCode = questions.ExamCode;
                    newObj.QuestionImage = questions.QuestionImage;

                    if (String.IsNullOrEmpty(newObj.Content))
                    {

                    }
                    else
                    {
                        string startingFilePath = PhotoPath;

                        string FilePath = SaveImage(newObj.Content, startingFilePath, newObj.QuestionImage);

                        FileInfo fInfo = new FileInfo(FilePath);

                        newObj.Content = fInfo.Name;
                    }
                    db.Questions.Add(questions);
                    db.SaveChanges();
                    return Ok(new
                    {
                        msg = "exam details saved",
                        status = 200
                    });
                }
                catch (Exception ex)
                {
                    return Ok(new
                    {
                        msg = "internal server error",
                        status = 401
                    });
                }
            }
            else
            {
                return Ok(new
                {
                    msg = "bad request",
                    status = 500
                });
            }
        }

        private string SaveImage(string base64, string FilePath, string ImageName)
        {
            //Get the file type to save in
            var FilePathWithExtension = "";
            string localBase64 = "";

            if (base64.Contains("data:image/jpeg;base64,"))
            {
                FilePathWithExtension = FilePath + ImageName + ".jpg";
                localBase64 = base64.Replace("data:image/jpeg;base64,", "");
            }
            else if (base64.Contains("data:image/png;base64,"))
            {
                FilePathWithExtension = FilePath + ImageName + ".png";
                localBase64 = base64.Replace("data:image/png;base64,", "");
            }


            using (MemoryStream ms = new MemoryStream(Convert.FromBase64String(localBase64)))
            {
                using (FileStream fs = new FileStream(FilePathWithExtension, FileMode.Create, FileAccess.Write))
                {
                    //Create the specified directory if it does not exist
                    var photofolder = System.IO.Path.GetDirectoryName(FilePathWithExtension);
                    if (!Directory.Exists(photofolder))
                    {
                        Directory.CreateDirectory(photofolder);
                    }

                    ms.WriteTo(fs);
                    fs.Close();
                    ms.Close();
                }
            }

            return FilePathWithExtension;

        }
    }     
}
