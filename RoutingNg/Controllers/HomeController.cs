using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using RoutingNg.Models;

namespace RoutingNg.Controllers
{
  
    public class HomeController : Controller
    {  
        [HttpGet]
        public System.Web.Mvc.JsonResult GetCustomers()
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