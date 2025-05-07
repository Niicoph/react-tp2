import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'

const languages = [
    { code: 'en', name: 'English', flag: '/src/assets/Icons/en-UK.png' },
    { code: 'es', name: 'Español', flag: '/src/assets/Icons/es-ES.png'},
  ];

  export default function LanguageSelector() {
    const { i18n } = useTranslation();
    const [currentLangCode, setCurrentLangCode] = useState(localStorage.getItem('language') || i18n.language);

    useEffect(() => {
      i18n.changeLanguage(currentLangCode);
      localStorage.setItem('language', currentLangCode);
    }, [currentLangCode, i18n]);

    const currentLang = languages.find((lang) => lang.code === currentLangCode) || languages[0];

    const handleChange = (e) => {
      setCurrentLangCode(e.target.value);
    };

    return (
      <div className="w-fit h-16 flex items-center ">

        <img className="w-6 h-6 rounded-full mr-2" src={currentLang.flag} alt={currentLang.code} />

        <select value={currentLangCode} onChange={handleChange} className='bg-black-primary '>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
