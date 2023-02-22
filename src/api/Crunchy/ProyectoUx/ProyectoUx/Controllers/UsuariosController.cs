using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoUx.Data;
using ProyectoUx.Models;

namespace ProyectoUx.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly ProyectoUxContext _context;

        public UsuariosController(ProyectoUxContext context)
        {
            _context = context;
        }

        // GET: api/Usuarios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuarios>>> GetUsuarios()
        {
            return await _context.Usuarios.ToListAsync();
        }

        // GET: api/Usuarios/5
        [HttpGet("{Nombre}")]
        public async Task<ActionResult<Usuarios>> GetUsuarios(string nombre)
        {
            var usuarios = await _context.Usuarios.FindAsync(nombre);

            if (usuarios == null)
            {
                return NotFound();
            }

            return usuarios;
        }

        // PUT: api/Usuarios/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{Nombre}")]
        public async Task<IActionResult> PutUsuarios(string Nombre, Usuarios usuarios)
        {
            if ( Nombre != usuarios.Nombre)
            {
                return BadRequest();
            }

            _context.Entry(usuarios).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UsuariosExists(Nombre))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Usuarios
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Usuarios>> PostUsuarios(Usuarios usuarios)
        {
            _context.Usuarios.Add(usuarios);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUsuarios", new { Nombre = usuarios.Nombre }, usuarios);
        }

        // DELETE: api/Usuarios/5
        [HttpDelete("{Nombre}")]
        public async Task<ActionResult<Usuarios>> DeleteUsuarios(string Nombre)
        {
            var usuarios = await _context.Usuarios.FindAsync(Nombre);
            if (usuarios == null)
            {
                return NotFound();
            }

            _context.Usuarios.Remove(usuarios);
            await _context.SaveChangesAsync();

            return usuarios;
        }

        private bool UsuariosExists(String Nombre)
        {
            return _context.Usuarios.Any(e => e.Nombre == Nombre);
        }
    }
}
