import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");

  const { signIn, passwordReset } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.state?.from || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Welcome Back ${result.user?.displayName}`,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(path);
      })
      .catch((error) =>
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error?.message}`,
          showConfirmButton: false,
          timer: 1500,
        })
      );
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    passwordReset(email)
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Password reset email sent!`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${error?.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-80 bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-xs italic">
              Email is required
            </span>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-500 text-xs italic">
              Password is required
            </span>
          )}
        </div>
        <div className="flex flex-col items-center justify-between">
          <button
            className="btn btn-outline border-main  font-semibold hover:bg-main hover:text-white normal-case w-full"
            type="submit"
          >
            Sign In
          </button>
          <button
            onClick={handleResetPassword}
            className="mt-5 justify-start inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </button>
        </div>
        <div className="mt-4">
          <div className="flex justify-center items-center">
            <div className="border-b w-1/5 lg:w-1/4"></div>
            <span className="text-xs text-gray-500 uppercase px-2">
              or connect with
            </span>
            <div className="border-b w-1/5 lg:w-1/4"></div>
          </div>
          <div className="flex mt-4 justify-center">
            <button className="rounded-full py-2 px-4 mx-2">
              <FaFacebookF />
            </button>
            <button className="rounded-full py-2 px-4 mx-2">
              <FaGoogle />
            </button>
            <button className="rounded-full py-2 px-4 mx-2">
              <FaGithub />
            </button>
          </div>
        </div>
        <p className="text-xs mt-5">
          New Here?{" "}
          <Link className="text-red-600 link-hover" to={"/register"}>
            Please Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
