using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Primitives;
using Microsoft.IdentityModel.Tokens;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{

    [Produces("application/json")]
    [Route("api/Login")]
    public class LoginController : Controller
    {
         
        ETestContext obj = new ETestContext();
        private IConfiguration _config;

        public LoginController(IConfiguration config)
        {
            _config = config;
        }
        // GET: api/Login
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/Login/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Login
        [HttpPost]
        public IActionResult Post([FromBody]dynamic value)
        {
            StringValues emailValue;
            StringValues passwordValue;
            Request.Headers.TryGetValue("username", out emailValue);
            Request.Headers.TryGetValue("password", out passwordValue);
            String username = emailValue.FirstOrDefault();
            String password = passwordValue.FirstOrDefault();
            Signn loggedinUser = obj.Signn.Find(username);
            String upass = loggedinUser.Password;
           
            
            try
            {
                if (BCrypt.Net.BCrypt.Verify(password, upass))
                {
                    String tokenString = GenerateJSONWebToken(loggedinUser);
                    return Ok(new { token = tokenString });
                }
                //if (loggedinUser.Password.Equals(password))
                //{
                //    return Ok(true);
                //}
            }
            catch (Exception ex)
            {
                return Unauthorized();
            }
            return BadRequest();
        }


        //try
        //{
        //    var val = obj.Signn.Where(em => em.Username == value.Username).ToList();
        //    if (val.Count() > 0)
        //    {
        //        if (val.Exists(Pass => string.Compare(Pass.Password, value.Password) == 0))
        //            return Ok(val);
        //        else
        //            return BadRequest("Wrong Password!");
        //    }
        //    else
        //        return BadRequest("Username Invalid"); 
        //}
        //catch(Exception e)
        //{
        //    return BadRequest(e);
        //}



        // PUT: api/Login/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        [Route("sample")]
        [HttpGet]
        [Authorize]
        public IActionResult sampleAuthRoute()
        {
            try
            {
                var currentUser = HttpContext.User;
                return Ok(new { message = "Sample page working" });

            }
            catch (Exception ex)
            {
               
            }
            return BadRequest();
        }

        private string GenerateJSONWebToken(Signn userInfo)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[] {
        new Claim("Username", userInfo.Username),
        new Claim("Collegename", userInfo.Collegename),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
    };
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
              _config["Jwt:Issuer"],
              claims,
              expires: DateTime.Now.AddMinutes(120),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}

