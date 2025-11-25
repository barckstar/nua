import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogCardProps {
    id: string;
    title: string;
    description: string;
    date: string;
    author: string;
    image: string;
}

const BlogCard = ({ id, title, description, date, author, image }: BlogCardProps) => {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
        >
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-sm text-nua-brown/70 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{author}</span>
                    </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-nua-green-dark mb-2 line-clamp-2">
                    {title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {description}
                </p>
                <Link
                    to={`/blog/${id}`}
                    className="inline-flex items-center gap-2 text-nua-green-dark font-medium hover:text-nua-green-light transition-colors mt-auto"
                >
                    {t('blog.readMore')}
                    <ArrowRight size={16} />
                </Link>
            </div>
        </motion.div>
    );
};

export default BlogCard;
