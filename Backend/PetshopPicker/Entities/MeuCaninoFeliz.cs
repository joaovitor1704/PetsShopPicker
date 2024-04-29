using PetshopPicker.Inteface;
using System.Xml.Linq;

namespace PetshopPicker.Entities
{
    public class MeuCaninoFeliz : IPetshop
    {
        public string Name { get; }
        public int Distance { get; }
        public double SmallPrice { get; }
        public double BigPrice { get; }
        public double WeekendIncrease { get; }
        public MeuCaninoFeliz()
        {
            Name = "Meu Canino Feliz";
            Distance = 2000;
            SmallPrice = 20;
            BigPrice = 40;
            WeekendIncrease = 1.2;
        }

        public double CalcPrice(DateTime data, int smallQtt, int bigQtt)
        {
            if(data.DayOfWeek == DayOfWeek.Sunday || data.DayOfWeek == DayOfWeek.Saturday) {
                return (smallQtt * SmallPrice + bigQtt * BigPrice) * WeekendIncrease;
            }
            else
            {
                return smallQtt * SmallPrice + bigQtt * BigPrice;
            }
        }
    }
}
