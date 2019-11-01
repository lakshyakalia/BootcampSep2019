using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API_project.Models;
using Microsoft.AspNetCore.Mvc;

namespace API_project.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        DotNetAPIContext con = new DotNetAPIContext();
        // GET api/values
        [HttpGet]
        public IEnumerable<Product> Get()
        {

            var val = con.Product.ToList();
            return val;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Product Get(int id)
        {
            var pro = con.Product.Find(id);
            
            return pro;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]Product value)
        {
           con.Product.Add(value);
            con.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Product value)
        {
            var obj = con.Product.FirstOrDefault(e => e.PId == id);
            obj.PId = value.PId;
            obj.PName = value.PName;
            obj.PPrice = value.PPrice;
            con.SaveChanges();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            con.Product.Remove(con.Product.FirstOrDefault(e => e.PId == id));
            con.SaveChanges();
        }
    }
}
