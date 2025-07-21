import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Project {
  id: string;
  title: string;
  brief: string;
  image: string;
  category: string;
  year: string;
  techniques: string[];
  responsibilities: string[];
  tools: string[];
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  images: string[];
  created_at?: string;
  updated_at?: string;
}

export const useProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('year', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      return data as Project[];
    },
  });
};

export const useProjectsByCategory = (category: string) => {
  return useQuery({
    queryKey: ['projects', 'category', category],
    queryFn: async () => {
      if (category === 'All') {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('year', { ascending: false });
        
        if (error) {
          throw error;
        }
        
        return data as Project[];
      }
      
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('category', category)
        .order('year', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      return data as Project[];
    },
  });
};