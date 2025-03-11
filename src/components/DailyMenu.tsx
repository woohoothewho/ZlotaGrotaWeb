import { useState } from 'react';
import { cn } from '@/lib/utils';

type Dish = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
};

const dishes: Dish[] = [
  {
    id: 1,
    name: "Makaron Włoski",
    description: "z sosem i świeżym parmezanem",
    price: "39 zł",
    image: "https://egjhivmcxepjebaeibiy.supabase.co/storage/v1/object/sign/zlota.grota.website/pasta.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ6bG90YS5ncm90YS53ZWJzaXRlL3Bhc3RhLmpwZyIsImlhdCI6MTc0MTIxNjE2MSwiZXhwIjoxNzQxODIwOTYxfQ.R7WpN3AWbBE0i0GH9bkCA6OqH9dbbw2nnteE8Te_ATc"
  },
  {
    id: 2,
    name: "Barszcz Czerwony",
    description: "z ziołami i kwaśną śmietaną",
    price: "25 zł",
    image: "https://egjhivmcxepjebaeibiy.supabase.co/storage/v1/object/sign/zlota.grota.website/soup.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ6bG90YS5ncm90YS53ZWJzaXRlL3NvdXAuanBnIiwiaWF0IjoxNzQxMjE2MTcwLCJleHAiOjE3NDE4MjA5NzB9.oLjJFXfu0rxCLTdwW1lQ8h3kTTZSKxGe-LQ0WOO6hak"
  },
  {
    id: 3,
    name: "Sernik Truskawkowy",
    description: "z musem truskawkowym i owocami.",
    price: "45 zł",
    image: "https://egjhivmcxepjebaeibiy.supabase.co/storage/v1/object/sign/zlota.grota.website/cake.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ6bG90YS5ncm90YS53ZWJzaXRlL2Nha2UuanBnIiwiaWF0IjoxNzQxMjE2MTgzLCJleHAiOjE3NDE4MjA5ODN9.22IPaEGWHmZShsEEdYo73tAuqg0-raR1PdFfeGDCq7g"
  }
];

const DailyMenu = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section 
      id="daily-menu" 
      className="min-h-screen px-6 py-28 md:py-32 bg-restaurant-bg bg-cover bg-center bg-fixed relative"
    >
      <div className="absolute inset-0 bg-restaurant-black/40"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 animate-fade-in">
          <span className="text-restaurant-gold text-sm uppercase tracking-wider font-medium mb-2">
            Nasze Specjalności
          </span>
          <h2 className="text-5xl md:text-6xl font-semibold text-restaurant-white mb-4">
            Menu Dnia
          </h2>
          <div className="w-24 h-0.5 bg-restaurant-gold"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {dishes.map((dish, index) => (
            <div 
              key={dish.id}
              className="relative group"
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className={cn(
                "rounded-lg overflow-hidden transition-all duration-500 glassmorphism bg-restaurant-white/10 hover:bg-restaurant-white/20 border border-restaurant-white/10",
                "transform hover:scale-[1.02] hover:shadow-2xl",
                index === 0 ? "animate-slide-up" : 
                index === 1 ? "animate-slide-up delay-100" : 
                "animate-slide-up delay-200"
              )}>
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-restaurant-black/70 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-medium text-restaurant-white">
                      {dish.name}
                    </h3>
                    <span className="text-xl font-semibold text-restaurant-gold">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-restaurant-beige opacity-90">
                    {dish.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyMenu;