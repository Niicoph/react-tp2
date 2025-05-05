// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLang = localStorage.getItem('language') || 'en';

// Traducciones de ejemplo
const resources = {
  en: {
    translation: {
      welcome: "Welcome to !ECO!",
      prev: "Prev",
      next: "Next",
      search: "Search by name...",
      clear: "Clear",
      rights: "All rights reserved.",
      socials: "Social Networks",
      noskins: "No skins found",

    },
  },
  es: {
    translation: {
      welcome: "¡Bienvenido a !ECO!",
      prev: "Anterior",
      next: "Siguiente",
      search: "Buscar por nombre...",
      clear: "Limpiar",
      rights: "Todos los derechos reservados.",
      socials: "Redes Sociales",
      noskins: "No se encontraron skins",
    },
  },
};

i18n
  .use(initReactI18next) // conecta con React
  .init({
    resources,
    lng: savedLang, // idioma por defecto
    fallbackLng: "en", // idioma de respaldo
    interpolation: {
      escapeValue: false, // React ya protege contra XSS
    },
  });

export default i18n;