import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, TreePine, Droplets, Wind, CreditCard, Building2, Copy, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Support = () => {
    const { t } = useLanguage();
    const [donationType, setDonationType] = useState<'onetime' | 'monthly'>('onetime');
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
    const [customAmount, setCustomAmount] = useState('');
    const [copied, setCopied] = useState(false);

    const amounts = {
        onetime: [10, 25, 50, 100, 250, 500],
        monthly: [5, 10, 25, 50, 100, 200]
    };

    const impacts = [
        { icon: TreePine, amount: 25, text: 'support.impact.trees' },
        { icon: Droplets, amount: 100, text: 'support.impact.water' },
        { icon: Wind, amount: 500, text: 'support.impact.air' }
    ];

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

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

            {/* Bank Info Section */}
            <section className="py-20 bg-nua-green-dark text-nua-cream">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-serif font-bold mb-6">{t('support.bank.title')}</h2>
                        <p className="text-nua-cream/80 max-w-2xl mx-auto">
                            {t('support.bank.subtitle')}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-nua-green-light/20 p-3 rounded-full">
                                    <Building2 size={24} className="text-nua-green-light" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">Banco Nacional</h3>
                                    <p className="text-sm text-nua-cream/60">Cuenta Corriente</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div>
                                    <p className="text-xs text-nua-cream/60 mb-1">IBAN (Colones)</p>
                                    <div className="flex items-center justify-between bg-black/20 p-3 rounded-lg">
                                        <code className="font-mono text-sm">CR00010000000000000000</code>
                                        <button
                                            onClick={() => handleCopy('CR00010000000000000000')}
                                            className="hover:text-nua-green-light transition-colors"
                                        >
                                            {copied ? <Check size={16} /> : <Copy size={16} />}
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xs text-nua-cream/60 mb-1">IBAN (Dólares)</p>
                                    <div className="flex items-center justify-between bg-black/20 p-3 rounded-lg">
                                        <code className="font-mono text-sm">CR00010000000000000001</code>
                                        <button
                                            onClick={() => handleCopy('CR00010000000000000001')}
                                            className="hover:text-nua-green-light transition-colors"
                                        >
                                            {copied ? <Check size={16} /> : <Copy size={16} />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-nua-green-light/20 p-3 rounded-full">
                                    <CreditCard size={24} className="text-nua-green-light" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg">SINPE Móvil</h3>
                                    <p className="text-sm text-nua-cream/60">Transferencia Rápida</p>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center h-full pb-6">
                                <p className="text-xs text-nua-cream/60 mb-1">Número Teléfonico</p>
                                <div className="flex items-center justify-between bg-black/20 p-4 rounded-lg mb-4">
                                    <code className="font-mono text-xl font-bold">8888-8888</code>
                                    <button
                                        onClick={() => handleCopy('8888-8888')}
                                        className="hover:text-nua-green-light transition-colors"
                                    >
                                        {copied ? <Check size={20} /> : <Copy size={20} />}
                                    </button>
                                </div>
                                <p className="text-sm text-nua-cream/60 text-center">
                                    A nombre de: Fundación Núa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Support;
