import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import DailyMenu from '../components/DailyMenu';
import Footer from '../components/Footer';

const Index = () => {
  // Dodaj płynne przewijanie dla linków kotwicznych
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href') as string;
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main>
        {/* Sekcja Hero */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden bg-restaurant-bg bg-cover bg-center">
          <div className="absolute inset-0 bg-restaurant-black/50"></div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in">
            <span className="inline-block text-restaurant-gold text-sm uppercase tracking-widest mb-4 font-medium">
            Kulinarna przystań dla podróżnych
            </span>
            <h1 className="text-5xl md:text-7xl font-semibold text-restaurant-white mb-6 leading-tight">
            Domowe smaki, wyjątkowe doznania
            </h1>
            <div className="flex justify-center gap-4">
              <a 
                href="#daily-menu" 
                className="px-8 py-3 bg-restaurant-gold text-restaurant-white rounded-sm font-medium transition-all duration-300 hover:bg-restaurant-gold/90 hover:shadow-lg"
              >
                Zobacz Menu
              </a>
            </div>
          </div>
        </section>

        {/* Sekcja Codziennego Menu */}
        <DailyMenu />
        
        {/* Krótka Sekcja O Nas */}
        <section id="about" className="py-20 px-6 bg-restaurant-beige">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-restaurant-gold text-sm uppercase tracking-wider font-medium mb-2 block">
              O Nas
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-restaurant-brown mb-8">
              Nasza Filozofia Kulinarna
            </h2>
            <p className="text-lg text-restaurant-brown max-w-3xl mx-auto mb-10">
            Złota Grota łączy tradycyjną kuchnię polską z kuchnią śródziemnomorską. Przy stacji benzynowej tworzymy przytulną oazę kulinarną dla podróżnych i mieszkańców. Zapraszamy na podróż po wyjątkowych smakach.
            </p>
            <div className="w-24 h-0.5 bg-restaurant-gold mx-auto"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;