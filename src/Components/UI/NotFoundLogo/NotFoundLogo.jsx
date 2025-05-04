import NotFound from "../../../assets/error.svg";

export default function LoadingLogo() {
  return (
    <div className="h-1/3 w-1/3 flex flex-col justify-center items-center bg-white">
      <span className="text-4xl font-bold text-gray-800 justify-center m-10">
        ERROR 404
      </span>
      <img src={NotFound} alt="Not Found 404"></img>

      <p className="italic text-gray-600 justify-center mt-10">
        I am the one and only
      </p>
    </div>
  );
}
