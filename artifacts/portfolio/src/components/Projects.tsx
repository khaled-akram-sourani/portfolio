import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Bot, Code, Code2 } from 'lucide-react';

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 1,
      titleKey: 'projects.p1.title',
      descKey: 'projects.p1.desc',
      badgeKey: 'projects.p1.badge',
      tech: ['React', 'PHP', 'Laravel', 'MySQL', 'ChatGPT API'],
      icon: <Bot className="text-primary" size={24} />
    },
    {
      id: 2,
      titleKey: 'projects.p2.title',
      descKey: 'projects.p2.desc',
      badgeKey: 'projects.p2.badge',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      icon: <Code2 className="text-accent" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              {t('projects.title')}
              <span className="text-primary">.</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group relative rounded-2xl bg-card border border-white/5 p-6 md:p-8 overflow-hidden hover:border-primary/30 transition-colors"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                
                <div className="relative z-10 h-full flex flex-col gap-6">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-background border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {p.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold border border-primary/20">
                      {t(p.badgeKey)}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {t(p.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {t(p.descKey)}
                    </p>
                  </div>

                  <div className="mt-auto pt-6 flex flex-col gap-6">
                    <div className="flex flex-wrap gap-2">
                      {p.tech.map(tech => (
                        <span key={tech} className="px-2 py-1 rounded bg-white/5 text-xs text-foreground/80 border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors w-fit">
                      {t('projects.view')}
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
