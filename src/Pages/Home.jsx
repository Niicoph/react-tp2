import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import Background from "../assets/backgrounds/bg-main.png";

export default function Home() {
  return (
    <div
      className="flex flex-col justify-center items-center w-full min-h-screen"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <Header />
      <main className="flex flex-col items-center w-4/6 min-h-screen">
        <Main />
        <Footer />
      </main>
    </div>
  );
}
