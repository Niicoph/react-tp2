import { useTranslation } from 'react-i18next';

const languages = [
    { code: 'en', name: 'English', flag: '/src/assets/Icons/en-UK.png' },
    { code: 'es', name: 'Español', flag: '/src/assets/Icons/es-ES.png'},
  ];

export default function LanguageSelector() { 
    
    const { i18n, t } = useTranslation(); // ← usamos t para que el componente reaccione a cambios

    const currentLang = languages.find((lang) => lang.code === i18n.language) || languages[0];
  
    const handleChange = (e) => {
      const selectedLang = e.target.value;
      i18n.changeLanguage(selectedLang);
      localStorage.setItem('language', selectedLang);
    };


    return(
        <div className="w-full h-16 flex items-center border-b border-dotted border-slate-300 sticky top-0 z-10 bg-opacity-90 backdrop-blur-sm px-2">
            <img className="w-6 h-6 rounded-full mr-2" src={currentLang.flag} alt={currentLang.code} />
            <select value={t.language} onChange={handleChange}>
            {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                    {lang.name}
                </option>
            ))}
            </select>
        </div>
    );
}