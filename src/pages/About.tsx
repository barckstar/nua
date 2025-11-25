import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Users, Target, Heart, Eye, Award } from 'lucide-react';

const About = () => {
    const { t } = useLanguage();

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className="min-h-screen bg-nua-cream/20">
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-nua-green-dark">
                <div className="absolute inset-0 bg-[url('/gallery/WhatsApp%20Image%202025-11-24%20at%208.27.19%20PM.jpeg')] bg-cover bg-center opacity-40" />
                <div className="relative z-10 text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-nua-cream mb-4"
                    >
                        {t('about.title')}
                    </motion.h1>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-1 w-24 bg-nua-green-light mx-auto"
                    />
                </div>
            </section>

            {/* Origins Section */}
            <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        {...fadeInUp}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-serif font-bold text-nua-green-dark">
                            {t('about.origins.title')}
                        </h2>
                        <div className="prose prose-lg text-gray-600 text-justify">
                            {t('about.origins.text').split('\n').map((paragraph: string, idx: number) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="/gallery/WhatsApp Image 2025-11-24 at 8.27.19 PM (1).jpeg"
                            alt="Fundación Núa Origins"
                            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid md:grid-cols-3 gap-8"
                    >
                        {/* Mission */}
                        <motion.div variants={fadeInUp} className="bg-nua-cream/30 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-nua-green-light/20">
                            <div className="w-16 h-16 bg-nua-green-light/20 rounded-full flex items-center justify-center mb-6 text-nua-green-dark">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-nua-green-dark mb-4">{t('about.mission.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('about.mission.text')}</p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div variants={fadeInUp} className="bg-nua-cream/30 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-nua-green-light/20">
                            <div className="w-16 h-16 bg-nua-green-light/20 rounded-full flex items-center justify-center mb-6 text-nua-green-dark">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-nua-green-dark mb-4">{t('about.vision.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('about.vision.text')}</p>
                        </motion.div>

                        {/* Values */}
                        <motion.div variants={fadeInUp} className="bg-nua-cream/30 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-nua-green-light/20">
                            <div className="w-16 h-16 bg-nua-green-light/20 rounded-full flex items-center justify-center mb-6 text-nua-green-dark">
                                <Heart size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-nua-green-dark mb-4">{t('about.values.title')}</h3>
                            <p className="text-gray-600 leading-relaxed">{t('about.values.text')}</p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Objectives */}
            <section className="py-20 bg-nua-green-dark text-nua-cream overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.div {...fadeInUp} className="text-center mb-16">
                        <h2 className="text-4xl font-serif font-bold mb-4">{t('about.objectives.title')}</h2>
                        <div className="h-1 w-24 bg-nua-green-light mx-auto" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <Award className="w-10 h-10 text-nua-green-light mb-4" />
                                <p className="text-lg">{t(`about.objectives.item${item}`)}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.h2 {...fadeInUp} className="text-4xl font-serif font-bold text-nua-green-dark text-center mb-16">
                        {t('about.timeline.title')}
                    </motion.h2>

                    <div className="relative border-l-2 border-nua-green-light/30 ml-4 md:ml-0 space-y-12">
                        {[1, 2, 3].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-8 md:pl-0"
                            >
                                <div className="md:flex items-center justify-between group">
                                    <div className="hidden md:block w-5/12 text-right pr-8">
                                        <span className="text-2xl font-bold text-nua-green-light">{t(`about.timeline.item${item}.year`)}</span>
                                    </div>
                                    <div className="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-5 h-5 rounded-full bg-nua-green-light border-4 border-white shadow-lg group-hover:scale-125 transition-transform" />
                                    <div className="md:w-5/12 pl-0 md:pl-8">
                                        <span className="md:hidden text-xl font-bold text-nua-green-light block mb-2">{t(`about.timeline.item${item}.year`)}</span>
                                        <h3 className="text-xl font-bold text-nua-green-dark mb-2">{t(`about.timeline.item${item}.title`)}</h3>
                                        <p className="text-gray-600">{t(`about.timeline.item${item}.desc`)}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-nua-cream/30">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <motion.h2 {...fadeInUp} className="text-4xl font-serif font-bold text-nua-green-dark text-center mb-16">
                        {t('about.team.title')}
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
                            >
                                <div className="h-64 bg-gray-200 overflow-hidden">
                                    <div className="w-full h-full bg-nua-green-dark/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                                        <Users size={48} className="text-nua-green-dark/40" />
                                    </div>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-xl font-bold text-nua-green-dark mb-1">{t(`about.team.member${item}.name`)}</h3>
                                    <p className="text-nua-green-light font-medium">{t(`about.team.member${item}.role`)}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
                    <motion.div {...fadeInUp}>
                        <MapPin className="w-12 h-12 text-nua-green-light mx-auto mb-6" />
                        <h2 className="text-4xl font-serif font-bold text-nua-green-dark mb-6">
                            {t('about.location.title')}
                        </h2>
                        <p className="text-2xl text-gray-600 font-light">
                            San Ramón, Alajuela<br />
                            <span className="text-nua-green-light font-bold">Costa Rica</span>
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
