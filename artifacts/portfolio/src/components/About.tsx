import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { User, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
// We will import the asset from the correct path. The user specifies:
// import khaledPhoto from '@assets/khaled1_1782917413564.jpg'
import khaledPhoto from '@assets/khaled1_1782917413564.jpg';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Photo Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent blur-xl opacity-30 animate-pulse" />
              <div className="absolute inset-[-4px] rounded-full bg-gradient-to-br from-primary via-accent to-primary animate-[spin_4s_linear_infinite]" />
              <div className="absolute inset-1 bg-background rounded-full overflow-hidden">
                <img 
                  src={khaledPhoto} 
                  alt="Khaled Akram Al-Sourani" 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Info Column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-foreground">
                {t('nav.about')}
                <span className="text-primary">.</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent" />
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t('about.story')}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-card border border-white/5 flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <User size={20} />
                </div>
                <span className="text-sm font-medium">{t('about.age')}</span>
              </div>
              
              <div className="p-4 rounded-xl bg-card border border-white/5 flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  <MapPin size={20} />
                </div>
                <span className="text-sm font-medium">{t('about.location')}</span>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white/5 flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <Calendar size={20} />
                </div>
                <span className="text-sm font-medium">{t('about.birthday')}</span>
              </div>

              <div className="p-4 rounded-xl bg-card border border-white/5 flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <CheckCircle2 size={20} />
                </div>
                <span className="text-sm font-medium">{t('about.status')}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
