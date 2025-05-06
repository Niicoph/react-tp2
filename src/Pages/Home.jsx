import Header from "../Components/Header/Header";
import Main from "../Components/Main/Main";
import Footer from "../Components/Footer/Footer";
import Container from "../Components/UI/Container";

export default function Home() {
  return (
    <Container>
      <Header />
      <main className="flex flex-col items-center w-4/6 min-h-screen">
        <Main />
      </main>
        <Footer />
    </Container>
  );
}
