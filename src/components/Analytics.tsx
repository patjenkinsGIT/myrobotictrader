import * as React from "react";

// Google Analytics component
export const GoogleAnalytics: React.FCReact.FCReact.FCReact.FC<{ measurementId: string }> = ({ measurementId }) => {
  React.useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: 'MyRoboticTrader.com - AI Crypto Trading',
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  return null;
};

// Facebook Pixel component
export const FacebookPixel: React.FCReact.FCReact.FCReact.FC<{ pixelId: string }> = ({ pixelId }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${pixelId}');
      fbq('track', 'PageView');
    `;
    document.head.appendChild(script);

    // Add noscript fallback
    const noscript = document.createElement('noscript');
    noscript.innerHTML = ``````<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1" />`;
    document.body.appendChild(noscript);

    return () => {
      document.head.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, [pixelId]);

  return null;
};

// Event tracking functions
export const trackEvent = (eventName: string, parameters?: RecordRecord<string, any>) => {
  // Google Analytics event tracking
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      event_category: 'engagement',
      event_label: 'MyRoboticTrader',
      ...parameters
    });
  }

  // Facebook Pixel event tracking
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
  }

  // Console log for debugging
  console.log('Event tracked:', eventName, parameters);
};

// Conversion tracking
export const trackConversion = (conversionType: string, value?: number) => {
  const conversionData = {
    event_category: 'conversion',
    event_label: conversionType,
    value: value || 0,
    currency: 'USD'
  };

  trackEvent('conversion', conversionData);
  
  // Track specific conversion events
  if (conversionType === 'signup') {
    trackEvent('sign_up', { method: 'website' });
  } else if (conversionType === 'click_affiliate_link') {
    trackEvent('click', { link_type: 'affiliate' });
  }
};

// Page view tracking
export const trackPageView = (pageName: string, measurementId: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', measurementId, {
      page_title: pageName,
      page_location: window.location.href
    });
  }
};

// Scroll depth tracking
export const useScrollTracking = () => {
  React.useEffect(() => {
    const scrollDepths = [25, 50, 75, 90];
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );

      scrollDepths.forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          trackEvent('scroll_depth', {
            event_category: 'engagement',
            event_label: `${depth}%`,
            value: depth
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Time on page tracking
export const useTimeTracking = () => {
  React.useEffect(() => {
    const startTime = Date.now();
    const timeThresholds = [30, 60, 120, 300]; // seconds
    const trackedTimes = new Set<number>();

    const interval = setInterval(() => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      
      timeThresholds.forEach(threshold => {
        if (timeSpent >= threshold && !trackedTimes.has(threshold)) {
          trackedTimes.add(threshold);
          trackEvent('time_on_page', {
            event_category: 'engagement',
            event_label: `${threshold}s`,
            value: threshold
          });
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);
};
