import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import BlogCard from '../components/BlogCard';
import { motion } from 'framer-motion';

// Define the structure of a post based on our JSON
interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    date: string;
    author: string;
    image: string;
}

const Blog = () => {
    const { t, language } = useLanguage();
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        // In a real app with i18n library like i18next, we'd get the object directly.
        // Here we need to "hack" our simple context to get the array.
        // Since t() returns string, we might need to access the raw translations or parse.
        // However, our context exposes 't' which does path lookup. 
        // If we want the array, we should probably expose the raw translation object or add a helper.
        // For now, let's assume we can get it via a special key or just import the JSONs directly here 
        // as a fallback if context doesn't support returning objects.

        // Better approach: Import JSONs directly here for simplicity in this demo, 
        // matching the current language.
        import(`../locales/${language}.json`).then((module) => {
            if (module.default.blog && module.default.blog.posts) {
                setPosts(module.default.blog.posts);
            }
        });
    }, [language]);

    return (
        <div className="min-h-screen bg-nua-cream py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-nua-green-dark mb-4">
                        {t('nav.blog')}
                    </h1>
                    <p className="text-lg text-nua-brown max-w-2xl mx-auto">
                        Noticias, historias y actualizaciones sobre nuestra labor de conservación.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            date={post.date}
                            author={post.author}
                            image={post.image}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
