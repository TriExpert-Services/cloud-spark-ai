import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for database tables
export interface Contact {
  id?: string
  nombre: string
  empresa: string
  email: string
  telefono?: string
  sector?: string
  mensaje: string
  created_at?: string
  status?: 'nuevo' | 'contactado' | 'calificado' | 'cerrado'
}

export interface NewsletterSubscriber {
  id?: string
  email: string
  nombre?: string
  created_at?: string
  active?: boolean
}

export interface BlogPost {
  id?: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  image_url?: string
  published: boolean
  created_at?: string
  updated_at?: string
  read_time?: number
  tags?: string[]
}

export interface Service {
  id?: string
  title: string
  description: string
  features: string[]
  price_range?: string
  active: boolean
  created_at?: string
  category: string
}