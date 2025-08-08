/*
  # Crear usuario administrador para el blog

  1. Configuración de autenticación
    - Permite registro de usuarios admin
    - Configura políticas de seguridad para administración

  2. Funciones auxiliares
    - Función para verificar si un usuario es admin
    - Políticas RLS actualizadas para administradores
*/

-- Función para verificar si un usuario es administrador
CREATE OR REPLACE FUNCTION is_admin(user_id uuid)
RETURNS boolean AS $$
BEGIN
  -- Por simplicidad, cualquier usuario autenticado puede ser admin
  -- En producción, deberías tener una tabla de roles o verificar emails específicos
  RETURN user_id IS NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Actualizar políticas para permitir a administradores gestionar todos los posts
DROP POLICY IF EXISTS "Authenticated users can manage blog posts" ON blog_posts;

CREATE POLICY "Admins can manage all blog posts"
  ON blog_posts
  FOR ALL
  TO authenticated
  USING (is_admin(auth.uid()))
  WITH CHECK (is_admin(auth.uid()));

-- Política para que admins puedan ver todos los posts (publicados y borradores)
CREATE POLICY "Admins can read all blog posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (is_admin(auth.uid()));

-- Actualizar políticas de contactos para administradores
DROP POLICY IF EXISTS "Authenticated users can read contacts" ON contacts;

CREATE POLICY "Admins can manage contacts"
  ON contacts
  FOR ALL
  TO authenticated
  USING (is_admin(auth.uid()))
  WITH CHECK (is_admin(auth.uid()));

-- Insertar algunos posts de ejemplo si no existen
INSERT INTO blog_posts (title, slug, excerpt, content, category, author, published, read_time, tags)
SELECT 
  'Bienvenidos al Blog de TriExpert AI',
  'bienvenidos-blog-triexpert-ai',
  'Te damos la bienvenida a nuestro blog donde compartiremos las últimas novedades en automatización e inteligencia artificial.',
  'Estamos emocionados de lanzar nuestro blog oficial donde compartiremos insights, casos de estudio, y las últimas tendencias en automatización empresarial e inteligencia artificial.

En este espacio encontrarás:
- Análisis profundos de tecnologías emergentes
- Casos de éxito reales de nuestros clientes
- Guías prácticas para implementar automatización
- Tendencias del mercado y predicciones futuras

Nuestro objetivo es proporcionarte contenido valioso que te ayude a tomar decisiones informadas sobre la transformación digital de tu empresa.',
  'Inteligencia Artificial',
  'TriExpert AI Team',
  true,
  3,
  ARRAY['Blog', 'Bienvenida', 'IA', 'Automatización']
WHERE NOT EXISTS (
  SELECT 1 FROM blog_posts WHERE slug = 'bienvenidos-blog-triexpert-ai'
);