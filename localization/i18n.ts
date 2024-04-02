import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import sp from './sp';
import vi from './vi';

const resources = { // list of languages
    en,
    sp,
    vi,
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: 'vi', // default language to use.
        fallbackLng: "vi",
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;