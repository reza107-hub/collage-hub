import { useForm } from "react-hook-form";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleImage = async (data) => {
    const formData = new FormData();
    formData.append("image", data);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb}`,
        {
          method: "POST",
          body: formData,
        }
      );
      const imgResponse = await res.json();
      return imgResponse.data.url;
    } catch (error) {
      return {};
    }
  };

  const onSubmit = async (data) => {
    const imgResponse = await handleImage(data.photo[0]);
    data.photoURL = imgResponse;
    console.log(data);
    const user = {
      name: data.name,
      email: data.email,
      image: data.photoURL,
      address: data.address,
    };
    createUser(data.email, data.password)
      .then((result) => {
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            axios
              .post("https://college-hub-server.vercel.app/users", user)
              .then((res) => {
                if (res.data.insertedId) {
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `Successfully account created`,
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
            console.log(result.user);
            window.location.href = "/";
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              position: "center",
              icon: "error",
              title: `${error?.message}`,
              showConfirmButton: false,
              timer: 1500,
            });
          });
      })
      .catch((error) => {
        console.log(error);
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
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("name")}
          />
          {errors.email && (
            <span className="text-red-500 text-xs italic">
              Name is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photo"
          >
            Photo
          </label>
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("photo")}
          />
          {errors.photo && (
            <span className="text-red-500 text-xs italic">
              photo is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
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

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("address")}
          />
          {errors.address && (
            <span className="text-red-500 text-xs italic">
              photo is required
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
            Sign Up
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
      </form>
    </div>
  );
};

export default Register;
