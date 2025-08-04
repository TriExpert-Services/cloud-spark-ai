import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            ¿Listo para Transformar tu Empresa?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contáctanos para una consulta gratuita y descubre cómo podemos automatizar tus procesos
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card-custom border-0">
            <CardHeader>
              <CardTitle className="text-2xl">Solicita tu Consulta Gratuita</CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input id="nombre" placeholder="Tu nombre completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa *</Label>
                  <Input id="empresa" placeholder="Nombre de tu empresa" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="tu@empresa.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" placeholder="+34 600 000 000" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sector">Sector de tu Empresa</Label>
                <Input id="sector" placeholder="Ej: E-commerce, Manufactura, Servicios..." />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mensaje">Cuéntanos sobre tus Necesidades *</Label>
                <Textarea 
                  id="mensaje" 
                  placeholder="Describe los procesos que te gustaría automatizar o los desafíos que enfrentas..."
                  className="min-h-[120px]"
                />
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Enviar Solicitud
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * Campos obligatorios. Tu información está protegida y no será compartida.
              </p>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              <Card className="shadow-card-custom border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">support@n8n-tech.cloud</p>
                      <p className="text-sm text-muted-foreground">Respuesta en menos de 2 horas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card-custom border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Teléfono</h3>
                      <p className="text-muted-foreground">+1 813 710 8860</p>
                      <p className="text-sm text-muted-foreground">Lunes a Viernes, 9:00 - 18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card-custom border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">Disponibilidad</h3>
                      <p className="text-muted-foreground">Consultas 24/7 online</p>
                      <p className="text-sm text-muted-foreground">Soporte técnico en horario comercial</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Why Choose Us */}
            <Card className="bg-gradient-tech text-white shadow-card-custom border-0">
              <CardHeader>
                <CardTitle className="text-xl text-white">¿Por qué elegir TriExpert Services AI?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Consulta gratuita sin compromiso</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">ROI garantizado en 6 meses</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Soporte técnico especializado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-sm">Implementación rápida y eficiente</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;