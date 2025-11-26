import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const SocialSidebar = () => {
    const socialLinks = [
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook', color: '#1877F2' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram', color: '#E4405F' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter', color: '#1DA1F2' },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed z-50 flex flex-col items-center gap-4 
                       left-4 top-1/2 -translate-y-1/2 
                       md:left-6 md:top-1/2 md:-translate-y-1/2
                       max-md:left-0 max-md:top-auto max-md:bottom-0 max-md:translate-y-0 max-md:w-full max-md:flex-row max-md:justify-center max-md:bg-nua-green-dark/90 max-md:backdrop-blur-sm max-md:py-3 max-md:border-t max-md:border-nua-cream/10"
        >
            <div className="hidden md:block w-px h-24 bg-nua-green-dark/30 mb-2"></div>

            {socialLinks.map((link) => (
                <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, color: link.color }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 text-nua-green-dark max-md:text-nua-cream transition-colors duration-300"
                    aria-label={link.label}
                >
                    <link.icon size={24} strokeWidth={1.5} />
                </motion.a>
            ))}

            <div className="hidden md:block w-px h-24 bg-nua-green-dark/30 mt-2"></div>
        </motion.div>
    );
};

export default SocialSidebar;
