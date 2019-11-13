using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Examportal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Primitives;

namespace Examportal.Controllers
{
    [Route("[controller]")]
    public class examDetailsController : ControllerBase
    {
        public IConfiguration _config;
        public examDetailsController(IConfiguration config)
        {
            _config = config;
        }
        ExamportalContext db = new ExamportalContext();
        
        [Route("/exam")]
        [HttpPost]
        public IActionResult saveExam([FromBody] ExamDetails examDetails)
        {
            try
            {
                db.ExamDetails.Add(examDetails);
                db.SaveChanges();
                return Ok( new { msg="exam details saved",
                    status=200
                    });
            }
            catch(Exception e)
            {
                return BadRequest(new { error = e });
            }
        }
        [Route("/exam")]
        [HttpGet]
        public IEnumerable<ExamDetails> viewExamDeatils()
        {
            //StringValues email;
            //Request.Headers.TryGetValue("Email", out email);
            //yield return db.ExamDetails.Find(email);

            return db.ExamDetails.ToList();
        }
    }
}