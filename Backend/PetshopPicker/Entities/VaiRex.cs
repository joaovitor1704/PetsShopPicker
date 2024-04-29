using PetshopPicker.Inteface;

namespace PetshopPicker.Entities
{
    public class VaiRex : IPetshop
    {
        public string Name { get; }
        public int Distance { get; }
        public double WeekSmallPrice { get; }
        public double WeekBigPrice { get; }
        public double WeekendSmallPrice { get; }
        public double WeekendBigPrice { get; }
        public VaiRex()
        {
            Name = "Vai Rex";
            Distance = 1700;
            WeekSmallPrice = 15;
            WeekBigPrice = 50;
            WeekendSmallPrice = 20;
            WeekendBigPrice = 55;
        }

        public double CalcPrice(DateTime data, int smallQtt, int bigQtt)
        {
            if (data.DayOfWeek == DayOfWeek.Sunday || data.DayOfWeek == DayOfWeek.Saturday)
            {
                return smallQtt * WeekendSmallPrice + bigQtt * WeekendBigPrice;
            }
            else
            {
                return smallQtt * WeekSmallPrice + bigQtt * WeekBigPrice;
            }
        }
    }
}
