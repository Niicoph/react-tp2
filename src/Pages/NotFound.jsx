import { Link } from "react-router";
import { routes } from "../Routes/Routes.js";
import NotFundLogo from "../Components/UI/NotFoundLogo/NotFoundLogo.jsx";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import { useTranslation } from 'react-i18next'
import Container from "../Components/UI/Container.jsx";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <Container>
        <Header />
        <main className="flex flex-col items-center w-4/6 min-h-screen">
        <div className="flex flex-col flex-grow w-full pb-10 pt-5 fade-in">
          <div className="pb-10">
            <Link to={routes.home}>
              <span> {t('home')}</span>
            </Link>
            <span> / 404</span>
          </div>
          <div className="flex justify-center items-center w-full h-1/3">
            <NotFundLogo />
          </div>
        </div>
        </main>
        <Footer />
    </Container>
  );
}
