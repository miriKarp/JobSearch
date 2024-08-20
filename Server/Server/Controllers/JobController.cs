using Microsoft.AspNetCore.Mvc;
using Angular.Models;
using System.Collections.Generic;

namespace Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        public static List<Job> allJobs = new List<Job>()
        {
            new Job {jobField="accountant",jobName="a",scopeHours=45,area="Modiin Ilit",requirements="english",home=false },
            new Job {jobField="teacher",jobName="b",scopeHours=30,area="Bnei Brak",requirements="none",home=false },
            new Job {jobField="taxconsultant",jobName="c",scopeHours=40,area="Jerusalem",requirements="math",home=false },
            new Job {jobField="programmer",jobName="d",scopeHours=50,area="Haifa",requirements="english",home=true },
            new Job {jobField="graphicartist",jobName="e",scopeHours=55,area="b",requirements="computer",home=true }
        };

        [HttpGet]
        public List<Job> GetAll() {

            return allJobs;
        }

    }
}
