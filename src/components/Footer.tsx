import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, CreditCard, Check, Copy, Mail } from 'lucide-react';

const Footer = () => {
    const { t } = useLanguage();
    const [copied, setCopied] = useState(false);

    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <footer className="bg-nua-green-dark text-nua-cream pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Bank Info Section */}
                <div className="mb-16">
                    <h2 className="text-4xl text-center font-serif font-bold mb-6">{t('support.hero.title')}</h2>
                    <p className="text-xl opacity-90 mb-8 text-center">{t('support.hero.subtitle')}</p>

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

                {/* Contact Form Section */}
                <div className="mb-16 bg-white text-nua-green-dark p-8 md:p-12 rounded-3xl shadow-2xl max-w-4xl mx-auto">
                    <h3 className="text-3xl font-serif font-bold mb-6 text-center">{t('home.contact.title')}</h3>
                    <p className="text-center text-gray-600 mb-8">{t('home.contact.subtitle')}</p>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-bold mb-1 ml-1">{t('home.contact.name')}</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nua-green-light focus:ring-2 focus:ring-nua-green-light/20 outline-none transition-all" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold mb-1 ml-1">{t('home.contact.email')}</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nua-green-light focus:ring-2 focus:ring-nua-green-light/20 outline-none transition-all" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold mb-1 ml-1">{t('home.contact.message')}</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-nua-green-light focus:ring-2 focus:ring-nua-green-light/20 outline-none transition-all"></textarea>
                        </div>
                        <button className="w-full bg-nua-green-dark text-white font-bold py-4 rounded-xl hover:bg-nua-brown transition-colors shadow-lg flex items-center justify-center gap-2">
                            {t('home.contact.submit')} <Mail size={20} />
                        </button>
                    </form>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-nua-cream/10 pt-8">
                    <div className="mb-4 md:mb-0 flex items-center gap-2">
                        <img src="/logo.jpeg" alt="Núa Logo" width={40} height={40} className="rounded-full" />
                        <div>
                            <span className="text-2xl font-serif font-bold">Núa</span>
                            <span className="ml-2 text-sm opacity-80">Fundación</span>
                        </div>
                    </div>
                    <div className="text-sm opacity-70">
                        &copy; {new Date().getFullYear()} Fundación Núa. {t('footer.rights')}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
