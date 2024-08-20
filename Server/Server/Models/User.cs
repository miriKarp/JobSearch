using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; } = "";
        public string UserPassword { get; set; } = "";
        public string UserJobField { get; set; }
        public int userResumes { get; set; }
        public List<string> resumes { get; set; }
    }
}
