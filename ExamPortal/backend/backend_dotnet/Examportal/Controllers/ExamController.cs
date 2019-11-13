using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Examportal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Examportal.Controllers
{
    [ApiController]
    public class ExamController : ControllerBase
    {
        ExamportalContext db = new ExamportalContext();

        [Route("/exam/accessKey")]
        [HttpPost]
        public IActionResult checkAccessKey([FromBody] ExamDetails value)
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
        public IActionResult getExamTime()
        {
            string examcode = HttpContext.Request.Query["examCode"];

            return Ok(true);
        }
    }
}
