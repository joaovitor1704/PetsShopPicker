using Microsoft.VisualBasic;
using PetshopPicker.Entities;
using PetshopPicker.Inteface;
using System.Linq;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace PetshopPicker.Services
{
    public class ReturnPetshop
    {
        readonly ChowChawgas petshop1 = new();
        readonly VaiRex petshop2 = new();
        readonly MeuCaninoFeliz petshop3 = new();

        public (string, double) BetsPetshopPicker(DateTime data, int smallQtt, int bigQtt)
        {
            var petshops = new Dictionary<string, (double, int)>();
            petshops.Add(petshop1.Name, (petshop1.CalcPrice(data, smallQtt, bigQtt), petshop1.Distance));
            petshops.Add(petshop2.Name, (petshop2.CalcPrice(data, smallQtt, bigQtt), petshop2.Distance));
            petshops.Add(petshop3.Name, (petshop3.CalcPrice(data, smallQtt, bigQtt), petshop3.Distance));
            var minPetshop = petshops.OrderBy(pair => pair.Value.Item1)
                                 .ThenBy(pair => pair.Value.Item2)
                                 .First();
            var name = minPetshop.Key;
            var price = minPetshop.Value.Item1;
            return (name, price);
        }
    }
}
