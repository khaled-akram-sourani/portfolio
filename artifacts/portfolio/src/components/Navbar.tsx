import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useActiveSection } from '@/hooks/use-active-section';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { language, toggleLanguage, t, isRtl } = useLanguage();
  const activeSection = useActiveSection(['home', 'about', 'projects', 'skills', 'achievements', 'contact']);

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'achievements', label: t('nav.achievements') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            className="flex items-center gap-2"
            onClick={() => scrollToSection('home')}
            aria-label="Scroll to top"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center glow-box">
              <span className="text-primary font-bold text-xl tracking-tighter">KS</span>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md relative ${
                  activeSection === link.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="font-bold border-white/10 hover:border-primary/50 hover:text-primary transition-all"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
