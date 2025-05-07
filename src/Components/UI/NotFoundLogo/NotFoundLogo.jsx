import { Link } from "react-router-dom";
import NotFound from "../../../assets/error.svg";

export default function LoadingLogo() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center flex-1">
      <img src={NotFound} alt="Not Found 404" className="w-64 h-64 ml-24" />
      <span className="text-4xl font-bold text-black-primary justify-center">
        ERROR 404
      </span>
      <Link to="/" className="p-4 text-white text-sm bg-[#1e2022] border border-[#252729] rounded-md hover:bg-black-secondary">
        Back to Home
      </Link>
    </div>
  );
}
