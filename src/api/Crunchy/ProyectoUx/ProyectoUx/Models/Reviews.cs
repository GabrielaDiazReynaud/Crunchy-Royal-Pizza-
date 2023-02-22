using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoUx.Models
{
  public class Reviews
  {

    [Key]



    public int Id { get; set; }

    public string Name { get; set; }

    public string Type { get; set; }

    public string Comment { get; set; }

    public string UserName { get; set; }

   

  }
}
