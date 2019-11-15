using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Examportal.Auth;
using Examportal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Examportal.Controllers
{
    [ApiController]
    public class ExaminerController : ControllerBase
    {
        // GET: api/Examiner
        ExamportalContext db = new ExamportalContext();

        [Route("/examiner/exams")]
        [HttpGet]
        public IActionResult allExams()
        {
            Dictionary<string, string> email = new Dictionary<string, string>();

            Authentication auth = new Authentication();
            email = auth.getAllClaims(HttpContext);
            String userEmail = "";
            foreach (KeyValuePair<string, string> em in email)
            {
                userEmail = em.Value;
                break;
            }
            var exams = db.ExamDetails.Where(e => e.Email == userEmail).ToList();
            return Ok(exams);
        }


    }
}
