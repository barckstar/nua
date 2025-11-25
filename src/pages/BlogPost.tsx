import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';

interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    date: string;
    author: string;
    image: string;
}

const BlogPost = () => {
    const { id } = useParams<{ id: string }>();
    const { t, language } = useLanguage();
    const [post, setPost] = useState<BlogPost | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        import(`../locales/${language}.json`).then((module) => {
            if (module.default.blog && module.default.blog.posts) {
                const foundPost = module.default.blog.posts.find((p: BlogPost) => p.id === id);
                if (foundPost) {
                    setPost(foundPost);
                } else {
                    // Post not found, redirect to blog list
                    navigate('/blog');
                }
            }
        });
    }, [id, language, navigate]);

    if (!post) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-nua-cream py-12 px-4 sm:px-6 lg:px-8">
            <article className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="relative h-[400px] w-full">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-5xl font-serif font-bold mb-4"
                        >
                            {post.title}
                        </motion.h1>
                        <div className="flex items-center gap-6 text-sm md:text-base opacity-90">
                            <div className="flex items-center gap-2">
                                <Calendar size={18} />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <User size={18} />
                                <span>{post.author}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="p-8 md:p-12">
                    <Link
                        to="/blog"
                        className="inline-flex items-center gap-2 text-nua-green-dark font-medium hover:text-nua-green-light transition-colors mb-8"
                    >
                        <ArrowLeft size={20} />
                        {t('blog.back')}
                    </Link>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-lg max-w-none text-gray-700 font-sans leading-relaxed"
                    >
                        {/* Simple paragraph rendering. In a real app, use a markdown parser or HTML sanitizer */}
                        {post.content.split('\n').map((paragraph, idx) => (
                            <p key={idx} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </motion.div>
                </div>
            </article>
        </div>
    );
};

export default BlogPost;
