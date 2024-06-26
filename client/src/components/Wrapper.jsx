import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { AuthContext } from "../context/AuthContext";
import { ChatContextProvider } from "../context/ChatContext";
import { useContext } from "react";

const Wrapper = () => {
  const user = useContext(AuthContext);
  return (
    <div className="wrapper flex flex-col mx-auto h-screen w-11/12 text-neutral-300">
      <Nav />
      <ChatContextProvider user={user.user}>
        <main className="w-full h-screen">
          <Outlet />
        </main>
      </ChatContextProvider>
      <Footer />
    </div>
  );
};

export default Wrapper;
