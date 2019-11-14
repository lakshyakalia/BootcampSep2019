using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Examportal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Examportal.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class questionController : ControllerBase
    {
        // GET: api/question
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/question/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/question
        [Route("/exam/question")]
        [HttpPost]
        public void Post([FromBody] Questions questions)
        {
            //Use Namespace called :  System.IO  
           /* string FileName = Path.GetFileNameWithoutExtension(questions.ImageFile.FileName);

            //To Get File Extension  
            string FileExtension = Path.GetExtension(questions.ImageFile.FileName);

            //Add Current Date To Attached File Name  
            FileName = DateTime.Now.ToString("yyyyMMdd") + "-" + FileName.Trim() + FileExtension;

            //Get Upload path from Web.Config file AppSettings.  
            string UploadPath = ConfigurationManager.AppSettings["UserImagePath"].ToString();

            //Its Create complete path to store in server.  
            questions.ImagePath = UploadPath + FileName;

            //To copy and save file into server.  
            questions.ImageFile.SaveAs(questions.ImagePath);


            //To save Club Member Contact Form Detail to database table.  
            var db = new ExamportalContext();

            tblMember _member = new tblMember();

            _member.ImagePath = membervalues.ImagePath;
            _member.MemberName = membervalues.Name;
            _member.PhoneNumber = membervalues.PhoneNumber;

            db.tblMembers.InsertOnSubmit(_member);
            db.SubmitChanges();

            return View();*/
        }

        // PUT: api/question/5
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
