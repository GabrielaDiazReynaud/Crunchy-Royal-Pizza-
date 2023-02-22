using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoUx.Models
{
  public class Pizza
  {
    public int Id { get; set; }
    public string Name { get; set; }

    public decimal Price { get; set; }
    public string Description { get; set; }

    public string imageUrl { get; set; }
  }
}
