using Microsoft.AspNetCore.Mvc;
using PetshopPicker.Services;

namespace PetshopPicker.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PetshopController : ControllerBase
    {
        [HttpPost("{SmallQuantity}/{BigQuantity}")]
        public IActionResult GetBestPetshop([FromBody] DateTime date, int SmallQuantity, int BigQuantity)
        {
            var calculate = new ReturnPetshop();
            var name = calculate.BetsPetshopPicker(date, SmallQuantity, BigQuantity).Item1;
            var price = calculate.BetsPetshopPicker(date, SmallQuantity, BigQuantity).Item2;
            return Ok(new { name = name, price = price });
        }
    }
}
