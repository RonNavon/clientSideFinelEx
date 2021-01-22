using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;

namespace WebApi.DTO
{
    public class ProductDTO
    {
        public string Name;
        public string SerialNumber;
        public double Price;
        public int Inventory;
    }
}