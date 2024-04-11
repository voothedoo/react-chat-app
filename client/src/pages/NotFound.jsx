import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col gap-3 w-fit mx-auto h-fit mt-36">
      <h1 className="text-6xl text-center">Error: 404</h1>
      <h2 className="text-center text-xl">Page not found</h2>
      <Link
        className="mt-10 text-center w-fit mx-auto py-2 px-4 text-xl rounded-lg bg-emerald-900 hover:bg-emerald-800 border border-emerald-800"
        to="/"
      >
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
