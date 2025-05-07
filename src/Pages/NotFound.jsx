import NotFundLogo from "../Components/UI/NotFoundLogo/NotFoundLogo.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Container from "../Components/UI/Container.jsx";

export default function NotFound() {
  return (
    <Container>
      <Header />
      <main className="flex flex-col items-center w-4/6 flex-1">
        <NotFundLogo />
      </main>
      <Footer />
    </Container>
  );
}
