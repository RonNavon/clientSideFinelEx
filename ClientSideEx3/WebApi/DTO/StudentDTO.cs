using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;

namespace WebApi.DTO
{
    public class StudentDTO
    {
        public int Id;
        public string Name;

        public List<int> productsIDs;
    }
}