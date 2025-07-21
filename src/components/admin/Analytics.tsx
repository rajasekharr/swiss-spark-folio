import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Eye, MapPin, Globe, Users } from 'lucide-react';

interface VisitorAnalytics {
  id: string;
  visitor_id: string;
  page_path: string;
  ip_address: unknown;
  user_agent: string;
  country: string | null;
  city: string | null;
  referrer: string | null;
  visited_at: string;
}

interface AnalyticsStats {
  totalVisitors: number;
  totalPageViews: number;
  uniqueVisitors: number;
  topPages: { page: string; count: number }[];
  recentVisitors: VisitorAnalytics[];
}

const Analytics = () => {
  const [stats, setStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      const { data: allVisits, error } = await supabase
        .from('visitor_analytics')
        .select('*')
        .order('visited_at', { ascending: false });

      if (error) throw error;

      if (allVisits) {
        const uniqueVisitors = new Set(allVisits.map(v => v.visitor_id)).size;
        const totalPageViews = allVisits.length;
        
        // Get page visit counts
        const pageCount: { [key: string]: number } = {};
        allVisits.forEach(visit => {
          pageCount[visit.page_path] = (pageCount[visit.page_path] || 0) + 1;
        });
        
        const topPages = Object.entries(pageCount)
          .map(([page, count]) => ({ page, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        setStats({
          totalVisitors: allVisits.length,
          totalPageViews,
          uniqueVisitors,
          topPages,
          recentVisitors: allVisits.slice(0, 20)
        });
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getBrowserFromUserAgent = (userAgent: string) => {
    if (userAgent.includes('Chrome')) return 'Chrome';
    if (userAgent.includes('Firefox')) return 'Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Edge';
    return 'Unknown';
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardHeader className="pb-2">
                <Skeleton className="h-4 w-24" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-8 w-16" />
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Skeleton className="h-6 w-32" />
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[...Array(10)].map((_, i) => (
                  <Skeleton key={i} className="h-4 w-full" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (!stats) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center h-64">
          <p className="text-muted-foreground">No analytics data available</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visits</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalPageViews}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.uniqueVisitors}</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Top Page</CardTitle>
            <Globe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {stats.topPages[0]?.page || 'N/A'}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats.topPages[0]?.count || 0} visits
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Locations</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {new Set(stats.recentVisitors.filter(v => v.country).map(v => v.country)).size}
            </div>
            <p className="text-xs text-muted-foreground">Countries</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Most visited pages on your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stats.topPages.map((page, index) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">#{index + 1}</span>
                    <span className="text-sm">{page.page}</span>
                  </div>
                  <Badge variant="secondary">{page.count} visits</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Visitors */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Visitors</CardTitle>
            <CardDescription>Latest visitor activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {stats.recentVisitors.map((visitor) => (
                <div key={visitor.id} className="flex items-start justify-between border-b pb-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{visitor.page_path}</span>
                      {visitor.country && (
                        <Badge variant="outline" className="text-xs">
                          {visitor.city ? `${visitor.city}, ${visitor.country}` : visitor.country}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{String(visitor.ip_address)}</span>
                      <span>•</span>
                      <span>{getBrowserFromUserAgent(visitor.user_agent)}</span>
                    </div>
                    {visitor.referrer && (
                      <div className="text-xs text-muted-foreground">
                        From: {visitor.referrer}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {formatDate(visitor.visited_at)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;