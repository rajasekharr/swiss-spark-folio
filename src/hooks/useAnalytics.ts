import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

// Generate a visitor ID that persists for the session
const getVisitorId = () => {
  let visitorId = sessionStorage.getItem('visitor_id');
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    sessionStorage.setItem('visitor_id', visitorId);
  }
  return visitorId;
};

// Get user's IP and location info (simplified version)
const getLocationInfo = async () => {
  try {
    // Using a free IP geolocation service
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return {
      ip: data.ip,
      country: data.country_name,
      city: data.city,
    };
  } catch (error) {
    console.error('Error getting location info:', error);
    return {
      ip: 'unknown',
      country: null,
      city: null,
    };
  }
};

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = async () => {
      try {
        const visitorId = getVisitorId();
        const locationInfo = await getLocationInfo();
        
        const analyticsData = {
          visitor_id: visitorId,
          page_path: location.pathname,
          ip_address: locationInfo.ip,
          user_agent: navigator.userAgent,
          country: locationInfo.country,
          city: locationInfo.city,
          referrer: document.referrer || null,
        };

        const { error } = await supabase
          .from('visitor_analytics')
          .insert([analyticsData]);

        if (error) {
          console.error('Error tracking page view:', error);
        }
      } catch (error) {
        console.error('Error in analytics tracking:', error);
      }
    };

    // Track page view after a short delay to ensure the page has loaded
    const timer = setTimeout(trackPageView, 1000);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
};