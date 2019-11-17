﻿using System.Linq;
using System;
using System.IO;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Examportal.Auth;
using System.Net;
using Microsoft.Net.Http.Headers;
using System.Threading.Tasks;
using OfficeOpenXml;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Hosting;
using System.Configuration;
<<<<<<< HEAD
using Examportal.Custom_Models;
using System.Collections.Generic;
using Examportal.Handlers;
using System.Web;
using System;
=======
>>>>>>> 3181595... Add Excel file feature completed

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
<<<<<<< HEAD

            QuestionHandler qh = new QuestionHandler();
            var existingExam = qh.CheckAccessKey(value);
=======
            var existingExam = db.ExamDetails.FirstOrDefault(s => s.ExamCode == value.ExamCode);
>>>>>>> 3181595... Add Excel file feature completed
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
<<<<<<< HEAD
        [Route("accessKey")]
        [HttpGet]        
=======
        [Route("exam/accessKey")]
        [HttpGet]
>>>>>>> 3181595... Add Excel file feature completed
        public IActionResult GetExamTime()
        {
            Authentication auth = new Authentication();
            var header = auth.getAllClaims(HttpContext);
            string examcode = HttpContext.Request.Headers["examCode"];

            var examData = db.ExamDetails.FirstOrDefault(s => s.ExamCode == examcode);

            return Ok(new { examData = examData, submitStatus = false });

        }
        


        [Route("/exam/questions/uploadExcel")]
        [HttpPost]

        public async Task createDirectoryAsync()
        {

            string currentpath = System.IO.Directory.GetCurrentDirectory();
            string foldername = "Files";
            string path = Path.Combine(currentpath,foldername);
            
           
            try
            {
                // Determine whether the directory exists.
                if (Directory.Exists(path))
                {

                    var filePayload = HttpContext.Request.Form.Files[0];
<<<<<<< HEAD
                    if (filePayload.Length > 0)
                        using (var fileStream = new FileStream(Path.Combine(path, filePayload.FileName ), FileMode.Create))
                            await filePayload.CopyToAsync(fileStream);
=======
                    //var fileName = ContentDispositionHeaderValue.Parse(filePayload.ContentDisposition).FileName;
                    if (filePayload.Length > 0)
                        using (var fileStream = new FileStream(Path.Combine(path, filePayload.FileName ), FileMode.Create))
                            await filePayload.CopyToAsync(fileStream);
                    //var filetoread = Directory.GetFiles(Path.Combine( path, filePayload.FileName), "*.xlsx", SearchOption.AllDirectories);
                    //var file = filesdirectory.FirstOrDefault(c => c.Equals(filePayload.FileName));
>>>>>>> 3181595... Add Excel file feature completed
                    var i=0;
                    var index = 0;
                    string[] filesdirectory = Directory.GetFiles(path, "*.xlsx", SearchOption.AllDirectories);
                    for (i=0;i<filesdirectory.Length;i++)
                    {
                        String[] str = filesdirectory[i].Split("\\");
                        int length = str.Length;
                        if (str[length-1] == (filePayload.FileName))
                        {
                            index = i;
                        }
                    }
                    FileInfo file = new FileInfo(filesdirectory[index]);
                    using (var package = new ExcelPackage(file))
                    {
                        var worksheet = package.Workbook.Worksheets[1];
<<<<<<< HEAD

                        int rowCount = worksheet.Dimension.Rows;
                        int ColCount = worksheet.Dimension.Columns;
                        StringBuilder rawText = new StringBuilder();
                        String result = "";
                        for (int row = 1; row <= rowCount; row++)
                        {
                            Questions questions = new Questions();
                            for (int col = 1; col <= ColCount; col++)
                            {
                                
                            
                                // This is just for demo purposes
                                rawText.Append(worksheet.Cells[row, col].Value.ToString() + " ");
                                result = rawText.ToString();
                                if (col == 1)
                                {
                                    questions.QuestionText = result;
                                }
                                if (col == 2)
                                {
                                    questions.Option1 = result;
                                }
                                if (col == 3)
                                {
                                    questions.Option2 = result;
                                }
                                if(col == 4)
                                {
                                    questions.Option3 = result;
                                }
                                if (col == 5) {
                                    questions.Option4 = result;
                                }

                                if (col == 6)
                                {
                                    questions.Answer = result;
                                }
                                if (col == 7)
                                {
                                    questions.Weightage = int.Parse(result);
                                }
                                if (col == 8)
                                {
                                    questions.QuestionImage = result;
                                }
                                if (col == 9)
                                {
                                    questions.AnswerType = result;
                                }
                                rawText.Remove(0, rawText.Length);
                            }
                            result = result.Trim();
                            
                            
                            
                            db.Questions.Add(questions);
                            db.SaveChanges();
                        }
                    }
                    return;


                }

                // create the directory.
                DirectoryInfo di = Directory.CreateDirectory(path);

                Console.WriteLine("The directory was created successfully at {0}.", Directory.GetCreationTime(path));
            }
            catch (Exception e)
            {
                Console.WriteLine("The process failed: {0}", e.ToString());
            }

        }

        //[Authorize]
        [Route("endTest")]
        [HttpPost]
        public IActionResult SaveAllQuestions([FromBody] SubmitAnswerCustomModel value)
        {
            Dictionary<string, string> email = new Dictionary<string, string>();
            Authentication auth = new Authentication();
            QuestionHandler qh = new QuestionHandler();

            email = auth.getAllClaims(HttpContext);
            qh.submitAllQuestions(value,email);
            
            return Ok();
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
=======

                        int rowCount = worksheet.Dimension.Rows;
                        int ColCount = worksheet.Dimension.Columns;
                        StringBuilder rawText = new StringBuilder();
                        String result = "";
                        for (int row = 1; row <= rowCount; row++)
                        {
                            for (int col = 1; col <= ColCount; col++)
                            {
                                // This is just for demo purposes
                                rawText.Append(worksheet.Cells[row, col].Value.ToString() + " ");
                                result = rawText.ToString();
                            }
                            result = result.Trim();
                            var split = result.Split(" ");
                            Questions questions = new Questions();
                            questions.QuestionText = split[0];
                            questions.Option1 = split[1];
                            questions.Option2 = split[2];
                            questions.Option3 = split[3];
                            questions.Option4 = split[4];
                            questions.Answer = split[5];
                            questions.Weightage = int.Parse(split[6]);
                            questions.QuestionImage = split[7];
                            questions.AnswerType = split[8];
                            db.Questions.Add(questions);
                            db.SaveChanges();
                        }
                    }
                    return;


                }

                // create the directory.
                DirectoryInfo di = Directory.CreateDirectory(path);
                Console.WriteLine("The directory was created successfully at {0}.", Directory.GetCreationTime(path));
            }
            catch (Exception e)
            {
                Console.WriteLine("The process failed: {0}", e.ToString());
            }

        }
>>>>>>> 3181595... Add Excel file feature completed

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

    