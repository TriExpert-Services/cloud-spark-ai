import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Simple and direct navigation function
  const navigateToSection = (sectionId: string) => {
    // Close mobile menu immediately
    setIsMenuOpen(false);
    
    // Add small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback: try to scroll to top if section not found
        if (sectionId === 'inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 50);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-all duration-300">
      {/* Neural grid background */}
      <div className="absolute inset-0 bg-neural-grid opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-bold bg-gradient-tech bg-clip-text text-transparent cursor-pointer"
              onClick={() => navigateToSection('inicio')}
            >
              TriExpert Services AI
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <button 
                onClick={() => navigateToSection('inicio')} 
                className="text-foreground hover:text-primary transition-colors px-3 py-2 cursor-pointer font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => navigateToSection('servicios')} 
                className="text-foreground hover:text-primary transition-colors px-3 py-2 cursor-pointer font-medium"
              >
                Servicios
              </button>
              <button 
                onClick={() => navigateToSection('soluciones')} 
                className="text-foreground hover:text-primary transition-colors px-3 py-2 cursor-pointer font-medium"
              >
                Soluciones
              </button>
              <button 
                onClick={() => navigateToSection('blog')} 
                className="relative text-foreground hover:text-primary transition-colors px-3 py-2 group cursor-pointer font-medium"
              >
                Blog
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-ai transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </button>
              <button 
                onClick={() => navigateToSection('contacto')} 
                className="text-foreground hover:text-primary transition-colors px-3 py-2 cursor-pointer font-medium"
              >
                Contacto
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              variant="hero" 
              size="sm" 
              onClick={() => navigateToSection('contacto')}
            >
              Consulta Gratuita
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <button 
                onClick={() => navigateToSection('inicio')} 
                className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer w-full text-left font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => navigateToSection('servicios')} 
                className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer w-full text-left font-medium"
              >
                Servicios
              </button>
              <button 
                onClick={() => navigateToSection('soluciones')} 
                className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer w-full text-left font-medium"
              >
                Soluciones
              </button>
              <button 
                onClick={() => navigateToSection('blog')} 
                className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer w-full text-left font-medium"
              >
                Blog
              </button>
              <button 
                onClick={() => navigateToSection('contacto')} 
                className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer w-full text-left font-medium"
              >
                Contacto
              </button>
              <div className="pt-2">
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full" 
                  onClick={() => navigateToSection('contacto')}
                >
                  Consulta Gratuita
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;