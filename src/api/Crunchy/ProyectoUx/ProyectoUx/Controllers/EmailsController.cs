using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProyectoUx.Data;
using ProyectoUx.Models;
using System.IO;
using RestSharp;
using RestSharp.Authenticators;
using System.Net.Http;

namespace ProyectoUx.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailsController : ControllerBase
    {
        private readonly ProyectoUxContext _context;

        public EmailsController(ProyectoUxContext context)
        {
            _context = context;
        }

        // GET: api/Emails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Emails>>> GetEmails()
        {
            return await _context.Emails.ToListAsync();
        }

        // GET: api/Emails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Emails>> GetEmails(int id)
        {
            var emails = await _context.Emails.FindAsync(id);

            if (emails == null)
            {
                return NotFound();
            }

            return emails;
        }

        // PUT: api/Emails/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmails(int id, Emails emails)
        {
            if (id != emails.id)
            {
                return BadRequest();
            }

            _context.Entry(emails).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmailsExists(id))
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

        // POST: api/Emails
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Emails>> PostEmails(Emails emails)
        {
             SendSimpleMessage(emails.text);
           
            

            return CreatedAtAction("GetEmails", new { id = emails.id }, emails);
        }

        // DELETE: api/Emails/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Emails>> DeleteEmails(int id)
        {
            var emails = await _context.Emails.FindAsync(id);
            if (emails == null)
            {
                return NotFound();
            }

            _context.Emails.Remove(emails);
            await _context.SaveChangesAsync();

            return emails;
        }

        private bool EmailsExists(int id)
        {
            return _context.Emails.Any(e => e.id == id);
        }


    public static IRestResponse SendSimpleMessage(string text)
    {
      RestClient client = new RestClient();
      client.BaseUrl = new Uri("https://api.mailgun.net/v3");
      client.Authenticator = new HttpBasicAuthenticator("api", "33aa6efb9d5fb8356db812a108324d26-e49cc42c-5c368812");
      RestRequest request = new RestRequest();
      request.AddParameter("domain", "sandbox86d19d32cbc04bedbd31886a8cd6878e.mailgun.org", ParameterType.UrlSegment);
      request.Resource = "{domain}/messages";
      request.AddParameter("from", "Crunchy Order <mailgun@sandbox86d19d32cbc04bedbd31886a8cd6878e.mailgun.org>");
      request.AddParameter("to", "gabydiaz2000@unitec.edu");
      request.AddParameter("subject", "Cuenta");
      request.AddParameter("text", text); 
      request.AddParameter("html", "<html><img src=https://github.com/SupremeMaster23/CrunchyRoyalPizza/blob/main/ProyectoUx1/src/assets/images/pizza.png?raw=true ><br> <div>"+text+"</div></html>");
      request.Method = Method.POST;
      return client.Execute(request);
    }

  }
}

