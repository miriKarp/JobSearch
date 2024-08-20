using Microsoft.AspNetCore.Mvc;
using Angular.Models;
using System.Collections.Generic;
using System;
using System.Linq;

namespace Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        public static List<User> allUsers = new List<User>() {
        new User{UserId=1,UserName="bina",UserPassword="bbbbbbbbb",UserJobField="programmer" ,userResumes=0 ,resumes=new List<string>()},
        new User{UserId=2,UserName="rina",UserPassword="rrrrrrrrr",UserJobField="graphicartist" ,userResumes=0 ,resumes=new List<string>()},
        new User{UserId=3,UserName="gila",UserPassword="g",UserJobField="teacher" ,userResumes=0 ,resumes=new List<string>()},
        new User{UserId=4,UserName="sara",UserPassword="s",UserJobField="taxconsultant" ,userResumes=0 ,resumes=new List<string>()},
        };

        [HttpGet("{name}/{password}")]
        public User Get(string name, string password)
        {
           return allUsers.FirstOrDefault(u => u.UserName == name && u.UserPassword == password)!;
        }
    }
}
