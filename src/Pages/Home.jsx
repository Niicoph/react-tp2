import { useState } from "react";
import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";

export default function Home() {  
  const [selectedWeapon, setSelectedWeapon] = useState({});

  return (
    <div className="flex justify-center items-center w-full">
      <main className="flex flex-col items-center w-4/6 min-h-screen">
        <Header          
          selectedWeapon={selectedWeapon}
          setSelectedWeapon={setSelectedWeapon}
        />
        <Main selectedWeapon={selectedWeapon} />
        <Footer />
      </main>
    </div>
  );
}
