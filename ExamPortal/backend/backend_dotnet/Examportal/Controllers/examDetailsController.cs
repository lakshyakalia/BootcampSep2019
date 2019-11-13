using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Examportal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

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
        public ExamDetails viewExamDeatils()
        {
            try
            {
                return db.ExamDetails.Find();
            }catch(Exception e)
            {
                return e;
            }
        }
    }
}