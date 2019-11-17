using System.Linq;
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
                    //var fileName = ContentDispositionHeaderValue.Parse(filePayload.ContentDisposition).FileName;
                    if (filePayload.Length > 0)
                        using (var fileStream = new FileStream(Path.Combine(path, filePayload.FileName ), FileMode.Create))
                            await filePayload.CopyToAsync(fileStream);
                    //var filetoread = Directory.GetFiles(Path.Combine( path, filePayload.FileName), "*.xlsx", SearchOption.AllDirectories);
                    //var file = filesdirectory.FirstOrDefault(c => c.Equals(filePayload.FileName));
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

    }
}

    