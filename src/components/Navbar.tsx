
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'O nas', href: '#about' },
    { name: 'Menu Dnia', href: '#daily-menu' },
    { name: 'Menu', href: '#menu' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4 px-6 md:px-12',
        isScrolled ? 'glassmorphism' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
        <img 
  src={isScrolled 
    ? "https://egjhivmcxepjebaeibiy.supabase.co/storage/v1/object/sign/zlota.grota.website/logo/logoZlota4PNG.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ6bG90YS5ncm90YS53ZWJzaXRlL2xvZ28vbG9nb1psb3RhNFBORy5wbmciLCJpYXQiOjE3NDEyMTkyNzcsImV4cCI6MTc0MTgyNDA3N30.MsKrTHaNyKbVSv-E2n6kyemys_0c-rTJNVBLQSnr2MM" 
    : "https://egjhivmcxepjebaeibiy.supabase.co/storage/v1/object/sign/zlota.grota.website/logoZlota2PNG.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ6bG90YS5ncm90YS53ZWJzaXRlL2xvZ29abG90YTJQTkcucG5nIiwiaWF0IjoxNzQxMjE1NTI5LCJleHAiOjE3NDE4MjAzMjl9.mx4-U04H4ySq35Y9y6FDVV12DtznSIW_D5qNm4c_Y-Q"
  } 
  alt="Restaurant Logo" 
  className="h-12 md:h-20 object-contain transition-all duration-300" 
/>
        </a>
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={cn(
                  "nav-link text-base font-medium transition-colors duration-300",
                  isScrolled ? "text-restaurant-black" : "text-restaurant-white"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            onClick={toggleMenu} 
            className={cn(
              "transition-colors duration-300",
              isScrolled ? "text-restaurant-black hover:text-restaurant-gold" : "text-restaurant-white hover:text-restaurant-gold"
            )}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div 
          className={cn(
            "fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] glassmorphism flex flex-col items-center justify-start pt-12 transition-all duration-300 ease-in-out",
            isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
          )}
        >
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="nav-link text-xl font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
