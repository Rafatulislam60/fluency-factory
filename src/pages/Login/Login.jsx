import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Fluency Factory | Login</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#202C45] text-white">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Log In</h1>
            <p className="text-md text-white">Sign in to access your account</p>
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-white text-lg"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className="px-6 text-lg text-center text-white">
            Don't have an account yet?{" "}
            <Link
              to="/signup"
              className="hover:underline hover:text-orange-400 text-white"
            >
              Sign up
            </Link>
            .
          </p>
          {/* <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
          onClick={handleGoogleSignIn}
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Login;
