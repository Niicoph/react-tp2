import { routes } from "../../routes/routes";
import ForwardIcon from "../../assets/Icons/forward.svg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Breadcrum({children}) {
  const { t } = useTranslation();
  return (
    <div className="w-full flex items-center gap-2 pb-4 bg-black-primary rounded-md p-4 text-white font-semibold text-sm">
      <Link to={routes.home}>
        <span className="flex gap-2">{t("home")}</span>
      </Link>
      <img src={ForwardIcon} alt="next" className="w-5 h-5" />
        {children}
    </div>
  );
}
