import { Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-restaurant-brown py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            {/* <a 
              href="#" 
              className="text-restaurant-beige text-sm font-light hover:text-restaurant-gold transition-colors duration-300 mx-2"
            >
              Regulamin
            </a> */}
            <span className="text-restaurant-beige opacity-50 mx-2">|</span>
            <span className="text-restaurant-beige text-sm font-light mx-2">
              © 2025 Złota Grota.<span className="text-restaurant-beige opacity-50 mx-2">|</span>Wszelkie prawa zastrzeżone.
            </span>
          </div>
          
          <div className="flex items-center">
            <a 
              href="#" 
              className="text-restaurant-beige hover:text-restaurant-gold transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;