import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MapPin, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast({
          title: 'Success',
          description: 'Your message has been sent successfully.',
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to send');
      }
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-background/80">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-4 text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-foreground">
              {t('contact.title')}
              <span className="text-primary">.</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Info Cards */}
            <div className="flex flex-col gap-6">
              <div className="p-8 rounded-2xl bg-card border border-white/5 flex items-center gap-6 group hover:border-primary/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    {t('contact.email')}
                  </h4>
                  <a href="mailto:khaledakram1234567890@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                    khaledakram1234567890@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-card border border-white/5 flex items-center gap-6 group hover:border-accent/30 transition-colors">
                <div className="w-16 h-16 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    {t('contact.location')}
                  </h4>
                  <span className="text-lg font-medium">
                    {t('contact.location.value')}
                  </span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card p-8 rounded-2xl border border-white/5">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-muted-foreground">
                    {t('contact.form.name')}
                  </label>
                  <Input 
                    id="contact-name"
                    name="name" 
                    placeholder={t('contact.form.name')} 
                    required 
                    className="bg-background border-white/10 h-12 focus-visible:ring-primary focus-visible:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-muted-foreground">
                    {t('contact.form.email')}
                  </label>
                  <Input 
                    id="contact-email"
                    name="email" 
                    type="email" 
                    placeholder={t('contact.form.email')} 
                    required 
                    className="bg-background border-white/10 h-12 focus-visible:ring-primary focus-visible:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-message" className="text-sm font-medium text-muted-foreground">
                    {t('contact.form.message')}
                  </label>
                  <Textarea 
                    id="contact-message"
                    name="message" 
                    placeholder={t('contact.form.message')} 
                    required 
                    className="bg-background border-white/10 min-h-[150px] resize-none focus-visible:ring-primary focus-visible:border-primary"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="w-full h-12 text-base font-bold bg-primary hover:bg-primary/90 glow-box text-primary-foreground gap-2"
                >
                  {loading ? '...' : t('contact.form.send')}
                  <Send size={18} />
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
