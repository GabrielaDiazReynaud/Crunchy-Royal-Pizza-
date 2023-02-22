using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProyectoUx.Models
{
  public class Emails
  {
    [Key]
    public int id { get; set; }
    public string froms { get; set; }
    public string tos { get; set; }
    public string subject { get; set; }
    public string text { get; set; }
  }
}
