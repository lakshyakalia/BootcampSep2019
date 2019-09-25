using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        ETestContext e = new ETestContext();
      //  GET api/values
       [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

      //  GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

     //   POST api/values
       [HttpPost]
        public IActionResult Post([FromBody]Signn value)
        {
            try
            {
                e.Signn.Add(value);
                e.SaveChanges();
                return Ok(value);
            }
            catch(Exception e)
            {
                return BadRequest(e);
            }
        }

     ////   PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

     //   DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
