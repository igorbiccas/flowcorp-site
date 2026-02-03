
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'pt';

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: typeof translations['pt'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // Determine default language based on URL
    const getDefaultLanguage = (): Language => {
        const url = new URL(window.location.href);
        const path = url.pathname.toLowerCase();
        const search = url.searchParams.get('page')?.toLowerCase();
        const hash = url.hash.toLowerCase().replace(/^#\/?/, '');

        const isEnglishPage =
            path.includes('selfbrain') || search === 'selfbrain' || hash === 'selfbrain' ||
            path.includes('gaialink') || search === 'gaialink' || hash === 'gaialink';

        return isEnglishPage ? 'en' : 'pt';
    };

    const [language, setLanguage] = useState<Language>(getDefaultLanguage());

    useEffect(() => {
        // We set the language once on load based on the page
        const initialLang = getDefaultLanguage();
        setLanguage(initialLang);
        localStorage.setItem('flowcorp-language', initialLang);
    }, []);

    const toggleLanguage = () => {
        setLanguage((prev) => {
            const newLang = prev === 'en' ? 'pt' : 'en';
            localStorage.setItem('flowcorp-language', newLang);
            return newLang;
        });
    };

    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
