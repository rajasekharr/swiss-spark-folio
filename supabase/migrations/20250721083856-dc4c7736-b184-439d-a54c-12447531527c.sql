-- Create analytics table for tracking visitors
CREATE TABLE public.visitor_analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visitor_id TEXT NOT NULL,
  page_path TEXT NOT NULL,
  ip_address INET,
  user_agent TEXT,
  country TEXT,
  city TEXT,
  referrer TEXT,
  visited_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.visitor_analytics ENABLE ROW LEVEL SECURITY;

-- Policy for authenticated users (admins) to view all analytics
CREATE POLICY "Authenticated users can view all analytics" 
ON public.visitor_analytics 
FOR SELECT 
TO authenticated
USING (true);

-- Policy for anonymous users to insert their own analytics
CREATE POLICY "Anyone can insert analytics" 
ON public.visitor_analytics 
FOR INSERT 
WITH CHECK (true);

-- Create index for better performance
CREATE INDEX idx_visitor_analytics_visited_at ON public.visitor_analytics(visited_at DESC);
CREATE INDEX idx_visitor_analytics_page_path ON public.visitor_analytics(page_path);
CREATE INDEX idx_visitor_analytics_visitor_id ON public.visitor_analytics(visitor_id);