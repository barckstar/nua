import { useLanguage } from '../context/LanguageContext';

interface PageProps {
    titleKey: string;
}

const GenericPage = ({ titleKey }: PageProps) => {
    const { t } = useLanguage();
    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <h1 className="text-4xl font-serif text-nua-green-dark">{t(titleKey)}</h1>
        </div>
    );
};

export default GenericPage;
