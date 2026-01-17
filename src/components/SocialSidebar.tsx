import { motion } from 'framer-motion';
import { Mail, Instagram, Phone, MessageCircle } from 'lucide-react';

const socialLinks = [
  {
    platform: 'email',
    icon: Mail,
    link: 'mailto:contact@belmonholidays.com',
    tooltip: 'Email Us',
  },
  {
    platform: 'instagram',
    icon: Instagram,
    link: 'https://instagram.com/belmonholidays',
    tooltip: 'Follow on Instagram',
  },
  {
    platform: 'whatsapp',
    icon: MessageCircle,
    link: 'https://wa.me/+1234567890',
    tooltip: 'WhatsApp Us',
  },
  {
    platform: 'phone',
    icon: Phone,
    link: 'tel:+1234567890',
    tooltip: 'Call Us',
  },
];

const SocialSidebar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-4 bg-card/95 backdrop-blur-sm rounded-full py-5 px-3 shadow-elegant border border-border"
    >
      {socialLinks.map((item, index) => (
        <motion.a
          key={item.platform}
          href={item.link}
          target={item.platform !== 'phone' && item.platform !== 'email' ? '_blank' : undefined}
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 + index * 0.1 }}
          className="group relative p-2 rounded-full transition-all duration-300 hover:bg-primary/10"
          aria-label={item.tooltip}
        >
          <item.icon 
            size={22} 
            className="icon-gold" 
          />
          
          {/* Tooltip */}
          <span className="absolute left-full ml-3 px-3 py-1.5 bg-foreground text-background text-xs font-medium rounded whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            {item.tooltip}
          </span>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialSidebar;
