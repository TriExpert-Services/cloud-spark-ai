/*
  # Datos iniciales para TriExpert Services AI

  1. Servicios base
  2. Posts iniciales del blog
  3. Datos de ejemplo
*/

-- Insertar servicios base
INSERT INTO services (title, description, features, category, price_range) VALUES
(
  'Automatización con IA',
  'Implementamos soluciones de inteligencia artificial para automatizar procesos complejos y toma de decisiones.',
  ARRAY['Procesamiento de lenguaje natural', 'Análisis predictivo', 'Machine Learning personalizado', 'Automatización de decisiones'],
  'AI',
  '€5,000 - €50,000'
),
(
  'Flujos de Trabajo n8n',
  'Creamos y optimizamos flujos de trabajo automatizados conectando todas tus herramientas empresariales.',
  ARRAY['Integración de APIs', 'Workflows personalizados', 'Monitoreo en tiempo real', 'Escalabilidad automática'],
  'Automation',
  '€2,000 - €25,000'
),
(
  'Optimización de Procesos',
  'Analizamos y mejoramos tus procesos existentes para maximizar la eficiencia y reducir costos.',
  ARRAY['Análisis de procesos', 'Mejora continua', 'ROI garantizado', 'Capacitación del equipo'],
  'Consulting',
  '€3,000 - €30,000'
);

-- Insertar posts del blog
INSERT INTO blog_posts (title, slug, excerpt, content, category, published, read_time, tags) VALUES
(
  'El Futuro de la Automatización Empresarial con IA',
  'futuro-automatizacion-empresarial-ia',
  'Descubre cómo la inteligencia artificial está revolucionando los procesos empresariales y qué esperar en los próximos años.',
  'La automatización empresarial ha evolucionado dramáticamente en los últimos años, y la integración de inteligencia artificial está marcando un antes y un después en cómo las empresas operan.

Las empresas ya no se conforman con automatizar tareas simples y repetitivas. Hoy en día, la IA permite automatizar procesos complejos que requieren toma de decisiones, análisis de patrones y adaptación en tiempo real.

Machine Learning, Procesamiento de Lenguaje Natural, y Computer Vision están transformando industrias completas. Desde chatbots inteligentes hasta sistemas de mantenimiento predictivo, las posibilidades son infinitas.',
  'Inteligencia Artificial',
  true,
  8,
  ARRAY['IA', 'Automatización', 'Futuro', 'Tecnología']
),
(
  'n8n vs Zapier: ¿Cuál es la Mejor Herramienta de Automatización?',
  'n8n-vs-zapier-mejor-herramienta-automatizacion',
  'Comparamos las dos plataformas de automatización más populares para ayudarte a elegir la mejor para tu empresa.',
  'En el mundo de la automatización de flujos de trabajo, n8n y Zapier son dos de las herramientas más populares. Cada una tiene sus fortalezas y casos de uso ideales.

n8n destaca por su flexibilidad y capacidad de personalización. Al ser open-source, permite modificaciones profundas y integración con sistemas propietarios.

Zapier brilla por su facilidad de uso y amplio ecosistema de integraciones. Con más de 5,000 aplicaciones disponibles, es perfecto para usuarios no técnicos.',
  'Herramientas',
  true,
  6,
  ARRAY['n8n', 'Zapier', 'Comparación', 'Workflows']
),
(
  'ROI de la Automatización: Cómo Medir el Éxito',
  'roi-automatizacion-como-medir-exito',
  'Aprende a calcular y maximizar el retorno de inversión de tus proyectos de automatización empresarial.',
  'Medir el ROI de proyectos de automatización es crucial para justificar inversiones y optimizar resultados.

Las métricas más importantes incluyen: tiempo ahorrado por empleado, reducción de errores, costo por transacción, y satisfacción del cliente.

ROI = (Beneficios - Costos) / Costos × 100. Los beneficios incluyen ahorro en salarios, reducción de errores, y mejora en eficiencia.',
  'Business Intelligence',
  true,
  10,
  ARRAY['ROI', 'Métricas', 'Business', 'Automatización']
);