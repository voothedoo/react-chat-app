import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="mt-auto pb-2 pt-8 text-center">
      <h1>
        <Link className="main-color font-mono" to="/">
          ChatApp{" "}
        </Link>
        by {"  "}
        <a
          className="main-color"
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
