import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { saveUser } from "../../api/auth";
import { AuthContext } from "../../providers/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      reset();
      if (loggedUser) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      saveUser(result.user);
      navigate("/");
    });

    console.log(data);
  };

  return (
    <>
      <Helmet>
        <title>Fluency Factory | Sign up</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-screen my-10">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#202C45] text-white">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign up</h1>
            <p className="text-md text-white">Create a new account account.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                placeholder="name"
                className="input input-bordered text-black"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email"
                className="input input-bordered text-black"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="input input-bordered text-black"
              />

              <button
                className=" bg-gray-700 rounded mt-2 px-3 py-2 mx-auto"
                onClick={() => setShowPassword(!showPassword)}
              >
                <BiShow size={32} />
              </button>

              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one upper case, one lower case, one number
                  and one special character
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white text-lg">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="input input-bordered text-black"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>
            <div className="form-control mt-3">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign up"
              />
            </div>
          </form>
          <SocialLogin></SocialLogin>
          <p className="px-6 text-lg text-center text-white">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-orange-400 text-white"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
