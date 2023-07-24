import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const UserDetails = () => {
  const { user, logOut, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://college-hub-server.vercel.app/users");
      return res.json();
    },
  });

  const currentUser = users.find((cr) => cr?.email == user?.email);

  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully logout",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const institution = e.target.institution.value;
    const address = e.target.address.value;
    const userData = { name, email, institution, address };
    console.log(userData);
    updateUserProfile(name, user?.photoURL)
      .then(() => {
        axios.patch("http://localhost:3000/users", userData).then((res) => {
          console.log(res);
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "User data updated",
              icon: "success",
            });
          }
          refetch();
          window.location.href = "/user";
        });
      })
      .catch((error) => {
        // An error occurred
        // ...
        console.log(error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-6 text-gray-700">User Details</h2>
        <figure className="my-5 flex justify-center items-center">
          <img
            className="h-40 rounded-full w-40"
            src={user?.photoURL}
            alt="user profile picture"
          />
        </figure>
        <p className="mb-2 text-gray-700">
          <span className="font-bold">Name: </span> {user?.displayName}
        </p>
        <p className="mb-2 text-gray-700">
          <span className="font-bold">Email: </span> {user?.email}
        </p>
        <p className="mb-2 text-gray-700">
          <span className="font-bold">Institution: </span>{" "}
          {currentUser?.institution}
        </p>
        <p className="mb-2 text-gray-700">
          <span className="font-bold">Address: </span> {currentUser?.address}
        </p>
        <div className="flex justify-center items-center mt-5 gap-5">
          <button
            onClick={handleLogOut}
            className="btn bg-main text-white normal-case font-semibold hover:text-gray-500 hover:border-main"
          >
            Log out
          </button>
          <button
            onClick={() => window.my_modal_5.showModal()}
            className="btn bg-white text-main normal-case font-semibold hover:text-white hover:border-main hover:bg-main"
          >
            Edit
          </button>
        </div>
      </div>
      {/* modal */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle bg-white"
      >
        <form onSubmit={handleSubmit} method="dialog" className="modal-box">
          <h3 className="font-bold text-lg text-center">Edit your data</h3>
          <div className="py-4 text-center">
            {/* Input fields */}
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-700 font-semibold">
                Name
              </label>
              <input
                defaultValue={user?.displayName}
                type="text"
                id="name"
                name="name"
                className="block w-full border rounded-lg shadow-sm focus:border-main focus:ring focus:ring-main"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-700 font-semibold">
                Email
              </label>
              <input
                defaultValue={user?.email}
                readOnly
                type="email"
                id="email"
                name="email"
                className="block w-full border rounded-lg shadow-sm focus:border-main focus:ring focus:ring-main"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="institution"
                className="text-gray-700 font-semibold"
              >
                Institution
              </label>
              <input
                defaultValue={currentUser?.institution}
                type="text"
                id="institution"
                name="institution"
                className="block w-full border rounded-lg shadow-sm focus:border-main focus:ring focus:ring-main"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="text-gray-700 font-semibold">
                Address
              </label>
              <input
                defaultValue={currentUser?.address}
                type="text"
                id="address"
                name="address"
                className="block w-full border rounded-lg shadow-sm focus:border-main focus:ring focus:ring-main"
              />
            </div>
            {/* Save button */}
          </div>
          <div className="flex justify-center mt-5 modal-action">
            <button
              type="submit"
              className="btn bg-main text-white font-semibold hover:text-gray-500 hover:border-main"
            >
              Save
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default UserDetails;
