using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using DATA.EF;
using WebApi.DTO;
using System.Data.Entity;

namespace WebApi.Models
{
    public class ProductModel
    {
        public static CafeteriaDbContext db = new CafeteriaDbContext();

        public static List<ProductDTO> GetProducts()
        {
            return db.Products.Select(p => new ProductDTO()
            {
                Name = p.Name,
                SerialNumber = p.SerialNumber,
                Price = p.Price ?? 0,
                Inventory = p.Inventory ?? 0 
            }).ToList();
        }
    }
}