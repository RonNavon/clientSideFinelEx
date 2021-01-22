using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;
using WebApi.DTO;
using System.Data.Entity;

namespace WebApi.Models
{

    public class StudentModel
    {
        public static CafeteriaDbContext db = new CafeteriaDbContext();

        public static Student GetStudent(int id)
        {
            return db.Students.SingleOrDefault(x => x.StudentId == id);
        }

    }
}