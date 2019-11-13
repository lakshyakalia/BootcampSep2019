using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Examportal.Auth;

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

        [Route("exam/accessKey")]
        [HttpGet]
        [Authorize]
        public IActionResult GetExamTime()
        {
            Boolean tokenStatus;
            string token = HttpContext.Request.Headers["token"];
            string examcode = HttpContext.Request.Headers["examCode"];
            tokenStatus = Authentication.ValidateToken(token);
            return Ok(true);
        }
    }
}
