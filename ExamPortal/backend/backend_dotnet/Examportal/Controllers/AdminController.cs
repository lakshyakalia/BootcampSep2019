using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Examportal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Examportal.Controllers
{
    [Route("/examiner")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        // GET: api/Admin
        ExamportalContext db = new ExamportalContext();
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Admin/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Admin
        [HttpPost]
        public IActionResult Post([FromBody] Users value)
        {


        }

        // PUT: api/Admin/5
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
