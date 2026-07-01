import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiBootstrap, SiLaravel } from 'react-icons/si';

export function Skills() {
  const { t } = useLanguage();

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
    { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
    { name: 'PHP', icon: <FaPhp />, color: '#777BB4' },
    { name: 'Laravel', icon: <SiLaravel />, color: '#FF2D20' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '#FFFFFF' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 relative z-10 bg-background/50 border-y border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="space-y-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-foreground text-center md:text-left">
              {t('skills.title')}
              <span className="text-accent">.</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent mx-auto md:mx-0" />
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group p-6 rounded-2xl bg-card border border-white/5 flex flex-col items-center justify-center gap-4 hover:border-white/20 transition-all cursor-default relative overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: skill.color }}
                />
                <div 
                  className="text-5xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <span className="font-semibold text-sm tracking-wide">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
