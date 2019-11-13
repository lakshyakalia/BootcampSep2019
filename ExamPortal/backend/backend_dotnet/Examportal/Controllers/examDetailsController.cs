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
        public IActionResult<ExamDetails> saveExam([FromBody] ExamDetails examDetails)
        {
            try
            {

                return Ok();
            }
            catch(Exception e)
            {
                
            }
            return BadRequest();
        }
    }
}