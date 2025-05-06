import React from "react";
import SocialIcon from "../UI/SocialIcons";
import { useTranslation } from 'react-i18next'
// import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full h-16 flex justify-between items-center px-4 z-10 text-white bg-black-primary">
      <ul className="flex flex-row items-center gap-x-4">
        <li className="text-sm">{t('socials')}</li>
        <SocialIcon
          href="#"
          src="https://img.icons8.com/?size=100&id=84872&format=png&color=FFFFFF"
          alt="facebook"
        />
        <SocialIcon
          href="#"
          src="https://img.icons8.com/?size=100&id=84884&format=png&color=FFFFFF"
          alt="instagram"
        />
        <SocialIcon
          href="#"
          src="https://img.icons8.com/?size=100&id=ud9VVQzOPag8&format=png&color=FFFFFF"
          alt="x"
        />
      </ul>

      <div className="text-sm">
        <p> &copy; {new Date().getFullYear()} {t('rights')}</p>
      </div>
    </footer>
  );
}
