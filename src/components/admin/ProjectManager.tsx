import { useState } from 'react';
import { useProjects } from '@/hooks/useProjects';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Plus, Edit, Trash2, Save } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProjectFormData {
  id: string;
  title: string;
  brief: string;
  image: string;
  category: string;
  year: string;
  techniques: string;
  responsibilities: string;
  tools: string;
  description: string;
  challenge: string;
  solution: string;
  outcome: string;
  images: string;
}

const ProjectManager = () => {
  const { data: projects = [], refetch } = useProjects();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState<ProjectFormData>({
    id: '',
    title: '',
    brief: '',
    image: '',
    category: '',
    year: '',
    techniques: '',
    responsibilities: '',
    tools: '',
    description: '',
    challenge: '',
    solution: '',
    outcome: '',
    images: ''
  });

  const resetForm = () => {
    setFormData({
      id: '',
      title: '',
      brief: '',
      image: '',
      category: '',
      year: '',
      techniques: '',
      responsibilities: '',
      tools: '',
      description: '',
      challenge: '',
      solution: '',
      outcome: '',
      images: ''
    });
    setEditingProject(null);
  };

  const openEditDialog = (project: any) => {
    setEditingProject(project);
    setFormData({
      id: project.id,
      title: project.title,
      brief: project.brief,
      image: project.image,
      category: project.category,
      year: project.year,
      techniques: project.techniques.join(', '),
      responsibilities: project.responsibilities.join(', '),
      tools: project.tools.join(', '),
      description: project.description,
      challenge: project.challenge,
      solution: project.solution,
      outcome: project.outcome,
      images: project.images.join(', ')
    });
    setIsDialogOpen(true);
  };

  const openAddDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const projectData = {
        id: formData.id || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        title: formData.title,
        brief: formData.brief,
        image: formData.image,
        category: formData.category,
        year: formData.year,
        techniques: formData.techniques.split(',').map(s => s.trim()).filter(Boolean),
        responsibilities: formData.responsibilities.split(',').map(s => s.trim()).filter(Boolean),
        tools: formData.tools.split(',').map(s => s.trim()).filter(Boolean),
        description: formData.description,
        challenge: formData.challenge,
        solution: formData.solution,
        outcome: formData.outcome,
        images: formData.images.split(',').map(s => s.trim()).filter(Boolean)
      };

      if (editingProject) {
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', editingProject.id);
        
        if (error) throw error;
        toast({ title: 'Success', description: 'Project updated successfully!' });
      } else {
        const { error } = await supabase
          .from('projects')
          .insert(projectData);
        
        if (error) throw error;
        toast({ title: 'Success', description: 'Project created successfully!' });
      }

      refetch();
      setIsDialogOpen(false);
      resetForm();
    } catch (error: any) {
      toast({ 
        title: 'Error', 
        description: error.message || 'Failed to save project',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (projectId: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId);
      
      if (error) throw error;
      
      toast({ title: 'Success', description: 'Project deleted successfully!' });
      refetch();
    } catch (error: any) {
      toast({ 
        title: 'Error', 
        description: error.message || 'Failed to delete project',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Projects ({projects.length})</h3>
          <p className="text-sm text-muted-foreground">Manage your portfolio projects</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog} className="gap-2">
              <Plus size={16} />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingProject ? 'Edit Project' : 'Add New Project'}
              </DialogTitle>
              <DialogDescription>
                {editingProject ? 'Update project details below.' : 'Fill in the project details below.'}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title *</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="year">Year *</Label>
                  <Input
                    id="year"
                    value={formData.year}
                    onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Main Image URL *</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="brief">Brief Description *</Label>
                <Textarea
                  id="brief"
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Full Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="techniques">Techniques (comma separated)</Label>
                  <Textarea
                    id="techniques"
                    value={formData.techniques}
                    onChange={(e) => setFormData({ ...formData, techniques: e.target.value })}
                    placeholder="UX Research, Design Thinking, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="responsibilities">Responsibilities (comma separated)</Label>
                  <Textarea
                    id="responsibilities"
                    value={formData.responsibilities}
                    onChange={(e) => setFormData({ ...formData, responsibilities: e.target.value })}
                    placeholder="UX Manager, Lead Designer, etc."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tools">Tools (comma separated)</Label>
                  <Textarea
                    id="tools"
                    value={formData.tools}
                    onChange={(e) => setFormData({ ...formData, tools: e.target.value })}
                    placeholder="Figma, Sketch, Adobe XD, etc."
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge">Challenge</Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="solution">Solution</Label>
                <Textarea
                  id="solution"
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="outcome">Outcome</Label>
                <Textarea
                  id="outcome"
                  value={formData.outcome}
                  onChange={(e) => setFormData({ ...formData, outcome: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="images">Additional Images (comma separated URLs)</Label>
                <Textarea
                  id="images"
                  value={formData.images}
                  onChange={(e) => setFormData({ ...formData, images: e.target.value })}
                  placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading} className="gap-2">
                  <Save size={16} />
                  {isLoading ? 'Saving...' : editingProject ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription>
                {project.category} • {project.year}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {project.brief}
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openEditDialog(project)}
                  className="gap-1"
                >
                  <Edit size={14} />
                  Edit
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(project.id)}
                  className="gap-1 text-destructive hover:text-destructive"
                >
                  <Trash2 size={14} />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {projects.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No projects found. Add your first project to get started!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProjectManager;