import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>Error: 404</h1>
      <h2>Page not found</h2>
      <Link to="/">Go home</Link>
    </>
  );
};

export default NotFound;
