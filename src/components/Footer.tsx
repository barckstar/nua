import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-nua-green-dark text-nua-cream py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
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
