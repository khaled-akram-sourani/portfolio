import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      return { id, observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs?.observer && obs.element) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [sectionIds]);

  return activeSection;
}
