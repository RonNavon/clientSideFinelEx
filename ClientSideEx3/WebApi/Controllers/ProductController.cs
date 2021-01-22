using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DATA.EF;
using WebApi.Models;
using WebApi.DTO;

namespace WebApi.Controllers
{
    public class ProductController : ApiController
    {
        // GET api/<controller>
        public IHttpActionResult Get()
        {
            try
            {
                return Ok(ProductModel.GetProducts());
            }
            catch (Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}