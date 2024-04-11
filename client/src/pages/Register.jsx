const Register = () => {
  return (
    <>
      <>
        <form
          action=""
          className="w-fit mx-auto mt-32 flex flex-col items-center gap-5 bg-neutral-700 px-8 py-8 rounded-xl border border-neutral-600"
        >
          <h1 className="text-center text-4xl ">Register</h1>
          <label className="flex">
            <input
              className="w-96 mx-auto border text-neutral-900 border-neutral-400 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
              type="text"
              placeholder="Name"
              required
            />
          </label>
          <label className="flex">
            <input
              className="w-96 mx-auto border text-neutral-900 border-neutral-400 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
              type="email"
              placeholder="Email"
              required
            />
          </label>
          <label className="flex">
            <input
              className="w-96 mx-auto border text-neutral-900 border-neutral-400 rounded-lg px-4 py-2 focus:outline-none focus:border-emerald-400"
              type="password"
              placeholder="Password"
              required
            />
          </label>
          <button className="w-96 h-11 text-xl rounded-lg bg-emerald-900 hover:bg-emerald-800 border border-emerald-800">
            Sign Up
          </button>
          <p className="w-96 py-2 px-4 text-center text-sm  text-red-900 border border-red-400 rounded-lg bg-red-300">
            An error occured
          </p>
        </form>
      </>
    </>
  );
};

export default Register;
