import React from "react";
import SocialIcon from "../UI/SocialIcons";
import { useTranslation } from "react-i18next";
// import './Footer.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full h-16 flex justify-center items-center px-4 z-10 text-white bg-black-primary">
      <div className="w-4/6 flex justify-between items-center">
        <ul className="flex flex-row items-center gap-x-4">
          {/* <li className="text-sm ">{t("socials")}</li> */}
          <div className="flex flex-col justify-center items-center text-white text-xs">
            <SocialIcon
              href="https://github.com/jovirecast"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
              alt="github"
            />
            <span> José </span>
          </div>
          <div className="flex flex-col justify-center items-center text-white text-xs">
            <SocialIcon
              href="https://github.com/Niicoph"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
              alt="github"
            />
            <span> Nico </span>
          </div>
          <div className="flex flex-col justify-center items-center text-white text-xs">
            <SocialIcon
              href="https://github.com/Franku88"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/github.png"
              alt="github"
            />
            <span> Franco </span>
          </div>
        </ul>

        <div className="text-sm">
          <p>
            <span>{t("project")} </span>
            <a href="https://github.com/Niicoph/react-tp2" target="_blank" className="hover:border-b hover:border-white">
              github/react-tp2
            </a>
          </p>
        </div>

        <div className="text-sm">
          <p>
            {" "}
            &copy; {new Date().getFullYear()} {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
