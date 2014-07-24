using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Script.Serialization;


namespace RoutingNg.Controllers
{

    public class ApiCustomer
    {
        public string name { get; set; }
        public string city { get; set; }
    }
    public class RestApiController : ApiController
    {
        // GET api/values
        public System.Web.Http.Results.JsonResult<List<ApiCustomer>> Get()
        {
            List<ApiCustomer> th = new List<ApiCustomer>();
            th.Add(new ApiCustomer { name = "Diego Burlando", city = "Chicago" });
            th.Add(new ApiCustomer { name = "Heedy Wahlin", city = "Chandler" });
            th.Add(new ApiCustomer { name = "Dave Jones", city = "Phoenix" });
            th.Add(new ApiCustomer { name = "Jamie Riley", city = "Atlanta" });
            th.Add(new ApiCustomer { name = "Thomas Winter", city = "Seattle" });
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

        // POST api/values
        public void Post([FromBody]string value)
        {
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
