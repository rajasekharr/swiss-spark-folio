import { supabase } from '@/integrations/supabase/client';
import type { Project } from '@/hooks/useProjects';

export const getAllCategories = async (): Promise<string[]> => {
  const { data, error } = await supabase
    .from('projects')
    .select('category');
  
  if (error) {
    throw error;
  }
  
  const categories = [...new Set(data.map(project => project.category))];
  return categories;
};

export const getProjectNavigation = async (currentProjectId: string) => {
  const { data, error } = await supabase
    .from('projects')
    .select('id, title')
    .order('year', { ascending: false });
  
  if (error) {
    throw error;
  }
  
  const currentIndex = data.findIndex(p => p.id === currentProjectId);
  const prevProject = currentIndex > 0 ? data[currentIndex - 1] : null;
  const nextProject = currentIndex < data.length - 1 ? data[currentIndex + 1] : null;
  
  return { prevProject, nextProject };
};