using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Examportal.Auth;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
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
        [Authorize]
        [HttpGet]
        [Route("/exam")]
        public IEnumerable<ExamDetails> viewExamDeatils()
        {
            Dictionary<string, string> email = new Dictionary<string, string>();

            Authentication auth = new Authentication();
            email = auth.getAllClaims(HttpContext);
            String userEmail = "";
            foreach(KeyValuePair<string,string>em in email)
            {
                userEmail = em.Value;
                break;
            }
            //request.headers.trygetvalue("email", out email);
            //yield return db.ExamDetails.Find(email);

            return db.ExamDetails.ToList();
        }
    }
}