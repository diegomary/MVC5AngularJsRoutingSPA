using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using RoutingNg.Models;
using System.Text;

namespace RoutingNg.Controllers
{
      
    public class RestApiController : ApiController
    {
        // GET api/values
        public System.Web.Http.Results.JsonResult<List<Customer>> Get()
        {
            List<Customer> th = new List<Customer>();
            th.Add(new Customer { name = "Diego Burlando", city = "Chicago" });
            th.Add(new Customer { name = "Heedy Wahlin", city = "Chandler" });
            th.Add(new Customer { name = "Dave Jones", city = "Phoenix" });
            th.Add(new Customer { name = "Jamie Riley", city = "Atlanta" });
            th.Add(new Customer { name = "Thomas Winter", city = "Seattle" });
            // Please note the JsonSerializerSettings in case of further customization
            //Newtonsoft.Json.JsonSerializerSettings st = new Newtonsoft.Json.JsonSerializerSettings();          
            //return Json(th,st); 
            return Json(th);
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        public string Post(Customer value)
        {
            // This first line allows to verify the client.
            string decodedToken = Encoding.UTF8.GetString(Convert.FromBase64String(ControllerContext.Request.Headers.Authorization.Parameter));           
            var a = value;
            return "Success";
        }

       
        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }

    }
}
