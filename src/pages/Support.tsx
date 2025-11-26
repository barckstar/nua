import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, TreePine, Droplets, Wind, Sprout, Camera, Shovel, HandHeart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Support = () => {
    const { t } = useLanguage();
    const [donationType, setDonationType] = useState<'onetime' | 'monthly'>('onetime');
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState('');

    const amounts = {
        onetime: [10, 25, 50, 100, 250, 500],
        monthly: [5, 10, 25, 50, 100, 200]
    };

    const impacts = [
        { icon: TreePine, amount: 25, text: 'support.impact.trees' },
        { icon: Droplets, amount: 100, text: 'support.impact.water' },
        { icon: Wind, amount: 500, text: 'support.impact.air' }
    ];

    return (
        <div className="pt-20 min-h-screen bg-nua-cream">
            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-nua-green-dark mb-6">
                            {t('support.hero.title')}
                        </h1>
                        <p className="text-xl text-nua-brown max-w-2xl mx-auto">
                            {t('support.hero.subtitle')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {impacts.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-nua-green-light/20 hover:border-nua-green-light/50 transition-colors"
                            >
                                <div className="bg-nua-green-light/10 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto text-nua-green-dark">
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-nua-green-dark text-center mb-2">
                                    ${item.amount}
                                </h3>
                                <p className="text-center text-nua-brown">
                                    {t(item.text)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tree Godparents Section */}
            <section className="py-20 bg-nua-green-dark text-nua-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-nua-green-light/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 bg-nua-green-light/20 px-4 py-2 rounded-full text-nua-green-light mb-6">
                                <Heart size={20} className="fill-current" />
                                <span className="font-bold tracking-wide uppercase text-sm">{t('support.godparents.price')}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                                {t('support.godparents.title')}
                            </h2>
                            <p className="text-xl opacity-90 mb-8 leading-relaxed">
                                {t('support.godparents.description')}
                            </p>

                            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10 mb-8">
                                <h3 className="font-bold text-xl mb-4 text-nua-green-light">
                                    {t('support.godparents.benefits.title')}
                                </h3>
                                <ul className="space-y-3">
                                    {[1, 2, 3, 4].map((item) => (
                                        <li key={item} className="flex items-start gap-3">
                                            <div className="mt-1 bg-nua-green-light rounded-full p-1">
                                                <div className="w-1.5 h-1.5 bg-nua-green-dark rounded-full" />
                                            </div>
                                            <span className="opacity-90">{t(`support.godparents.benefits.item${item}`)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <button className="bg-nua-green-light text-nua-green-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                {t('support.godparents.cta')}
                            </button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                                <img
                                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800"
                                    alt="Tree Planting"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-nua-green-dark/80 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-white/20 p-3 rounded-full backdrop-blur-md">
                                            <Sprout size={32} />
                                        </div>
                                        <div>
                                            <p className="text-sm opacity-80 uppercase tracking-wider">Impact</p>
                                            <p className="font-bold text-xl">1 Tree = Life</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Donation Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-nua-cream/30 rounded-3xl p-8 md:p-12 shadow-xl border border-nua-green-dark/5">
                        <h2 className="text-3xl font-serif font-bold text-nua-green-dark mb-8 text-center">
                            {t('support.form.title')}
                        </h2>

                        {/* Toggle */}
                        <div className="flex justify-center mb-12">
                            <div className="bg-nua-green-dark/5 p-1 rounded-full flex">
                                <button
                                    onClick={() => setDonationType('onetime')}
                                    className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${donationType === 'onetime'
                                        ? 'bg-nua-green-dark text-nua-cream shadow-lg'
                                        : 'text-nua-green-dark hover:bg-nua-green-dark/10'
                                        }`}
                                >
                                    {t('support.form.onetime')}
                                </button>
                                <button
                                    onClick={() => setDonationType('monthly')}
                                    className={`px-8 py-3 rounded-full text-sm font-medium transition-all ${donationType === 'monthly'
                                        ? 'bg-nua-green-dark text-nua-cream shadow-lg'
                                        : 'text-nua-green-dark hover:bg-nua-green-dark/10'
                                        }`}
                                >
                                    {t('support.form.monthly')}
                                </button>
                            </div>
                        </div>

                        {/* Amounts */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            {amounts[donationType].map((amount) => (
                                <button
                                    key={amount}
                                    onClick={() => {
                                        setSelectedAmount(amount);
                                        setCustomAmount('');
                                    }}
                                    className={`py-4 rounded-xl border-2 transition-all font-medium text-lg ${selectedAmount === amount
                                        ? 'border-nua-green-dark bg-nua-green-dark text-nua-cream'
                                        : 'border-nua-green-dark/10 text-nua-green-dark hover:border-nua-green-dark/30'
                                        }`}
                                >
                                    ${amount}
                                </button>
                            ))}
                        </div>

                        {/* Custom Amount */}
                        <div className="mb-8">
                            <label className="block text-sm font-medium text-nua-brown mb-2">
                                {t('support.form.custom_amount')}
                            </label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-nua-brown text-lg">$</span>
                                <input
                                    type="number"
                                    value={customAmount}
                                    onChange={(e) => {
                                        setCustomAmount(e.target.value);
                                        setSelectedAmount(null);
                                    }}
                                    className="w-full pl-8 pr-4 py-4 rounded-xl border-2 border-nua-green-dark/10 focus:border-nua-green-dark focus:outline-none bg-white transition-colors"
                                    placeholder="0.00"
                                />
                            </div>
                        </div>

                        {/* Personal Info */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <label className="block text-sm font-medium text-nua-brown mb-2">
                                    {t('support.form.name')}
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-4 rounded-xl border-2 border-nua-green-dark/10 focus:border-nua-green-dark focus:outline-none bg-white transition-colors"
                                    placeholder={t('support.form.name_placeholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-nua-brown mb-2">
                                    {t('support.form.email')}
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-4 rounded-xl border-2 border-nua-green-dark/10 focus:border-nua-green-dark focus:outline-none bg-white transition-colors"
                                    placeholder={t('support.form.email_placeholder')}
                                />
                            </div>
                        </div>

                        <button className="w-full bg-nua-green-dark text-nua-cream py-4 rounded-xl font-bold text-lg hover:bg-nua-green-light transition-colors flex items-center justify-center gap-2">
                            <Heart size={20} className="fill-current" />
                            {t('support.form.submit')}
                        </button>
                    </div>
                </div>
            </section>

            {/* Volunteering Section */}
            <section className="py-20 bg-nua-cream relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-serif font-bold text-nua-green-dark mb-4">
                            {t('support.volunteering.title')}
                        </h2>
                        <p className="text-xl text-nua-brown max-w-2xl mx-auto">
                            {t('support.volunteering.description')}
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            { key: 'planting', icon: Shovel, color: 'bg-emerald-100 text-emerald-700' },
                            { key: 'media', icon: Camera, color: 'bg-blue-100 text-blue-700' },
                            { key: 'care', icon: HandHeart, color: 'bg-orange-100 text-orange-700' }
                        ].map((role, idx) => (
                            <motion.div
                                key={role.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-nua-green-dark/5"
                            >
                                <div className={`w-16 h-16 rounded-2xl ${role.color} flex items-center justify-center mb-6`}>
                                    <role.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold text-nua-green-dark mb-3">
                                    {t(`support.volunteering.roles.${role.key}.title`)}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {t(`support.volunteering.roles.${role.key}.desc`)}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Expanded Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl overflow-hidden shadow-xl border border-nua-green-dark/5 mb-12"
                    >
                        <div className="grid md:grid-cols-2">
                            <div className="h-64 md:h-auto relative">
                                <img
                                    src="https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=800"
                                    alt={t('support.volunteering.expanded.image_alt')}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                            </div>
                            <div className="p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-3xl font-serif font-bold text-nua-green-dark mb-6">
                                    {t('support.volunteering.expanded.title')}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {t('support.volunteering.expanded.description')}
                                </p>
                                <button className="self-start bg-nua-brown text-white px-8 py-3 rounded-full font-bold hover:bg-nua-green-dark transition-colors">
                                    {t('support.volunteering.cta')}
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <div className="text-center hidden">
                        <button className="bg-nua-brown text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-nua-green-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            {t('support.volunteering.cta')}
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Support;
