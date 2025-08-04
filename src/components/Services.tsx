import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Bot, Workflow, Zap, Database, Shield, BarChart3 } from "lucide-react";
import automationIcon from "@/assets/automation-icon.jpg";
import aiIcon from "@/assets/ai-icon.jpg";
import optimizationIcon from "@/assets/optimization-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8 text-primary" />,
      image: aiIcon,
      title: "Automatización con IA",
      description: "Implementamos soluciones de inteligencia artificial para automatizar procesos complejos y toma de decisiones.",
      features: ["Procesamiento de lenguaje natural", "Análisis predictivo", "Machine Learning personalizado"]
    },
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      image: automationIcon,
      title: "Flujos de Trabajo n8n",
      description: "Creamos y optimizamos flujos de trabajo automatizados conectando todas tus herramientas empresariales.",
      features: ["Integración de APIs", "Workflows personalizados", "Monitoreo en tiempo real"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      image: optimizationIcon,
      title: "Optimización de Procesos",
      description: "Analizamos y mejoramos tus procesos existentes para maximizar la eficiencia y reducir costos.",
      features: ["Análisis de procesos", "Mejora continua", "ROI garantizado"]
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
                <Button variant="outline" className="w-full group">
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
      </div>
    </section>
  );
};

export default Services;