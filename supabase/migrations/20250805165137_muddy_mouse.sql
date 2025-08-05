/*
  # Schema inicial para TriExpert Services AI

  1. Nuevas Tablas
    - `contacts` - Almacena consultas del formulario de contacto
    - `newsletter_subscribers` - Gestiona suscriptores al newsletter  
    - `blog_posts` - Maneja artículos del blog
    - `services` - Información de servicios ofrecidos

  2. Seguridad
    - Enable RLS en todas las tablas
    - Políticas para inserción pública en contacts y newsletter
    - Políticas de lectura pública para blog_posts y services
*/

-- Extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Tabla de contactos
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre text NOT NULL,
  empresa text NOT NULL,
  email text NOT NULL,
  telefono text,
  sector text,
  mensaje text NOT NULL,
  status text DEFAULT 'nuevo' CHECK (status IN ('nuevo', 'contactado', 'calificado', 'cerrado')),
  created_at timestamptz DEFAULT now()
);

-- Tabla de suscriptores al newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email text UNIQUE NOT NULL,
  nombre text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Tabla de posts del blog
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  category text NOT NULL,
  author text NOT NULL DEFAULT 'TriExpert AI Team',
  image_url text,
  published boolean DEFAULT false,
  read_time integer DEFAULT 5,
  tags text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Tabla de servicios
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  title text NOT NULL,
  description text NOT NULL,
  features text[] DEFAULT '{}',
  price_range text,
  category text NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Habilitar RLS en todas las tablas
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Políticas para contacts (inserción pública)
CREATE POLICY "Anyone can insert contacts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);

-- Políticas para newsletter_subscribers (inserción pública)
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read subscribers"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (true);

-- Políticas para blog_posts (lectura pública de posts publicados)
CREATE POLICY "Anyone can read published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can manage blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (true);

-- Políticas para services (lectura pública de servicios activos)
CREATE POLICY "Anyone can read active services"
  ON services
  FOR SELECT
  TO anon, authenticated
  USING (active = true);

CREATE POLICY "Authenticated users can manage services"
  ON services
  FOR ALL
  TO authenticated
  USING (true);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para blog_posts
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();