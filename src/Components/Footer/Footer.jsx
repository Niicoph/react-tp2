import React from "react";
import SocialIcon from "../UI/SocialIcons";
// import './Footer.css';

export default function Footer() {
  return (
    <footer className="w-full h-16 flex justify-between items-center px-4 sticky bottom-0 bg-[#e3e8f0] z-10">
      <ul className="flex flex-row items-center gap-x-4">
        <li className="text-sm text-gray-700">Redes Sociales</li>
        <SocialIcon
          href="#"
          src="https://img.icons8.com/?size=100&id=84872&format=png&color=000000"
          alt="facebook"
        />
        <SocialIcon
          href="#"
          src="https://img.icons8.com/?size=100&id=84884&format=png&color=000000"
          alt="instagram"
        />
        <SocialIcon
          href="#"
          src="https://img.icons8.com/?size=100&id=ud9VVQzOPag8&format=png&color=000000"
          alt="x"
        />
      </ul>

      <div className="text-sm text-gray-700">
        <p> &copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
