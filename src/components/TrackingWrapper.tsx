import * as React from "react";

// Simple tracking functions that work with HTML-based GA
const trackEvent = (
  eventName: string,
  eventData?: RecordRecord<string, any>
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, {
      event_category: "engagement",
      event_label: "MyRoboticTrader",
      ...eventData,
    });
  }
  console.log("Event tracked:", eventName, eventData);
};

const trackConversion = (conversionType: string, conversionValue?: number) => {
  const conversionData = {
    event_category: "conversion",
    event_label: conversionType,
    value: conversionValue || 0,
    currency: "USD",
  };
  trackEvent("conversion", conversionData);
};

interface TrackingWrapperProps {
  children: React.ReactNode;
  eventName: string;
  eventData?: RecordRecord<string, any>;
  conversionType?: string;
  conversionValue?: number;
}

export const TrackingWrapper: React.FC<TrackingWrapperProps> = ({
  children,
  eventName,
  eventData,
  conversionType,
  conversionValue,
}) => {
  const handleClick = () => {
    trackEvent(eventName, eventData);

    if (conversionType) {
      trackConversion(conversionType, conversionValue);
    }
  };

  return <div onClick={handleClick}>{children}</div>;
};

// Hook for tracking button clicks
export const useButtonTracking = (buttonName: string) => {
  return (additionalData?: RecordRecord<string, any>) => {
    trackEvent("button_click", {
      button_name: buttonName,
      event_category: "interaction",
      ...additionalData,
    });
  };
};

// Hook for tracking form interactions
export const useFormTracking = (formName: string) => {
  const trackFormStart = () => {
    trackEvent("form_start", {
      form_name: formName,
      event_category: "form_interaction",
    });
  };

  const trackFormSubmit = () => {
    trackEvent("form_submit", {
      form_name: formName,
      event_category: "form_interaction",
    });
    trackConversion("form_submission");
  };

  const trackFormError = (errorType: string) => {
    trackEvent("form_error", {
      form_name: formName,
      error_type: errorType,
      event_category: "form_interaction",
    });
  };

  return { trackFormStart, trackFormSubmit, trackFormError };
};

// Component for tracking section visibility
export const SectionTracker: React.FCReact.FCReact.FCReact.FCReact.FCReact.FC<{
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
            trackEvent("section_view", {
              section_name: sectionName,
              event_category: "page_interaction",
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

  return <div ref={sectionRef}>{children}</div>;
};
