import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "ldrs/ring";

const Login = () => {
  const { loginInfo, updateLoginInfo, loginUser, loginError, isLoginLoading } =
    useContext(AuthContext);
  return (
    <>
      <form
        onSubmit={loginUser}
        action=""
        className="w-fit mx-auto mt-32 flex flex-col items-center gap-5 bg-neutral-700 px-8 py-8 rounded-xl border border-neutral-600"
      >
        <h1 className="text-center text-4xl ">Login</h1>

        <label className="flex">
          <input
            className="w-96 mx-auto border text-neutral-900 border-neutral-400 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400 focus:bg-green-100"
            type="email"
            placeholder="Email"
            onChange={(e) =>
              updateLoginInfo({ ...loginInfo, email: e.target.value })
            }
          />
        </label>
        <label className="flex">
          <input
            className="w-96 mx-auto border text-neutral-900 border-neutral-400 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400 focus:bg-green-100"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              updateLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
        </label>
        <button className="w-96 h-11 text-xl rounded-lg bg-emerald-900 hover:bg-emerald-800 border border-emerald-800 flex flex-row justify-center items-center">
          {isLoginLoading ? (
            <>
              <l-ring size={18} color="#00df8e"></l-ring>
              <span className="pl-3">Signing in</span>
            </>
          ) : (
            <span>Sign in</span>
          )}
        </button>

        {loginError?.error && (
          <p className="w-96 py-2 px-4 text-center text-sm  text-red-900 border border-red-400 rounded-lg bg-red-300">
            {loginError?.message.error}
          </p>
        )}
        <p>
          Don&apos;t have an account?{" "}
          <Link className="main-color" to="/register">
            Register
          </Link>
        </p>
      </form>
    </>
  );
};

export default Login;
