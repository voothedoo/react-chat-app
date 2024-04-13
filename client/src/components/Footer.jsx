import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-auto pb-2 pt-8 text-center text-xs">
      <h1>
        <Link
          className="main-color font-mono opacity-60 hover:opacity-100"
          to="/"
        >
          ChatApp
        </Link>
        <span className="opacity-60"> by </span>
        <a
          className="main-color opacity-60 hover:opacity-100"
          href="https://github.com/voothedoo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alexandru Munteanu
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
