import * as React from "react";
import { trackEvent, trackConversion, useScrollTracking, useTimeTracking } from "./Analytics";

interface TrackingWrapperProps {
  children: React.ReactNode;
  eventName: string;
  eventData?: Record<string, any>;
  conversionType?: string;
  conversionValue?: number;
}

export const TrackingWrapper: React.FC<TrackingWrapperProps> = ({
  children,
  eventName,
  eventData,
  conversionType,
  conversionValue
}) => {
  const handleClick = () => {
    // Track the event
    trackEvent(eventName, eventData);
    
    // Track conversion if specified
    if (conversionType) {
      trackConversion(conversionType, conversionValue);
    }
  };

  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
};

// Hook for tracking button clicks
export const useButtonTracking = (buttonName: string) => {
  return (additionalData?: Record<string, any>) => {
    trackEvent('button_click', {
      button_name: buttonName,
      event_category: 'interaction',
      ...additionalData
    });
  };
};

// Hook for tracking form interactions
export const useFormTracking = (formName: string) => {
  const trackFormStart = () => {
    trackEvent('form_start', {
      form_name: formName,
      event_category: 'form_interaction'
    });
  };

  const trackFormSubmit = () => {
    trackEvent('form_submit', {
      form_name: formName,
      event_category: 'form_interaction'
    });
    trackConversion('form_submission');
  };

  const trackFormError = (errorType: string) => {
    trackEvent('form_error', {
      form_name: formName,
      error_type: errorType,
      event_category: 'form_interaction'
    });
  };

  return { trackFormStart, trackFormSubmit, trackFormError };
};

// Component for tracking section visibility
export const SectionTracker: React.FC<{
  sectionName: string;
  children: React.ReactNode;
}> = ({ sectionName, children }) => {
  const [hasTracked, setHasTracked] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked) {
            trackEvent('section_view', {
              section_name: sectionName,
              event_category: 'page_interaction'
            });
            setHasTracked(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [sectionName, hasTracked]);

  return (
    <div ref={sectionRef}>
      {children}
    </div>
  );
};

// Global tracking hooks
export const useGlobalTracking = () => {
  useScrollTracking();
  useTimeTracking();

  React.useEffect(() => {
    // Track page load
    trackEvent('page_load', {
      page_name: 'MyRoboticTrader Landing Page',
      event_category: 'page_interaction'
    });

    // Track browser and device info
    trackEvent('user_info', {
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      event_category: 'user_data'
    });
  }, []);
};
