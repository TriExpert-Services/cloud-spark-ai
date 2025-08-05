import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Bot, Workflow, Zap, Database, Shield, BarChart3 } from "lucide-react";
import automationIcon from "@/assets/automation-icon.jpg";
import aiIcon from "@/assets/ai-icon.jpg";
import optimizationIcon from "@/assets/optimization-icon.jpg";

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      image: aiIcon,
      title: "Automatización con IA",
      description: "Implementamos soluciones de inteligencia artificial para automatizar procesos complejos y toma de decisiones.",
      features: ["Procesamiento de lenguaje natural", "Análisis predictivo", "Machine Learning personalizado"],
      detailedInfo: {
        overview: "Nuestra solución de automatización con IA revoluciona la manera en que las empresas manejan procesos complejos, utilizando algoritmos avanzados para optimizar operaciones y reducir errores humanos.",
        keyFeatures: [
          "Procesamiento de Lenguaje Natural (NLP) para análisis de documentos",
          "Análisis predictivo para anticipar tendencias de mercado",
          "Machine Learning personalizado según las necesidades específicas",
          "Automatización de procesos de decisión complejos",
          "Integración con sistemas existentes sin interrupciones"
        ],
        benefits: [
          "Reducción del 85% en errores de procesamiento",
          "Ahorro de hasta 40 horas semanales por empleado",
          "Mejora en la precisión de predicciones del 92%",
          "ROI promedio del 300% en el primer año"
        ],
        industries: ["Finanzas", "Salud", "E-commerce", "Logística", "Manufactura"]
      }
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      image: automationIcon,
      title: "Flujos de Trabajo n8n",
      description: "Creamos y optimizamos flujos de trabajo automatizados conectando todas tus herramientas empresariales.",
      features: ["Integración de APIs", "Workflows personalizados", "Monitoreo en tiempo real"],
      detailedInfo: {
        overview: "Diseñamos y desarrollamos flujos de trabajo automatizados con n8n que conectan perfectamente todas tus herramientas empresariales, eliminando tareas repetitivas y mejorando la eficiencia operativa.",
        keyFeatures: [
          "Integración de más de 400 aplicaciones diferentes",
          "Workflows personalizados según procesos específicos",
          "Monitoreo en tiempo real con alertas automáticas",
          "Interfaz visual intuitiva para modificaciones futuras",
          "Escalabilidad automática según demanda"
        ],
        benefits: [
          "Reducción del 70% en tareas manuales repetitivas",
          "Sincronización automática de datos entre sistemas",
          "Notificaciones instantáneas ante eventos críticos",
          "Reducción de errores de transferencia de datos del 95%"
        ],
        industries: ["Marketing Digital", "Ventas", "Atención al Cliente", "Recursos Humanos", "Contabilidad"]
      }
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      image: optimizationIcon,
      title: "Optimización de Procesos",
      description: "Analizamos y mejoramos tus procesos existentes para maximizar la eficiencia y reducir costos.",
      features: ["Análisis de procesos", "Mejora continua", "ROI garantizado"],
      detailedInfo: {
        overview: "Realizamos un análisis exhaustivo de tus procesos empresariales actuales, identificando cuellos de botella y oportunidades de mejora para implementar soluciones que maximicen la eficiencia operativa.",
        keyFeatures: [
          "Auditoría completa de procesos existentes",
          "Mapeo de flujos de trabajo y identificación de ineficiencias",
          "Implementación de mejoras con metodologías ágiles",
          "Sistema de monitoreo continuo para mejora constante",
          "Capacitación del equipo en nuevos procesos optimizados"
        ],
        benefits: [
          "Reducción promedio del 60% en tiempo de procesamiento",
          "Eliminación de hasta 80% de pasos innecesarios",
          "Mejora en satisfacción del cliente del 45%",
          "ROI garantizado del 250% en los primeros 12 meses"
        ],
        industries: ["Servicios Profesionales", "Retail", "Hospitality", "Educación", "Gobierno"]
      }
    }
  ];

  const additionalServices = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Gestión de Datos",
      description: "Sincronización y gestión automatizada de bases de datos"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Seguridad y Compliance",
      description: "Automatización de procesos de seguridad y cumplimiento"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Integración Empresarial",
      description: "Conectamos todos tus sistemas en un ecosistema unificado"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos soluciones completas de automatización e IA adaptadas a las necesidades específicas de tu empresa
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-tech transition-all duration-300 border-0 shadow-card-custom">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-subtle flex items-center justify-center overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-12 h-12 object-cover rounded-full" />
                </div>
                <CardTitle className="text-xl text-center mb-2">{service.title}</CardTitle>
                <CardDescription className="text-center">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="outline" 
                  className="w-full group"
                  onClick={() => setSelectedService(index)}
                >
                  Saber más
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-card-custom hover:shadow-tech transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            Solicita tu Consulta Gratuita
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Service Detail Modal */}
        <Dialog open={selectedService !== null} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedService !== null && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl flex items-center gap-3">
                    {services[selectedService].icon}
                    {services[selectedService].title}
                  </DialogTitle>
                  <DialogDescription className="text-base">
                    {services[selectedService].detailedInfo.overview}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Características Principales</h4>
                    <ul className="space-y-2">
                      {services[selectedService].detailedInfo.keyFeatures.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-primary">Beneficios Clave</h4>
                    <ul className="space-y-2">
                      {services[selectedService].detailedInfo.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Industrias Atendidas</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[selectedService].detailedInfo.industries.map((industry, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center mt-8">
                  <Button variant="hero" size="lg">
                    Solicitar Consulta Personalizada
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

export default Services;