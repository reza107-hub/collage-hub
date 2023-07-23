import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

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
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <div className="w-80 bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
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
        <div
          onClick={handleLogOut}
          className="flex justify-center items-center mt-5"
        >
          <button className="btn bg-main text-white normal-case font-semibold hover:text-gray-500 hover:border-main">
            Log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
