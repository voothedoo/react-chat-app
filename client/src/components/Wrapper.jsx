import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Wrapper = () => {
  return (
    <div className="flex flex-col mx-auto h-screen w-11/12 md:w-10/12 lg:w-8/12 text-neutral-300">
      <Nav />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Wrapper;
