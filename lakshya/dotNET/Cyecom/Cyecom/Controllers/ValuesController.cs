 using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Cyecom.Models;
using Microsoft.AspNetCore.Mvc;

namespace Cyecom.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        E_CommContext dc=new E_CommContext();
        
        // GET api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {
            var a = dc.Product.ToList();
            return a;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            var n = dc.Product.Find(id);
            return n;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Product value)
        {
            dc.Product.Add(value);
            dc.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {

        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var obj = dc.Product.Find(id);
            dc.Product.Remove(obj);
            dc.SaveChanges();
        }
    }
}
