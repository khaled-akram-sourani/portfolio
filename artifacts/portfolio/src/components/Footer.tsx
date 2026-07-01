import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart } from 'lucide-react';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 relative z-10 bg-background text-center">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          {t('footer.built')} <Heart size={16} className="text-red-500 fill-red-500" />
        </p>
        <p className="text-sm font-medium text-foreground/80">
          © {year} Khaled Sourani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
