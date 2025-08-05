import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight, Brain, Cpu, Zap, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "El Futuro de la Automatización Empresarial con IA",
      excerpt: "Descubre cómo la inteligencia artificial está revolucionando los procesos empresariales y qué esperar en los próximos años.",
      category: "Inteligencia Artificial",
      date: "15 Enero 2025",
      readTime: "8 min",
      author: "TriExpert AI Team",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
      content: {
        introduction: "La automatización empresarial ha evolucionado dramáticamente en los últimos años, y la integración de inteligencia artificial está marcando un antes y un después en cómo las empresas operan.",
        sections: [
          {
            title: "El Estado Actual de la Automatización",
            content: "Las empresas ya no se conforman con automatizar tareas simples y repetitivas. Hoy en día, la IA permite automatizar procesos complejos que requieren toma de decisiones, análisis de patrones y adaptación en tiempo real."
          },
          {
            title: "Tecnologías Emergentes",
            content: "Machine Learning, Procesamiento de Lenguaje Natural, y Computer Vision están transformando industrias completas. Desde chatbots inteligentes hasta sistemas de mantenimiento predictivo, las posibilidades son infinitas."
          },
          {
            title: "Casos de Uso Revolucionarios",
            content: "• Análisis predictivo de demanda en retail\n• Automatización de procesos financieros\n• Optimización de cadenas de suministro\n• Personalización masiva en marketing\n• Diagnóstico médico asistido por IA"
          },
          {
            title: "Preparándose para el Futuro",
            content: "Las empresas que adopten estas tecnologías ahora tendrán una ventaja competitiva significativa. La clave está en comenzar con procesos piloto y escalar gradualmente."
          }
        ],
        conclusion: "La automatización con IA no es solo una tendencia, es la nueva realidad empresarial. Las organizaciones que se adapten rápidamente liderarán sus respectivos mercados."
      },
      tags: ["IA", "Automatización", "Futuro", "Tecnología"]
    },
    {
      id: 2,
      title: "n8n vs Zapier: ¿Cuál es la Mejor Herramienta de Automatización?",
      excerpt: "Comparamos las dos plataformas de automatización más populares para ayudarte a elegir la mejor para tu empresa.",
      category: "Herramientas",
      date: "12 Enero 2025",
      readTime: "6 min",
      author: "Tech Automation Experts",
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg",
      content: {
        introduction: "En el mundo de la automatización de flujos de trabajo, n8n y Zapier son dos de las herramientas más populares. Cada una tiene sus fortalezas y casos de uso ideales.",
        sections: [
          {
            title: "n8n: Flexibilidad y Control",
            content: "n8n destaca por su flexibilidad y capacidad de personalización. Al ser open-source, permite modificaciones profundas y integración con sistemas propietarios. Ideal para empresas con necesidades técnicas específicas."
          },
          {
            title: "Zapier: Simplicidad y Ecosistema",
            content: "Zapier brilla por su facilidad de uso y amplio ecosistema de integraciones. Con más de 5,000 aplicaciones disponibles, es perfecto para usuarios no técnicos que buscan automatización rápida."
          },
          {
            title: "Comparación Técnica",
            content: "• Costo: n8n es más económico a gran escala\n• Integraciones: Zapier tiene más conectores nativos\n• Personalización: n8n permite mayor flexibilidad\n• Curva de aprendizaje: Zapier es más intuitivo\n• Escalabilidad: n8n maneja mejor volúmenes altos"
          },
          {
            title: "¿Cuál Elegir?",
            content: "La elección depende de tus necesidades específicas: Zapier para implementación rápida y simplicidad, n8n para control total y escalabilidad empresarial."
          }
        ],
        conclusion: "Ambas herramientas son excelentes, pero n8n ofrece más valor a largo plazo para empresas que buscan escalabilidad y personalización avanzada."
      },
      tags: ["n8n", "Zapier", "Comparación", "Workflows"]
    },
    {
      id: 3,
      title: "ROI de la Automatización: Cómo Medir el Éxito",
      excerpt: "Aprende a calcular y maximizar el retorno de inversión de tus proyectos de automatización empresarial.",
      category: "Business Intelligence",
      date: "10 Enero 2025",
      readTime: "10 min",
      author: "Business Strategy Team",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      content: {
        introduction: "Medir el ROI de proyectos de automatización es crucial para justificar inversiones y optimizar resultados. Te mostramos cómo hacerlo efectivamente.",
        sections: [
          {
            title: "Métricas Clave a Monitorear",
            content: "Las métricas más importantes incluyen: tiempo ahorrado por empleado, reducción de errores, costo por transacción, y satisfacción del cliente. Estas métricas proporcionan una visión integral del impacto."
          },
          {
            title: "Calculando el ROI",
            content: "ROI = (Beneficios - Costos) / Costos × 100. Los beneficios incluyen ahorro en salarios, reducción de errores, y mejora en eficiencia. Los costos abarcan software, implementación y mantenimiento."
          },
          {
            title: "Casos de Éxito Reales",
            content: "• Empresa A: 340% ROI en 12 meses\n• Empresa B: Ahorro de €2.3M anuales\n• Empresa C: 75% reducción en tiempo de procesamiento\n• Empresa D: 95% menos errores manuales"
          },
          {
            title: "Maximizando el Retorno",
            content: "Para maximizar el ROI: comienza con procesos de alto impacto, entrena adecuadamente al personal, monitorea continuamente, y optimiza basándose en datos reales."
          }
        ],
        conclusion: "Un ROI bien calculado no solo justifica la inversión, sino que guía futuras decisiones de automatización para máximo impacto empresarial."
      },
      tags: ["ROI", "Métricas", "Business", "Automatización"]
    },
    {
      id: 4,
      title: "Casos de Uso: IA en la Industria Manufacturera",
      excerpt: "Explora cómo la inteligencia artificial está transformando la manufactura moderna con casos reales de implementación.",
      category: "Casos de Uso",
      date: "8 Enero 2025",
      readTime: "7 min",
      author: "Industrial AI Specialists",
      image: "https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg",
      content: {
        introduction: "La industria manufacturera está experimentando una revolución tecnológica. La IA está optimizando cada aspecto de la producción, desde el control de calidad hasta la gestión de inventarios.",
        sections: [
          {
            title: "Mantenimiento Predictivo",
            content: "Los sensores IoT combinados con algoritmos de ML predicen fallas de maquinaria antes de que ocurran, reduciendo el tiempo de inactividad hasta en un 78% y los costos de mantenimiento en un 60%."
          },
          {
            title: "Control de Calidad Inteligente",
            content: "La visión por computadora detecta defectos con 99.8% de precisión, superando ampliamente la inspección manual. Esto reduce desperdicios y mejora la consistencia del producto final."
          },
          {
            title: "Optimización de Producción",
            content: "• Planificación automática de horarios\n• Optimización de rutas de material\n• Ajuste dinámico de parámetros de producción\n• Predicción de demanda en tiempo real\n• Gestión inteligente de inventarios"
          },
          {
            title: "Casos de Éxito",
            content: "Una planta automotriz implementó nuestro sistema de IA y logró: 35% aumento en eficiencia, 92% mejora en precisión de calidad, y €4.7M en ahorros anuales."
          }
        ],
        conclusion: "La IA en manufactura no es el futuro, es el presente. Las empresas que la adopten ahora tendrán ventajas competitivas decisivas en el mercado global."
      },
      tags: ["Manufactura", "IA", "IoT", "Industria 4.0"]
    },
    {
      id: 5,
      title: "Seguridad en Automatización: Mejores Prácticas",
      excerpt: "Guía completa sobre cómo mantener la seguridad en tus sistemas automatizados y proteger datos sensibles.",
      category: "Seguridad",
      date: "5 Enero 2025",
      readTime: "9 min",
      author: "Cybersecurity Team",
      image: "https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg",
      content: {
        introduction: "La automatización trae eficiencia, pero también nuevos riesgos de seguridad. Es crucial implementar medidas robustas para proteger sistemas y datos empresariales.",
        sections: [
          {
            title: "Principales Amenazas",
            content: "Los sistemas automatizados enfrentan amenazas como ataques de inyección, acceso no autorizado a APIs, interceptación de datos, y vulnerabilidades en integraciones de terceros."
          },
          {
            title: "Estrategias de Protección",
            content: "Implementa autenticación multifactor, encriptación end-to-end, monitoreo continuo, y auditorías regulares. La seguridad debe ser parte integral del diseño, no una adición posterior."
          },
          {
            title: "Mejores Prácticas",
            content: "• Principio de menor privilegio\n• Segregación de redes\n• Backups automatizados y seguros\n• Actualizaciones regulares\n• Capacitación del personal\n• Planes de respuesta a incidentes"
          },
          {
            title: "Compliance y Regulaciones",
            content: "Asegúrate de cumplir con GDPR, HIPAA, SOX y otras regulaciones relevantes. La automatización debe facilitar el compliance, no complicarlo."
          }
        ],
        conclusion: "La seguridad en automatización requiere un enfoque proactivo y continuo. Invertir en seguridad desde el inicio es siempre más económico que remediar violaciones después."
      },
      tags: ["Seguridad", "Compliance", "Ciberseguridad", "Mejores Prácticas"]
    },
    {
      id: 6,
      title: "El Impacto de ChatGPT en la Automatización Empresarial",
      excerpt: "Analiza cómo los Large Language Models están revolucionando la automatización de procesos y atención al cliente.",
      category: "IA Generativa",
      date: "3 Enero 2025",
      readTime: "6 min",
      author: "AI Research Team",
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg",
      content: {
        introduction: "Los Large Language Models como ChatGPT han abierto nuevas posibilidades en automatización, especialmente en tareas que requieren comprensión y generación de lenguaje natural.",
        sections: [
          {
            title: "Revolución en Atención al Cliente",
            content: "Los chatbots potenciados por LLMs manejan consultas complejas con contexto y empatía, resolviendo el 85% de tickets sin intervención humana y mejorando la satisfacción del cliente."
          },
          {
            title: "Automatización de Contenido",
            content: "Desde generación de reportes hasta creación de propuestas comerciales, los LLMs automatizan tareas creativas que antes requerían intervención humana exclusiva."
          },
          {
            title: "Casos de Uso Empresariales",
            content: "• Análisis automático de documentos legales\n• Generación de código personalizado\n• Resumen inteligente de reuniones\n• Traducción contextual de contenido\n• Análisis de sentimientos en redes sociales"
          },
          {
            title: "Consideraciones y Limitaciones",
            content: "Aunque poderosos, los LLMs requieren supervisión humana para evitar alucinaciones y sesgos. La implementación debe incluir validación y controles de calidad."
          }
        ],
        conclusion: "Los LLMs representan un salto cuántico en automatización inteligente. Su integración estratégica puede transformar completamente las operaciones empresariales."
      },
      tags: ["ChatGPT", "LLM", "IA Generativa", "NLP"]
    }
  ];

  const categories = ["Todos", "Inteligencia Artificial", "Herramientas", "Business Intelligence", "Casos de Uso", "Seguridad", "IA Generativa"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = selectedCategory === "Todos" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: JSX.Element } = {
      "Inteligencia Artificial": <Brain className="w-4 h-4" />,
      "Herramientas": <Cpu className="w-4 h-4" />,
      "Business Intelligence": <TrendingUp className="w-4 h-4" />,
      "Casos de Uso": <Zap className="w-4 h-4" />,
      "Seguridad": <Zap className="w-4 h-4" />,
      "IA Generativa": <Brain className="w-4 h-4" />
    };
    return icons[category] || <Zap className="w-4 h-4" />;
  };

  const togglePost = (postId: number) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  return (
    <section id="blog" className="py-20 bg-gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-neural-grid opacity-10"></div>
      
      {/* Floating tech elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-ai opacity-10 rounded-full animate-float blur-xl"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-neural opacity-15 rounded-full animate-float blur-lg" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-neural/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-mono font-semibold">TECH INSIGHTS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Blog <span className="text-gradient-neural">TriExpert AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantente al día con las últimas tendencias en automatización, IA y transformación digital
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 relative z-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-neural ${
                selectedCategory === category 
                  ? "bg-gradient-ai shadow-neural" 
                  : "border-primary/30 hover:border-primary/60 hover:bg-gradient-ai/10"
              }`}
            >
              {category !== "Todos" && getCategoryIcon(category)}
              <span className={category !== "Todos" ? "ml-2" : ""}>{category}</span>
            </Button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-8 relative z-10">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden group hover:shadow-neural transition-neural border-0 shadow-card-custom ai-glow">
              {/* Post Image */}
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-gradient-ai/90 text-primary-foreground border-0">
                  {getCategoryIcon(post.category)}
                  <span className="ml-1">{post.category}</span>
                </Badge>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-gradient-ai transition-colors duration-300">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                {/* Meta Information */}
                <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{post.author}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => togglePost(post.id)}
                    className="group/btn hover:bg-gradient-ai/10"
                  >
                    {expandedPost === post.id ? 'Ocultar' : 'Leer más'}
                    {expandedPost === post.id ? (
                      <ChevronUp className="ml-2 h-4 w-4 group-hover/btn:translate-y-1 transition-transform" />
                    ) : (
                      <ChevronDown className="ml-2 h-4 w-4 group-hover/btn:translate-y-1 transition-transform" />
                    )}
                  </Button>
                </div>

                {/* Expanded Content */}
                {expandedPost === post.id && (
                  <div className="mt-6 pt-6 border-t border-border space-y-6 animate-in slide-in-from-top-2 duration-300">
                    {/* Introduction */}
                    <p className="text-muted-foreground leading-relaxed text-base">
                      {post.content.introduction}
                    </p>
                    
                    {/* Content Sections */}
                    {post.content.sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="text-lg font-semibold mb-3 text-gradient-ai font-mono">
                          {section.title}
                        </h4>
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    ))}
                    
                    {/* Conclusion */}
                    <div className="p-4 bg-gradient-ai/5 rounded-lg border border-primary/10">
                      <h4 className="text-lg font-semibold mb-3 text-gradient-ai font-mono">
                        Conclusión
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {post.content.conclusion}
                      </p>
                    </div>
                    
                    {/* Tags */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground">TAGS</h4>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-gradient-ai/10 text-primary rounded-full text-sm border border-primary/20 neural-pulse">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex justify-center pt-4">
                      <Button variant="hero" size="lg" className="neural-pulse shadow-neural" onClick={scrollToContact}>
                        <Brain className="mr-2 h-5 w-5" />
                        ¿Te interesa implementar esto?
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="bg-gradient-ai/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/10 relative z-10 ai-glow mt-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-neural/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-mono font-semibold">NEWSLETTER</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              ¿Te gustó nuestro contenido?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Suscríbete para recibir los últimos artículos sobre automatización e IA directamente en tu correo
            </p>
            <Button variant="hero" size="xl" className="neural-pulse shadow-neural" onClick={scrollToContact}>
              <Brain className="mr-2 h-5 w-5" />
              Suscribirse al Newsletter
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;