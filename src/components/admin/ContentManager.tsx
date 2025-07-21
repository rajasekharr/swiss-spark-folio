import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plus, Edit, Save, FileText, Image } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface SiteContent {
  id: string;
  page_name: string;
  section_name: string;
  content_type: 'text' | 'image' | 'html';
  content_data: any;
}

const ContentManager = () => {
  const [content, setContent] = useState<SiteContent[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingContent, setEditingContent] = useState<SiteContent | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    page_name: '',
    section_name: '',
    content_type: 'text' as 'text' | 'image' | 'html',
    content_data: ''
  });

  const pages = ['home', 'about', 'projects', 'contact', 'blog'];
  const contentTypes = [
    { value: 'text', label: 'Text Content' },
    { value: 'image', label: 'Image URL' },
    { value: 'html', label: 'HTML Content' }
  ];

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .order('page_name', { ascending: true });
      
      if (error) throw error;
      setContent(data || []);
    } catch (error: any) {
      toast({ 
        title: 'Error', 
        description: 'Failed to fetch content',
        variant: 'destructive'
      });
    }
  };

  const resetForm = () => {
    setFormData({
      page_name: '',
      section_name: '',
      content_type: 'text',
      content_data: ''
    });
    setEditingContent(null);
  };

  const openEditDialog = (item: SiteContent) => {
    setEditingContent(item);
    setFormData({
      page_name: item.page_name,
      section_name: item.section_name,
      content_type: item.content_type,
      content_data: typeof item.content_data === 'string' ? item.content_data : JSON.stringify(item.content_data)
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
      let contentData;
      try {
        contentData = JSON.parse(formData.content_data);
      } catch {
        contentData = formData.content_data;
      }

      const payload = {
        page_name: formData.page_name,
        section_name: formData.section_name,
        content_type: formData.content_type,
        content_data: contentData
      };

      if (editingContent) {
        const { error } = await supabase
          .from('site_content')
          .update(payload)
          .eq('id', editingContent.id);
        
        if (error) throw error;
        toast({ title: 'Success', description: 'Content updated successfully!' });
      } else {
        const { error } = await supabase
          .from('site_content')
          .insert(payload);
        
        if (error) throw error;
        toast({ title: 'Success', description: 'Content created successfully!' });
      }

      fetchContent();
      setIsDialogOpen(false);
      resetForm();
    } catch (error: any) {
      toast({ 
        title: 'Error', 
        description: error.message || 'Failed to save content',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getContentPreview = (item: SiteContent) => {
    const data = typeof item.content_data === 'string' ? item.content_data : JSON.stringify(item.content_data);
    if (item.content_type === 'image') {
      return (
        <img 
          src={data} 
          alt="Content" 
          className="w-full h-24 object-cover rounded"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/200x100?text=Image+Not+Found';
          }}
        />
      );
    }
    return (
      <p className="text-sm text-muted-foreground line-clamp-3">
        {data.length > 100 ? `${data.substring(0, 100)}...` : data}
      </p>
    );
  };

  const groupedContent = content.reduce((acc, item) => {
    if (!acc[item.page_name]) {
      acc[item.page_name] = [];
    }
    acc[item.page_name].push(item);
    return acc;
  }, {} as Record<string, SiteContent[]>);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-medium">Site Content ({content.length})</h3>
          <p className="text-sm text-muted-foreground">Manage text and images across your portfolio</p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openAddDialog} className="gap-2">
              <Plus size={16} />
              Add Content
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingContent ? 'Edit Content' : 'Add New Content'}
              </DialogTitle>
              <DialogDescription>
                {editingContent ? 'Update content details below.' : 'Fill in the content details below.'}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="page_name">Page *</Label>
                  <Select 
                    value={formData.page_name} 
                    onValueChange={(value) => setFormData({ ...formData, page_name: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a page" />
                    </SelectTrigger>
                    <SelectContent>
                      {pages.map((page) => (
                        <SelectItem key={page} value={page}>
                          {page.charAt(0).toUpperCase() + page.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="content_type">Content Type *</Label>
                  <Select 
                    value={formData.content_type} 
                    onValueChange={(value: 'text' | 'image' | 'html') => setFormData({ ...formData, content_type: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select content type" />
                    </SelectTrigger>
                    <SelectContent>
                      {contentTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="section_name">Section Name *</Label>
                <Input
                  id="section_name"
                  value={formData.section_name}
                  onChange={(e) => setFormData({ ...formData, section_name: e.target.value })}
                  placeholder="e.g., hero-title, about-description, contact-email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="content_data">
                  {formData.content_type === 'text' && 'Text Content *'}
                  {formData.content_type === 'image' && 'Image URL *'}
                  {formData.content_type === 'html' && 'HTML Content *'}
                </Label>
                <Textarea
                  id="content_data"
                  value={formData.content_data}
                  onChange={(e) => setFormData({ ...formData, content_data: e.target.value })}
                  rows={formData.content_type === 'html' ? 6 : 4}
                  placeholder={
                    formData.content_type === 'text' ? 'Enter your text content...' :
                    formData.content_type === 'image' ? 'https://example.com/image.jpg' :
                    '<div>Your HTML content here</div>'
                  }
                  required
                />
              </div>

              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={isLoading} className="gap-2">
                  <Save size={16} />
                  {isLoading ? 'Saving...' : editingContent ? 'Update' : 'Create'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-8">
        {Object.entries(groupedContent).map(([pageName, pageContent]) => (
          <Card key={pageName}>
            <CardHeader>
              <CardTitle className="capitalize">{pageName} Page</CardTitle>
              <CardDescription>{pageContent.length} content items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pageContent.map((item) => (
                  <Card key={item.id} className="relative">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">{item.section_name}</CardTitle>
                        <div className="flex items-center gap-1">
                          {item.content_type === 'text' && <FileText size={14} />}
                          {item.content_type === 'image' && <Image size={14} />}
                          {item.content_type === 'html' && <FileText size={14} />}
                          <span className="text-xs text-muted-foreground capitalize">
                            {item.content_type}
                          </span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="mb-3">
                        {getContentPreview(item)}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => openEditDialog(item)}
                        className="w-full gap-1"
                      >
                        <Edit size={14} />
                        Edit
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {content.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">No content found. Add your first content item to get started!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContentManager;