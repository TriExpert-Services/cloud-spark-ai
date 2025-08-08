import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, ArrowRight, Brain, Cpu, Zap, TrendingUp, ChevronDown, ChevronUp, Plus, Edit, Trash2, Eye } from "lucide-react";
import { supabase, type BlogPost } from "@/lib/supabase";
import { toast } from "@/components/ui/sonner";

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminDialog, setShowAdminDialog] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    author: 'TriExpert AI Team',
    image_url: '',
    read_time: 5,
    tags: '',
    published: false
  });

  const scrollToContact = () => {
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = ["Todos", "Inteligencia Artificial", "Herramientas", "Business Intelligence", "Casos de Uso", "Seguridad", "IA Generativa"];
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Cargar posts desde Supabase
  const loadBlogPosts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogPosts(data || []);
    } catch (error) {
      console.error('Error loading blog posts:', error);
      toast.error('Error al cargar los posts del blog');
    } finally {
      setLoading(false);
    }
  };

  // Verificar si el usuario es admin (simplificado)
  const checkAdminStatus = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setIsAdmin(!!user);
    } catch (error) {
      console.error('Error checking admin status:', error);
    }
  };

  useEffect(() => {
    loadBlogPosts();
    checkAdminStatus();
  }, []);

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

  const togglePost = (postIndex: number) => {
    setExpandedPost(expandedPost === postIndex ? null : postIndex);
  };

  // Funciones de administración
  const handleCreatePost = async () => {
    try {
      const slug = formData.title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();

      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

      const { error } = await supabase
        .from('blog_posts')
        .insert([{
          ...formData,
          slug,
          tags: tagsArray
        }]);

      if (error) throw error;

      toast.success('Post creado exitosamente');
      setShowAdminDialog(false);
      resetForm();
      loadBlogPosts();
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Error al crear el post');
    }
  };

  const handleUpdatePost = async () => {
    if (!editingPost) return;

    try {
      const slug = formData.title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();

      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

      const { error } = await supabase
        .from('blog_posts')
        .update({
          ...formData,
          slug,
          tags: tagsArray,
          updated_at: new Date().toISOString()
        })
        .eq('id', editingPost.id);

      if (error) throw error;

      toast.success('Post actualizado exitosamente');
      setShowAdminDialog(false);
      setEditingPost(null);
      resetForm();
      loadBlogPosts();
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error('Error al actualizar el post');
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!confirm('¿Estás seguro de que quieres eliminar este post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      toast.success('Post eliminado exitosamente');
      loadBlogPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast.error('Error al eliminar el post');
    }
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      author: post.author,
      image_url: post.image_url || '',
      read_time: post.read_time || 5,
      tags: post.tags?.join(', ') || '',
      published: post.published
    });
    setShowAdminDialog(true);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      author: 'TriExpert AI Team',
      image_url: '',
      read_time: 5,
      tags: '',
      published: false
    });
    setEditingPost(null);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <section id="blog" className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-300 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

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
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Blog <span className="text-gradient-neural">TriExpert AI</span>
            </h2>
            {isAdmin && (
              <Dialog open={showAdminDialog} onOpenChange={setShowAdminDialog}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" onClick={resetForm}>
                    <Plus className="w-4 h-4 mr-2" />
                    Nuevo Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>
                      {editingPost ? 'Editar Post' : 'Crear Nuevo Post'}
                    </DialogTitle>
                    <DialogDescription>
                      {editingPost ? 'Modifica los campos necesarios' : 'Completa la información del nuevo post'}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">Título *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          placeholder="Título del post"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Categoría *</Label>
                        <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona categoría" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.slice(1).map((cat) => (
                              <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="excerpt">Extracto *</Label>
                      <Textarea
                        id="excerpt"
                        value={formData.excerpt}
                        onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                        placeholder="Breve descripción del post"
                        rows={2}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="content">Contenido *</Label>
                      <Textarea
                        id="content"
                        value={formData.content}
                        onChange={(e) => setFormData({...formData, content: e.target.value})}
                        placeholder="Contenido completo del post"
                        rows={8}
                      />
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="author">Autor</Label>
                        <Input
                          id="author"
                          value={formData.author}
                          onChange={(e) => setFormData({...formData, author: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="read_time">Tiempo de lectura (min)</Label>
                        <Input
                          id="read_time"
                          type="number"
                          value={formData.read_time}
                          onChange={(e) => setFormData({...formData, read_time: parseInt(e.target.value)})}
                        />
                      </div>
                      <div className="flex items-center space-x-2 pt-6">
                        <input
                          type="checkbox"
                          id="published"
                          checked={formData.published}
                          onChange={(e) => setFormData({...formData, published: e.target.checked})}
                          className="rounded"
                        />
                        <Label htmlFor="published">Publicar</Label>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="image_url">URL de imagen (opcional)</Label>
                      <Input
                        id="image_url"
                        value={formData.image_url}
                        onChange={(e) => setFormData({...formData, image_url: e.target.value})}
                        placeholder="https://ejemplo.com/imagen.jpg"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="tags">Tags (separados por comas)</Label>
                      <Input
                        id="tags"
                        value={formData.tags}
                        onChange={(e) => setFormData({...formData, tags: e.target.value})}
                        placeholder="IA, Automatización, Tecnología"
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setShowAdminDialog(false)}>
                      Cancelar
                    </Button>
                    <Button onClick={editingPost ? handleUpdatePost : handleCreatePost}>
                      {editingPost ? 'Actualizar' : 'Crear'} Post
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
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
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No hay posts disponibles en esta categoría.</p>
            {isAdmin && (
              <Button className="mt-4" onClick={() => setShowAdminDialog(true)}>
                <Plus className="w-4 h-4 mr-2" />
                Crear el primer post
              </Button>
            )}
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 relative z-10">
            {filteredPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden group hover:shadow-neural transition-neural border-0 shadow-card-custom ai-glow">
                <div className="absolute inset-0 bg-gradient-ai opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                {/* Post Image */}
                {post.image_url && (
                  <div className="relative overflow-hidden h-48">
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    <Badge className="absolute top-4 left-4 bg-gradient-ai/90 text-primary-foreground border-0">
                      {getCategoryIcon(post.category)}
                      <span className="ml-1">{post.category}</span>
                    </Badge>
                    {isAdmin && (
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEditPost(post)}>
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDeletePost(post.id!)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    {!post.image_url && (
                      <Badge className="bg-gradient-ai/90 text-primary-foreground border-0">
                        {getCategoryIcon(post.category)}
                        <span className="ml-1">{post.category}</span>
                      </Badge>
                    )}
                    {isAdmin && !post.image_url && (
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" onClick={() => handleEditPost(post)}>
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => handleDeletePost(post.id!)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>
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
                      <span>{formatDate(post.created_at!)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.read_time} min</span>
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
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        togglePost(index);
                      }}
                      className="group/btn hover:bg-gradient-ai/10"
                    >
                      {expandedPost === index ? 'Ocultar' : 'Leer más'}
                      {expandedPost === index ? (
                        <ChevronUp className="ml-2 h-4 w-4 group-hover/btn:translate-y-1 transition-transform" />
                      ) : (
                        <ChevronDown className="ml-2 h-4 w-4 group-hover/btn:translate-y-1 transition-transform" />
                      )}
                    </Button>
                  </div>

                  {/* Expanded Content */}
                  {expandedPost === index && (
                    <div className="mt-6 pt-6 border-t border-border space-y-6">
                      {/* Content */}
                      <div className="prose prose-sm max-w-none text-muted-foreground">
                        {post.content.split('\n').map((paragraph, idx) => (
                          <p key={idx} className="mb-4 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      
                      {/* Tags */}
                      {post.tags && post.tags.length > 0 && (
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
                      )}

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
        )}

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