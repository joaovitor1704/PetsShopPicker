using PetshopPicker.Inteface;

namespace PetshopPicker.Entities
{
    public class ChowChawgas : IPetshop
    {
        public string Name { get; }
        public int Distance { get; }
        public double SmallPrice { get; }
        public double BigPrice { get; }
        public ChowChawgas()
        {
            Name = "Chow Chawgas";
            Distance = 800;
            SmallPrice = 30;
            BigPrice = 45;
        }

        public double CalcPrice(DateTime data, int smallQtt, int bigQtt)
        {
            return smallQtt * SmallPrice + bigQtt * BigPrice;
        }
    }
}
