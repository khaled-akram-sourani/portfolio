import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

export function Achievements() {
  const { t, isRtl } = useLanguage();

  const achievements = [
    {
      id: 1,
      titleKey: 'achievements.c1.title',
      dateKey: 'achievements.c1.date',
      descKey: 'achievements.c1.desc',
      icon: <GraduationCap size={24} />
    },
    {
      id: 2,
      titleKey: 'achievements.c2.title',
      dateKey: 'achievements.c2.date',
      descKey: 'achievements.c2.desc',
      icon: <Award size={24} />
    },
    {
      id: 3,
      titleKey: 'achievements.c3.title',
      dateKey: 'achievements.c3.date',
      descKey: 'achievements.c3.desc',
      icon: <Briefcase size={24} />
    }
  ];

  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              {t('achievements.title')}
              <span className="text-cyan-400">.</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline Line */}
            <div className={`absolute top-0 bottom-0 w-[2px] bg-white/10 ${isRtl ? 'right-[27px]' : 'left-[27px]'}`} />

            <div className="space-y-12">
              {achievements.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isRtl ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative flex gap-6 md:gap-8"
                >
                  <div className="relative z-10 shrink-0 w-14 h-14 rounded-full bg-card border-2 border-cyan-400/50 text-cyan-400 flex items-center justify-center glow-box shadow-cyan-400/20">
                    {item.icon}
                  </div>
                  
                  <div className="flex-1 pb-12">
                    <div className="bg-card border border-white/5 rounded-2xl p-6 md:p-8 hover:border-cyan-400/30 transition-colors">
                      <span className="text-sm font-medium text-cyan-400 mb-2 block">
                        {t(item.dateKey)}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold mb-3">
                        {t(item.titleKey)}
                      </h3>
                      <p className="text-muted-foreground">
                        {t(item.descKey)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
