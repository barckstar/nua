import { useEffect, useState } from 'react';
import LightGallery from 'lightgallery/react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

// Import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Import gallery data
import galleryData from '../data/gallery.json';

interface GalleryImage {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const Gallery = () => {
    const { t } = useLanguage();
    const [images, setImages] = useState<GalleryImage[]>([]);

    useEffect(() => {
        // In a real scenario, this might fetch from an API, but here we import the JSON directly.
        // We cast it to ensure type safety if the JSON is empty or has different structure initially.
        setImages(galleryData as GalleryImage[]);
    }, []);

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
                        {t('nav.gallery')}
                    </h1>
                    <p className="text-lg text-nua-brown max-w-2xl mx-auto">
                        Explora la belleza de los bosques de Costa Rica a través de nuestra lente.
                    </p>
                </motion.div>

                {images.length === 0 ? (
                    <div className="text-center text-nua-brown/60 py-20">
                        <p>No hay imágenes disponibles en este momento.</p>
                        <p className="text-sm mt-2">Ejecuta "npm run update-gallery" después de agregar imágenes a public/gallery.</p>
                    </div>
                ) : (
                    <LightGallery
                        speed={500}
                        plugins={[lgThumbnail, lgZoom]}
                        elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {images.map((image, index) => (
                            <a
                                key={index}
                                href={image.src}
                                className="block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 group"
                                data-src={image.src}
                                data-sub-html={`<h4>${image.alt}</h4>`}
                            >
                                <div className="relative overflow-hidden aspect-[4/3]">
                                    <img
                                        alt={image.alt}
                                        src={image.src}
                                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-nua-green-dark/0 group-hover:bg-nua-green-dark/20 transition-colors duration-300" />
                                </div>
                            </a>
                        ))}
                    </LightGallery>
                )}
            </div>
        </div>
    );
};

export default Gallery;
