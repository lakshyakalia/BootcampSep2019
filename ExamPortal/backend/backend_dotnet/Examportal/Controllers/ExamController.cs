using System.Linq;
using System;
using System.IO;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Examportal.Auth;
using ExcelDataReader ;
using Newtonsoft.Json;
using System.Text;

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


        [Route("/exam/questions/uploadExcel")]
        public IActionResult ExcelUpload()
        {
            Encoding.RegisterProvider(CodePagesEncodingProvider.Instance);

            var inFilePath = args[0];
            var outFilePath = args[1];

            using (var inFile = File.Open(inFilePath, FileMode.Open, FileAccess.Read))
            using (var outFile = File.CreateText(outFilePath))
            {
                using (var reader = ExcelReaderFactory.CreateReader(inFile, new ExcelReaderConfiguration()
                { FallbackEncoding = Encoding.GetEncoding(1252) }))
                using (var writer = new JsonTextWriter(outFile))
                {
                    writer.Formatting = Formatting.Indented; //I likes it tidy
                    writer.WriteStartArray();
                    reader.Read(); //SKIP FIRST ROW, it's TITLES.
                    do
                    {
                        while (reader.Read())
                        {
                            //peek ahead? Bail before we start anything so we don't get an empty object
                            var status = reader.GetString(0);
                            if (string.IsNullOrEmpty(status)) break;

                            writer.WriteStartObject();
                            writer.WritePropertyName("Status");
                            writer.WriteValue(status);

                            writer.WritePropertyName("Title");
                            writer.WriteValue(reader.GetString(1));

                            writer.WritePropertyName("Host");
                            writer.WriteValue(reader.GetString(6));

                            writer.WritePropertyName("Guest");
                            writer.WriteValue(reader.GetString(7));

                            writer.WritePropertyName("Episode");
                            writer.WriteValue(Convert.ToInt32(reader.GetDouble(2)));

                            writer.WritePropertyName("Live");
                            writer.WriteValue(reader.GetDateTime(5));

                            writer.WritePropertyName("Url");
                            writer.WriteValue(reader.GetString(11));

                            writer.WritePropertyName("EmbedUrl");
                            writer.WriteValue($"{reader.GetString(11)}player");
                           

                            writer.WriteEndObject();
                        }
                    } while (reader.NextResult());
                    writer.WriteEndArray();
                }
            }
            return Ok();
        }



    }
}
