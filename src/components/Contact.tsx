import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    sector: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.nombre || !formData.empresa || !formData.email || !formData.mensaje) {
      toast.error("Por favor, completa todos los campos obligatorios");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/webhook/n8n', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          tipo: 'consulta_contacto',
          timestamp: new Date().toISOString(),
          datos: formData
        })
      });

      if (response.ok) {
        toast.success("¡Solicitud enviada correctamente! Nos pondremos en contacto contigo pronto.");
        // Limpiar formulario
        setFormData({
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          sector: '',
          mensaje: ''
        });
      } else {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText || 'Error en el envío'}`);
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      if (error instanceof TypeError && error.message.includes('fetch')) {
        toast.error("Error de conexión. Verifica tu conexión a internet o inténtalo más tarde.");
      } else {
        toast.error(`Hubo un error al enviar tu solicitud: ${error.message}`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-background">
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
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input 
                    id="nombre" 
                    placeholder="Tu nombre completo" 
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa *</Label>
                  <Input 
                    id="empresa" 
                    placeholder="Nombre de tu empresa" 
                    value={formData.empresa}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="tu@empresa.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input 
                    id="telefono" 
                    placeholder="+34 600 000 000" 
                    value={formData.telefono}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="sector">Sector de tu Empresa</Label>
                <Input 
                  id="sector" 
                  placeholder="Ej: E-commerce, Manufactura, Servicios..." 
                  value={formData.sector}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="mensaje">Cuéntanos sobre tus Necesidades *</Label>
                <Textarea 
                  id="mensaje" 
                  placeholder="Describe los procesos que te gustaría automatizar o los desafíos que enfrentas..."
                  className="min-h-[120px]"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-5 w-5" />
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                * Campos obligatorios. Tu información está protegida y no será compartida.
              </p>
              </form>
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