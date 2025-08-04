import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, Factory, ShoppingCart, HeartHandshake, Briefcase } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <Factory className="w-8 h-8 text-primary" />,
      sector: "Manufactura",
      title: "Automatización Industrial",
      description: "Optimiza la producción, controla inventarios y gestiona la cadena de suministro automáticamente.",
      benefits: [
        "Reducción del 40% en tiempo de producción",
        "Control automático de calidad",
        "Gestión inteligente de inventarios",
        "Mantenimiento predictivo"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      sector: "E-commerce",
      title: "Automatización de Ventas",
      description: "Desde el marketing hasta el cumplimiento, automatiza todo tu embudo de ventas online.",
      benefits: [
        "Marketing automatizado multicanal",
        "Gestión automática de pedidos",
        "Atención al cliente 24/7 con IA",
        "Análisis predictivo de ventas"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      sector: "Servicios",
      title: "Optimización de Procesos",
      description: "Automatiza la gestión de clientes, facturación y operaciones de servicios profesionales.",
      benefits: [
        "CRM automatizado",
        "Facturación inteligente",
        "Programación automática de citas",
        "Reportes automáticos de rendimiento"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      sector: "Corporativo",
      title: "Transformación Digital",
      description: "Digitaliza y automatiza procesos administrativos, RRHH y operaciones corporativas.",
      benefits: [
        "Automatización de RRHH",
        "Gestión documental inteligente",
        "Workflows de aprobaciones",
        "Business Intelligence automatizado"
      ],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="soluciones" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Soluciones por Sector
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desarrollamos soluciones específicas adaptadas a las necesidades únicas de cada industria
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-tech transition-all duration-300 border-0 shadow-card-custom">
              {/* Gradient Background */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${solution.color}`}></div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-subtle rounded-lg flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <div>
                    <div className="text-sm text-primary font-semibold mb-1">{solution.sector}</div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">{solution.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3 mb-6">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="tech" className="w-full group">
                  Ver Caso de Estudio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nuestro Proceso de Implementación
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Un enfoque estructurado para garantizar el éxito de tu transformación digital
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Análisis", desc: "Evaluamos tus procesos actuales y identificamos oportunidades" },
              { step: "02", title: "Diseño", desc: "Creamos soluciones personalizadas para tus necesidades específicas" },
              { step: "03", title: "Implementación", desc: "Desarrollamos e integramos las automatizaciones en tu sistema" },
              { step: "04", title: "Optimización", desc: "Monitoreamos y mejoramos continuamente el rendimiento" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{phase.title}</h4>
                <p className="text-sm text-muted-foreground">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="hero" size="xl">
            Agenda tu Consulta Estratégica
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;