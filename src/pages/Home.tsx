import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, TreePine, Leaf, Camera, Mail, CreditCard, Bug, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/BlogCard';
import galleryData from '../data/gallery.json';

// Define types for Blog Post
interface BlogPost {
    id: string;
    title: string;
    description: string;
    content: string;
    date: string;
    author: string;
    image: string;
}

const Home = () => {
    const { t, language } = useLanguage();
    const [posts, setPosts] = useState<BlogPost[]>([]);

    useEffect(() => {
        // Load blog posts from locale file
        import(`../locales/${language}.json`).then((module) => {
            if (module.default.blog && module.default.blog.posts) {
                setPosts(module.default.blog.posts.slice(0, 3)); // Get only first 3 posts
            }
        });
    }, [language]);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="w-full bg-nua-cream/20">
            <Helmet>
                <title>{t('home.heroTitle')} | Fundación Núa</title>
                <meta name="description" content={t('home.heroSubtitle')} />
            </Helmet>
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-nua-green-dark/30 z-10" />
                <div className="absolute inset-0 bg-[url('/wallpaper.jpeg')] bg-cover bg-center" />

                <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-nua-cream mb-6 drop-shadow-lg"
                    >
                        {t('home.heroTitle')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-nua-cream/90 mb-8 max-w-2xl mx-auto drop-shadow-md"
                    >
                        {t('home.heroSubtitle')}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link
                            to="/support"
                            className="inline-flex items-center gap-2 bg-nua-green-light text-nua-green-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-nua-cream transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            {t('home.cta')}
                            <ArrowRight size={24} />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* About Teaser */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-serif font-bold text-nua-green-dark mb-6">{t('home.aboutTeaser.title')}</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {t('home.aboutTeaser.text')}
                    </p>
                    <Link to="/about" className="text-nua-green-dark font-bold hover:text-nua-green-light inline-flex items-center gap-2 transition-colors">
                        {t('home.aboutTeaser.cta')} <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </section>

            {/* Biodiversity Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold text-nua-green-dark mb-4">{t('home.biodiversity.title')}</h2>
                        <p className="text-lg text-gray-600">{t('home.biodiversity.subtitle')}</p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { icon: <Leaf size={40} />, label: "Flora", img: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=500" },
                            { icon: <Bug size={40} />, label: "Fauna", img: "https://images.unsplash.com/photo-1470093851219-69951fcbb533?auto=format&fit=crop&q=80&w=500" },
                            { icon: <Sprout size={40} />, label: "Fungi", img: "https://images.unsplash.com/photo-1595304355326-88691535d648?auto=format&fit=crop&q=80&w=500" },
                            { icon: <TreePine size={40} />, label: "Bosque", img: "https://images.unsplash.com/photo-1448375240586-dfd8d395ea6c?auto=format&fit=crop&q=80&w=500" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative group overflow-hidden rounded-2xl aspect-square cursor-pointer"
                            >
                                <img src={item.img} alt={item.label} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex flex-col items-center justify-center text-white">
                                    <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm mb-2">
                                        {item.icon}
                                    </div>
                                    <span className="font-bold text-xl">{item.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tree Godparents & Volunteering Grid */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Godparents */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-nua-green-dark text-nua-cream rounded-3xl p-10 relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <Heart size={48} className="mb-6 text-nua-green-light" />
                            <h3 className="text-3xl font-serif font-bold mb-4">{t('home.godparents.title')}</h3>
                            <p className="text-lg mb-8 opacity-90">{t('home.godparents.text')}</p>
                            <Link to="/support" className="bg-nua-green-light text-nua-green-dark px-6 py-3 rounded-full font-bold hover:bg-white transition-colors inline-flex items-center gap-2">
                                {t('home.godparents.cta')} <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    </motion.div>

                    {/* Volunteering */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="bg-nua-brown text-white rounded-3xl p-10 relative overflow-hidden"
                    >
                        <div className="relative z-10">
                            <Users size={48} className="mb-6 text-nua-cream" />
                            <h3 className="text-3xl font-serif font-bold mb-4">{t('home.volunteering.title')}</h3>
                            <p className="text-lg mb-8 opacity-90">{t('home.volunteering.text')}</p>
                            <Link to="/contact" className="bg-white text-nua-brown px-6 py-3 rounded-full font-bold hover:bg-nua-cream transition-colors inline-flex items-center gap-2">
                                {t('home.volunteering.cta')} <ArrowRight size={20} />
                            </Link>
                        </div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
                    </motion.div>
                </div>
            </section>

            {/* Blog Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-4xl font-serif font-bold text-nua-green-dark mb-2">{t('home.blogPreview.title')}</h2>
                            <div className="h-1 w-20 bg-nua-green-light rounded-full" />
                        </motion.div>
                        <Link to="/blog" className="hidden md:flex items-center gap-2 text-nua-brown font-bold hover:text-nua-green-dark transition-colors">
                            {t('home.blogPreview.cta')} <ArrowRight size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

                    <div className="mt-8 text-center md:hidden">
                        <Link to="/blog" className="inline-flex items-center gap-2 text-nua-brown font-bold hover:text-nua-green-dark transition-colors">
                            {t('home.blogPreview.cta')} <ArrowRight size={20} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Gallery Preview */}
            <section className="py-20 bg-nua-green-dark/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-4xl font-serif font-bold text-nua-green-dark mb-2">{t('home.galleryPreview.title')}</h2>
                            <div className="h-1 w-20 bg-nua-green-light rounded-full" />
                        </motion.div>
                        <Link to="/gallery" className="hidden md:flex items-center gap-2 text-nua-brown font-bold hover:text-nua-green-dark transition-colors">
                            {t('home.galleryPreview.cta')} <Camera size={20} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {galleryData.slice(0, 4).map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support & Bank Info */}
            <section className="py-20 bg-nua-green-dark text-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-4xl font-serif font-bold mb-6">{t('support.hero.title')}</h2>
                            <p className="text-xl opacity-90 mb-8">{t('support.hero.subtitle')}</p>

                            <div className="space-y-6">
                                <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <CreditCard className="text-nua-green-light" /> {t('home.bankInfo.title')}
                                    </h3>
                                    <div className="space-y-2 font-mono text-sm md:text-base">
                                        <p><span className="opacity-60">{t('home.bankInfo.iban')}:</span> CR00 0000 0000 0000 0000 00</p>
                                        <p><span className="opacity-60">{t('home.bankInfo.simpe')}:</span> 8888-8888</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="bg-white text-nua-green-dark p-8 md:p-12 rounded-3xl shadow-2xl"
                        >
                            <h3 className="text-3xl font-serif font-bold mb-6 text-center">{t('home.contact.title')}</h3>
                            <p className="text-center text-gray-600 mb-8">{t('home.contact.subtitle')}</p>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <label className="block text-sm font-bold mb-1 ml-1">{t('home.contact.name')}</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nua-green-light focus:ring-2 focus:ring-nua-green-light/20 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-1 ml-1">{t('home.contact.email')}</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nua-green-light focus:ring-2 focus:ring-nua-green-light/20 outline-none transition-all" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold mb-1 ml-1">{t('home.contact.message')}</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nua-green-light focus:ring-2 focus:ring-nua-green-light/20 outline-none transition-all"></textarea>
                                </div>
                                <button className="w-full bg-nua-green-dark text-white font-bold py-4 rounded-xl hover:bg-nua-brown transition-colors shadow-lg flex items-center justify-center gap-2">
                                    {t('home.contact.submit')} <Mail size={20} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
