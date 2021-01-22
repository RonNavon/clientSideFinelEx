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
    public class PurchaseController : ApiController
    {

        public static CafeteriaDbContext db = new CafeteriaDbContext();

        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public IHttpActionResult Post([FromBody] PurchaseDTO value)
        {
            try
            {
                Purchase purchase = new Purchase()
                {
                    Amount = value.Amount,
                    Date = DateTime.Now,
                    StudentId = value.StudentId,
                    SerialNumber = value.SerialNumber
                };
                db.Purchases.Add(purchase);
                db.SaveChanges();
                return Ok();
            }
            catch(Exception ex)
            {
                return Content(HttpStatusCode.BadRequest, ex);
            }
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