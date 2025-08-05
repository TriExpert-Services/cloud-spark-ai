import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Brain, Zap, CircuitBoard } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>
      </div>
      
      {/* Neural Network Grid Background */}
      <div className="absolute inset-0 bg-neural-grid opacity-20"></div>
      
      {/* Subtle Tech Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="2" fill="hsl(220 70% 45%)" opacity="0.5" />
              <line x1="50" y1="0" x2="50" y2="100" stroke="hsl(220 70% 45%)" strokeWidth="0.5" opacity="0.3" />
              <line x1="0" y1="50" x2="100" y2="50" stroke="hsl(220 70% 45%)" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
      </div>

      {/* Neural Network Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full neural-pulse"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-purple-400 rounded-full neural-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-32 w-5 h-5 bg-pink-400 rounded-full neural-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-64 left-1/3 w-2 h-2 bg-cyan-400 rounded-full neural-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-40 right-1/4 w-4 h-4 bg-indigo-400 rounded-full neural-pulse" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
              <stop offset="50%" stopColor="rgb(168, 85, 247)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <line x1="10%" y1="15%" x2="30%" y2="40%" stroke="url(#line-gradient)" strokeWidth="1" className="neural-pulse" />
          <line x1="70%" y1="20%" x2="90%" y2="45%" stroke="url(#line-gradient)" strokeWidth="1" className="neural-pulse" />
          <line x1="20%" y1="70%" x2="40%" y2="45%" stroke="url(#line-gradient)" strokeWidth="1" className="neural-pulse" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <Brain className="w-4 h-4 text-blue-300" />
            <span className="text-sm text-blue-100 font-mono">AI-Powered Automation</span>
            <CircuitBoard className="w-4 h-4 text-purple-300" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            Automatiza tu empresa con{" "}
            <span className="text-gradient-neural font-black">
              IA y n8n
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transformamos tus procesos empresariales con <span className="text-gradient-ai font-semibold">automatización inteligente</span>. 
            Reducimos costos, aumentamos la eficiencia y liberamos a tu equipo para tareas estratégicas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group ai-glow neural-pulse shadow-neural" onClick={scrollToContact}>
              <Zap className="mr-2 h-5 w-5 text-yellow-300" />
              Comenzar Ahora
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline-hero" size="xl" className="group bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 transition-neural">
              <Play className="mr-2 h-5 w-5" />
              Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 relative">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-gradient-ai mb-2 font-mono">95%</div>
              <div className="text-blue-200">Reducción de tareas manuales</div>
              <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-gradient-ai mb-2 font-mono">70%</div>
              <div className="text-blue-200">Ahorro en costos operativos</div>
              <div className="w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-200"></div>
            </div>
            <div className="text-center col-span-2 md:col-span-1 group">
              <div className="text-3xl md:text-4xl font-bold text-gradient-ai mb-2 font-mono">24/7</div>
              <div className="text-blue-200">Operación continua</div>
              <div className="w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-400"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-ai opacity-20 rounded-full animate-float circuit-glow"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-neural opacity-15 rounded-full animate-float circuit-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-gradient-ai opacity-25 rounded-full animate-float circuit-glow" style={{ animationDelay: '2s' }}></div>
      
      {/* Data flow lines */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent data-flow"></div>
      <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent data-flow" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;