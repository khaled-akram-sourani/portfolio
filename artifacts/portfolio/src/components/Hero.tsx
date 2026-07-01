import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedGlobe } from './AnimatedGlobe';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { t, language } = useLanguage();
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    t('hero.role1'),
    t('hero.role2'),
    t('hero.role3'),
    t('hero.role4'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      {/* Background Particles (subtle) */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-primary rounded-full blur-[2px]" />
        <div className="absolute top-[60%] left-[5%] w-1 h-1 bg-accent rounded-full blur-[1px]" />
        <div className="absolute top-[80%] left-[20%] w-3 h-3 bg-cyan-400 rounded-full blur-[4px]" />
      </div>

      {/* Left Scroll Text */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-8 opacity-50">
        <span className="text-xs tracking-[0.3em] rotate-180" style={{ writingMode: 'vertical-rl' }}>
          {t('hero.scroll')}
        </span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-primary/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              {t('hero.badge')}
            </div>

            <div className="space-y-2">
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium flex items-center gap-2">
                {t('hero.greeting')} <span className="animate-wave origin-bottom-right inline-block">👋</span>
              </h2>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                <span className="block text-foreground">{t('hero.name1')}</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow-text">
                  {t('hero.name2')}
                </span>
              </h1>
            </div>

            <div className="h-10 text-2xl md:text-3xl font-bold text-foreground/80 flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roleIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {roles[roleIndex]}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="inline-block ml-1 w-3 h-8 bg-primary align-middle"
                  />
                </motion.span>
              </AnimatePresence>
            </div>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              {t('hero.bio')}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(79,124,255,0.4)] px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta.projects')}
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5 px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t('hero.cta.contact')}
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-white/5 mt-4 w-full">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">{t('hero.stats.projects').split(' ')[0]}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{t('hero.stats.projects').substring(t('hero.stats.projects').indexOf(' ')+1)}</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">{t('hero.stats.experience').split(' ')[0]}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{t('hero.stats.experience').substring(t('hero.stats.experience').indexOf(' ')+1)}</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-foreground">{t('hero.stats.tech').split(' ')[0]}</span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{t('hero.stats.tech').substring(t('hero.stats.tech').indexOf(' ')+1)}</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <AnimatedGlobe />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
