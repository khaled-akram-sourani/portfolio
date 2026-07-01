import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.achievements': 'Achievements',
    'nav.contact': 'Contact',
    
    'hero.badge': 'Available for opportunities',
    'hero.greeting': "Hello, I'm",
    'hero.name1': 'Khaled',
    'hero.name2': 'Sourani',
    'hero.role1': 'Full Stack Developer',
    'hero.role2': 'Web Developer',
    'hero.role3': 'Frontend Developer',
    'hero.role4': 'Backend Developer',
    'hero.bio': 'I build modern scalable web applications that solve real-world problems. A self-taught developer from Gaza who codes with purpose.',
    'hero.cta.projects': 'View Projects',
    'hero.cta.contact': 'Get In Touch',
    'hero.stats.projects': '2+ Projects',
    'hero.stats.experience': '4+ Years Coding',
    'hero.stats.tech': '10+ Technologies',
    'hero.scroll': 'SCROLL TO EXPLORE',

    'about.story': "I'm Khaled Akram Al-Sourani, a 16-year-old Full Stack Web Developer from Gaza, Palestine (born December 5, 2009). My programming journey began at age 12. Through years of self-teaching I mastered the full web stack. Living through the war in Gaza shaped me deeply -- it taught me responsibility, resilience, and gave me courage to keep building toward my future.",
    'about.age': 'Age 16',
    'about.location': 'Location Gaza Palestine',
    'about.birthday': 'Birthday 5/12/2009',
    'about.status': 'Status Available',

    'projects.title': 'My Projects',
    'projects.p1.title': 'Job Marketplace Platform',
    'projects.p1.desc': 'A job marketplace similar to Khamsat where employers post jobs and applicants submit CVs. Uses ChatGPT AI to evaluate CVs based on job requirements and score candidates automatically.',
    'projects.p1.badge': 'AI + Full Stack',
    'projects.p2.title': 'MTC Tech Website',
    'projects.p2.desc': 'Developed during training at MTC company. A professional e-commerce website for selling QR codes and digital products.',
    'projects.p2.badge': 'Training Project',
    'projects.view': 'View Project',

    'skills.title': 'Skills & Technologies',
    
    'achievements.title': 'Achievements & Certifications',
    'achievements.c1.title': 'Frontend Certificate -- Waslah Company',
    'achievements.c1.date': 'June 2023 to October 2023',
    'achievements.c1.desc': 'Professional frontend development training and certification program.',
    'achievements.c2.title': 'Backend Development Certificate',
    'achievements.c2.date': 'December 2024 to January 2026',
    'achievements.c2.desc': 'Advanced backend development program covering server-side technologies.',
    'achievements.c3.title': 'MTC Company Training',
    'achievements.c3.date': 'January 2024 to March 2024',
    'achievements.c3.desc': 'One-month professional training at MTC Tech where I built their official company website.',

    'contact.title': 'Get In Touch',
    'contact.email': 'Email',
    'contact.location': 'Location',
    'contact.location.value': 'Gaza, Palestine',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',

    'footer.built': 'Built with love from Gaza',
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'عني',
    'nav.projects': 'المشاريع',
    'nav.skills': 'المهارات',
    'nav.achievements': 'الإنجازات',
    'nav.contact': 'التواصل',
    
    'hero.badge': 'متاح للفرص',
    'hero.greeting': 'مرحباً، أنا',
    'hero.name1': 'خالد',
    'hero.name2': 'الصوراني',
    'hero.role1': 'مطور ويب متكامل',
    'hero.role2': 'مطور ويب',
    'hero.role3': 'مطور واجهات',
    'hero.role4': 'مطور خوادم',
    'hero.bio': 'أبني تطبيقات ويب حديثة وقابلة للتطوير تحل مشكلات حقيقية. مطور ذاتي التعلم من غزة يبرمج بهدف.',
    'hero.cta.projects': 'عرض المشاريع',
    'hero.cta.contact': 'تواصل معي',
    'hero.stats.projects': '+2 مشاريع',
    'hero.stats.experience': '+4 سنوات برمجة',
    'hero.stats.tech': '+10 تقنيات',
    'hero.scroll': 'مرر للاستكشاف',

    'about.story': 'أنا خالد أكرم الصوراني، مطور ويب متكامل من غزة، فلسطين (مواليد 5/12/2009). بدأت رحلتي مع البرمجة في سن 12 عاماً. من خلال التعلم الذاتي أتقنت تطوير الويب كاملاً. الحياة في غزة خلال الحرب علمتني المسؤولية والصمود وأعطتني الشجاعة لمواصلة البناء نحو مستقبلي.',
    'about.age': 'العمر 16',
    'about.location': 'الموقع غزة فلسطين',
    'about.birthday': 'الميلاد 5/12/2009',
    'about.status': 'الحالة متاح',

    'projects.title': 'مشاريعي',
    'projects.p1.title': 'منصة سوق العمل',
    'projects.p1.desc': 'منصة عمل مشابهة لخمسات يتيح لأصحاب العمل نشر وظائف وللمتقدمين إرسال سيرتهم الذاتية. تستخدم الذكاء الاصطناعي ChatGPT لتقييم السيرة الذاتية بناءً على متطلبات الوظيفة.',
    'projects.p1.badge': 'ذكاء اصطناعي + متكامل',
    'projects.p2.title': 'موقع شركة MTC Tech',
    'projects.p2.desc': 'طُوِّر خلال التدريب في شركة MTC. موقع تجاري احترافي لبيع رموز QR والمنتجات الرقمية.',
    'projects.p2.badge': 'مشروع تدريب',
    'projects.view': 'عرض المشروع',

    'skills.title': 'المهارات والتقنيات',
    
    'achievements.title': 'الإنجازات والشهادات',
    'achievements.c1.title': 'شهادة تطوير الواجهات -- شركة وصلة',
    'achievements.c1.date': 'يونيو 2023 إلى أكتوبر 2023',
    'achievements.c1.desc': 'برنامج تدريب واحتراف في تطوير واجهات المستخدم.',
    'achievements.c2.title': 'شهادة تطوير الخوادم',
    'achievements.c2.date': 'ديسمبر 2024 إلى يناير 2026',
    'achievements.c2.desc': 'برنامج متقدم في تطوير الخوادم والباك اند.',
    'achievements.c3.title': 'تدريب شركة MTC',
    'achievements.c3.date': 'يناير 2024 إلى مارس 2024',
    'achievements.c3.desc': 'تدريب مهني لمدة شهر في شركة MTC Tech حيث بنيت موقعهم الرسمي.',

    'contact.title': 'تواصل معي',
    'contact.email': 'البريد الإلكتروني',
    'contact.location': 'الموقع',
    'contact.location.value': 'غزة، فلسطين',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',

    'footer.built': 'صُنع بحب من غزة',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRtl: language === 'ar' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
