import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle, ArrowRight, Factory, ShoppingCart, HeartHandshake, Briefcase, Cpu, Target, TrendingUp } from "lucide-react";

const Solutions = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const solutions = [
    {
      icon: <Factory className="w-8 h-8 text-primary neural-pulse" />,
      sector: "Manufactura",
      title: "Automatización Industrial",
      description: "Optimiza la producción, controla inventarios y gestiona la cadena de suministro automáticamente.",
      benefits: [
        "Reducción del 40% en tiempo de producción",
        "Control automático de calidad",
        "Gestión inteligente de inventarios",
        "Mantenimiento predictivo"
      ],
      color: "bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500",
      caseStudy: {
        company: "ManufacturTech Solutions",
        industry: "Fabricación de Componentes Electrónicos",
        challenge: "La empresa enfrentaba problemas de control de calidad inconsistente, inventarios desactualizados y tiempos de inactividad no planificados que afectaban su productividad y rentabilidad.",
        solution: "Implementamos un sistema integral de automatización que incluye sensores IoT para monitoreo en tiempo real, algoritmos de machine learning para mantenimiento predictivo, y workflows automatizados para gestión de inventarios.",
        results: [
          "Reducción del 45% en tiempo de producción",
          "Mejora del 92% en precisión de control de calidad",
          "Disminución del 78% en tiempo de inactividad no planificado",
          "Optimización del 85% en gestión de inventarios",
          "Ahorro anual de €2.3 millones en costos operativos"
        ],
        timeline: "6 meses de implementación",
        technologies: ["n8n", "Machine Learning", "Sensores IoT", "ERP Integration", "Dashboards en Tiempo Real"]
      }
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary neural-pulse" />,
      sector: "E-commerce",
      title: "Automatización de Ventas",
      description: "Desde el marketing hasta el cumplimiento, automatiza todo tu embudo de ventas online.",
      benefits: [
        "Marketing automatizado multicanal",
        "Gestión automática de pedidos",
        "Atención al cliente 24/7 con IA",
        "Análisis predictivo de ventas"
      ],
      color: "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600",
      caseStudy: {
        company: "EcoStyle Marketplace",
        industry: "E-commerce de Moda Sostenible",
        challenge: "Dificultades para gestionar múltiples canales de venta, atención al cliente saturada, y falta de personalización en campañas de marketing que resultaba en baja conversión.",
        solution: "Desarrollamos un ecosistema automatizado que conecta todos los canales de venta, implementa chatbots inteligentes para atención al cliente, y utiliza IA para personalización de marketing y predicción de demanda.",
        results: [
          "Aumento del 180% en conversiones",
          "Reducción del 65% en tiempo de respuesta al cliente",
          "Incremento del 220% en valor promedio de pedido",
          "Mejora del 90% en precisión de predicción de inventario",
          "Crecimiento del 340% en ingresos anuales"
        ],
        timeline: "4 meses de implementación",
        technologies: ["n8n", "ChatGPT API", "Shopify Plus", "Google Analytics", "Marketing Automation"]
      }
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary neural-pulse" />,
      sector: "Servicios",
      title: "Optimización de Procesos",
      description: "Automatiza la gestión de clientes, facturación y operaciones de servicios profesionales.",
      benefits: [
        "CRM automatizado",
        "Facturación inteligente",
        "Programación automática de citas",
        "Reportes automáticos de rendimiento"
      ],
      color: "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500",
      caseStudy: {
        company: "LegalTech Advisors",
        industry: "Servicios Legales Corporativos",
        challenge: "Procesos manuales de facturación, dificultades en seguimiento de casos, y falta de visibilidad en métricas de rendimiento que afectaba la rentabilidad y satisfacción del cliente.",
        solution: "Automatizamos toda la gestión de casos desde la consulta inicial hasta la facturación, implementamos sistemas de seguimiento automático y dashboards de rendimiento en tiempo real.",
        results: [
          "Reducción del 80% en tiempo de facturación",
          "Mejora del 95% en seguimiento de casos",
          "Aumento del 150% en satisfacción del cliente",
          "Incremento del 75% en productividad por abogado",
          "Reducción del 60% en errores administrativos"
        ],
        timeline: "3 meses de implementación",
        technologies: ["n8n", "CRM Integration", "Time Tracking", "Document Automation", "Business Intelligence"]
      }
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary neural-pulse" />,
      sector: "Corporativo",
      title: "Transformación Digital",
      description: "Digitaliza y automatiza procesos administrativos, RRHH y operaciones corporativas.",
      benefits: [
        "Automatización de RRHH",
        "Gestión documental inteligente",
        "Workflows de aprobaciones",
        "Business Intelligence automatizado"
      ],
      color: "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500",
      caseStudy: {
        company: "GlobalCorp Enterprises",
        industry: "Consultoría Empresarial Internacional",
        challenge: "Procesos de RRHH fragmentados, aprobaciones lentas, gestión documental ineficiente y falta de insights en tiempo real para toma de decisiones estratégicas.",
        solution: "Implementamos una plataforma integral que automatiza todos los procesos de RRHH, digitaliza la gestión documental, acelera workflows de aprobación y proporciona business intelligence automatizado.",
        results: [
          "Reducción del 70% en tiempo de procesos de RRHH",
          "Mejora del 85% en velocidad de aprobaciones",
          "Automatización del 95% de gestión documental",
          "Acceso a insights en tiempo real 24/7",
          "Ahorro de 150 horas/mes en tareas administrativas"
        ],
        timeline: "8 meses de implementación",
        technologies: ["n8n", "SharePoint", "Power BI", "Active Directory", "Workflow Automation"]
      }
    }
  ];

  return (
    <section id="soluciones" className="py-20 bg-background relative overflow-hidden">
      {/* Neural network background */}
      <div className="absolute inset-0 bg-neural-grid opacity-30"></div>
      
      {/* Floating tech elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-ai opacity-10 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-neural opacity-15 rounded-full animate-float blur-lg" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-neural/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-mono font-semibold">INDUSTRY SOLUTIONS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Soluciones por <span className="text-gradient-neural">Sector</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desarrollamos soluciones específicas adaptadas a las necesidades únicas de cada industria
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 relative z-10">
          {solutions.map((solution, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-neural transition-neural border-0 shadow-card-custom ai-glow">
              {/* Gradient Background */}
              <div className={`absolute top-0 left-0 w-full h-2 ${solution.color}`}></div>
              
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-ai opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              {/* Tech pattern overlay */}
              <div className="absolute bottom-0 right-0 w-40 h-40 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
                  <defs>
                    <pattern id={`circuit-${index}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="currentColor" />
                      <line x1="2" y1="2" x2="18" y2="2" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="2" y1="2" x2="2" y2="18" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill={`url(#circuit-${index})`} />
                </svg>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-ai/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors circuit-glow">
                    {solution.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gradient-ai font-semibold mb-1 font-mono">{solution.sector}</div>
                    <CardTitle className="text-xl group-hover:text-gradient-ai transition-colors duration-300">{solution.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 neural-pulse" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  variant="tech"
                  className="w-full group bg-gradient-ai/10 hover:bg-gradient-ai/20 border border-primary/20 hover:border-primary/40 transition-neural"
                  onClick={() => setSelectedCase(index)}
                >
                  Ver Caso de Estudio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-ai/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/10 relative z-10 ai-glow">
          {/* Background pattern */}
          <div className="absolute inset-0 bg-neural-grid opacity-20 rounded-2xl"></div>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-neural/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-mono font-semibold">IMPLEMENTATION PROCESS</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nuestro Proceso de <span className="text-gradient-neural">Implementación</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un enfoque estructurado para garantizar el éxito de tu transformación digital
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative z-10">
            {[
              { step: "01", title: "Análisis", desc: "Evaluamos tus procesos actuales y identificamos oportunidades" },
              { step: "02", title: "Diseño", desc: "Creamos soluciones personalizadas para tus necesidades específicas" },
              { step: "03", title: "Implementación", desc: "Desarrollamos e integramos las automatizaciones en tu sistema" },
              { step: "04", title: "Optimización", desc: "Monitoreamos y mejoramos continuamente el rendimiento" }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-ai rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4 neural-pulse border-2 border-primary/20 group-hover:border-primary/40 transition-colors circuit-glow">
                  {phase.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gradient-ai transition-colors duration-300">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
                
                {/* Connection line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent -translate-x-8 translate-y-8">
                    <div className="w-0 h-full bg-primary/60 data-flow"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 relative z-10">
          <Button variant="hero" size="xl" className="neural-pulse shadow-neural ai-glow" onClick={scrollToContact}>
            <Cpu className="mr-2 h-5 w-5 text-cyan-300" />
            Agenda tu Consulta Estratégica
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Case Study Modal */}
        <Dialog open={selectedCase !== null} onOpenChange={() => setSelectedCase(null)}>
          <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background to-background/95 backdrop-blur-xl border border-primary/20 ai-glow">
            {selectedCase !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-3 text-gradient-neural">
                    {solutions[selectedCase].icon}
                    Caso de Estudio: {solutions[selectedCase].caseStudy.company}
                  </DialogTitle>
                  <DialogDescription className="text-base font-mono">
                    {solutions[selectedCase].caseStudy.industry} • {solutions[selectedCase].caseStudy.timeline}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-6">
                  {/* Challenge */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-destructive font-mono">🚨 El Desafío</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {solutions[selectedCase].caseStudy.challenge}
                    </p>
                  </div>
                  
                  {/* Solution */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gradient-ai font-mono">⚡ Nuestra Solución</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {solutions[selectedCase].caseStudy.solution}
                    </p>
                  </div>
                  
                  {/* Results */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-green-600 font-mono">📊 Resultados Obtenidos</h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {solutions[selectedCase].caseStudy.results.map((result, idx) => (
                        <div key={idx} className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg border border-green-200 ai-glow">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0 neural-pulse" />
                          <span className="text-sm text-green-800">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-gradient-ai font-mono">🔧 Tecnologías Utilizadas</h4>
                    <div className="flex flex-wrap gap-2">
                      {solutions[selectedCase].caseStudy.technologies.map((tech, idx) => (
                        <span key={idx} className="px-4 py-2 bg-gradient-ai/10 text-primary rounded-full text-sm font-medium border border-primary/20 neural-pulse font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-center mt-8 pt-6 border-t">
                  <Button variant="hero" size="lg" className="neural-pulse shadow-neural" onClick={scrollToContact}>
                    <Target className="mr-2 h-5 w-5" />
                    Solicitar Caso Similar para tu Empresa
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Solutions;