using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular.Models
{
    public class Job
    {
        public string jobField { get; set; }
        public string jobName { get; set; } = "";
        public int scopeHours { get; set; }
        public string area { get; set; } = "";
        public string requirements { get; set; } = "";
        public bool home { get; set; }
    }
}
