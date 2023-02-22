using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProyectoUx.Models;

namespace ProyectoUx.Data
{
    public class ProyectoUxContext : DbContext
    {
        public ProyectoUxContext (DbContextOptions<ProyectoUxContext> options)
            : base(options)
        {
        }

        public DbSet<ProyectoUx.Models.Usuarios> Usuarios { get; set; }

        public DbSet<ProyectoUx.Models.Pizza> Pizza { get; set; }

        public DbSet<ProyectoUx.Models.Sides> Sides { get; set; }

        public DbSet<ProyectoUx.Models.Paquetes> Paquetes { get; set; }

        public DbSet<ProyectoUx.Models.Reviews> Reviews { get; set; }

        public DbSet<ProyectoUx.Models.Emails> Emails { get; set; }
    }
}
