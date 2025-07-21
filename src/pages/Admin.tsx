import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LogOut, Settings, FileText, Image, Users, BarChart3 } from 'lucide-react';
import ProjectManager from '@/components/admin/ProjectManager';
import ContentManager from '@/components/admin/ContentManager';
import Analytics from '@/components/admin/Analytics';

const Admin = () => {
  const { user, signOut, loading } = useAuth();
  const [activeTab, setActiveTab] = useState('analytics');

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-foreground mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-light swiss-heading">Admin Panel</h1>
            <p className="text-sm text-muted-foreground">Manage your portfolio content</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user.email}
            </span>
            <Button variant="outline" onClick={signOut} className="gap-2">
              <LogOut size={16} />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 lg:w-auto lg:grid-cols-3">
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 size={16} />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="projects" className="gap-2">
              <FileText size={16} />
              Projects
            </TabsTrigger>
            <TabsTrigger value="content" className="gap-2">
              <Settings size={16} />
              Site Content
            </TabsTrigger>
          </TabsList>

          <div className="mt-8">
            <TabsContent value="analytics" className="space-y-6">
              <Analytics />
            </TabsContent>

            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText size={20} />
                    Project Management
                  </CardTitle>
                  <CardDescription>
                    Add, edit, and manage your portfolio projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ProjectManager />
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="content" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings size={20} />
                    Site Content Management
                  </CardTitle>
                  <CardDescription>
                    Manage text content and images across your portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ContentManager />
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;