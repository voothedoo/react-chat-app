import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Chat from "./pages/Chat.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

import Wrapper from "./components/Wrapper.jsx";
import { AuthContext, AuthContextProvider } from "./context/AuthContext.jsx";

const PrivateRoute = ({ children }) => {
  const user = useContext(AuthContext);

  return user.user ? children : <Navigate to="/login" />;
};

const RedirectRoute = ({ children }) => {
  const user = useContext(AuthContext);
  return user.user ? <Navigate to="/" /> : children;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Chat />
          </PrivateRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <RedirectRoute>
            <Register />
          </RedirectRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <RedirectRoute>
            <Login />
          </RedirectRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
