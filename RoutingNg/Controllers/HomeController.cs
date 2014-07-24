using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RoutingNg.Controllers
{

    public class Customer
    {
        public string name { get; set; }
        public string city { get; set; }
    }
    public class HomeController : Controller
    {  
        [HttpGet]
        public JsonResult GetUsers()
        {
            List<Customer> th = new List<Customer>();
            th.Add(new Customer { name = "Ziggy stardust", city = "Chicago" });
            th.Add(new Customer { name = "Heedy Wahlin", city = "Chandler" });
            th.Add(new Customer { name = "Dave Jones", city = "Phoenix" });
            th.Add(new Customer { name = "Jamie Riley", city = "Atlanta" });
            th.Add(new Customer { name = "Thomas Winter", city = "Seattle" });
            return Json(th, JsonRequestBehavior.AllowGet);
        }     

    }
}