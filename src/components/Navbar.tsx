import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 transition-all duration-300">
      {/* Neural grid background */}
      <div className="absolute inset-0 bg-neural-grid opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-tech bg-clip-text text-transparent">
              TriExpert Services AI
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="text-foreground hover:text-primary transition-colors px-3 py-2 cursor-pointer">
                Inicio
              </a>
              <a href="#servicios" className="text-foreground hover:text-primary transition-colors px-3 py-2 cursor-pointer">
                Servicios
              </a>
              <a href="#soluciones" className="text-foreground hover:text-primary transition-colors px-3 py-2 cursor-pointer">
                Soluciones
              </a>
              <a href="#contacto" className="text-foreground hover:text-primary transition-colors px-3 py-2 cursor-pointer">
                Contacto
              </a>
              <a href="#blog" className="relative text-foreground hover:text-primary transition-colors px-3 py-2 group cursor-pointer">
                Blog
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-ai transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm" onClick={scrollToContact}>
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
              <a href="#inicio" className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Inicio
              </a>
              <a href="#servicios" className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Servicios
              </a>
              <a href="#soluciones" className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Soluciones
              </a>
              <a href="#blog" className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Blog
              </a>
              <a href="#contacto" className="block px-3 py-2 text-foreground hover:text-primary cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                Contacto
              </a>
              <div className="pt-2">
                <Button variant="hero" size="sm" className="w-full" onClick={scrollToContact}>
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