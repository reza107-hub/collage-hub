import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import axios from "axios";
import Swal from "sweetalert2";
import useColleges from "../../Components/useColleges";

const MyCollege = () => {
  const [rating, setRating] = useState(0);
  const { user } = useContext(AuthContext);
  const [colleges] = useColleges();
  const { data: admissionDetails = [] } = useQuery({
    queryKey: ["admissionDetails"],
    queryFn: async () => {
      const res = await fetch(
        "https://college-hub-server.vercel.app/admission"
      );
      return res.json();
    },
  });

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://college-hub-server.vercel.app/users");
      return res.json();
    },
  });

  const currentUser = users.find((cr) => cr?.email == user?.email);

  const userSpecificAdmissionDetails = admissionDetails.find(
    (admission) => user?.email === admission?.candidateEmail
  );

  const getCollage = colleges.find(
    (college) => college?._id === userSpecificAdmissionDetails?.collegeId
  );

  const handleReview = () => {
    axios
      .patch(
        `https://college-hub-server.vercel.app/college/${userSpecificAdmissionDetails?.collegeId}?rating=${rating}&email=${currentUser?.email}`
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: "Review Done",
            icon: "success",
          });
        }
        refetch();
      });
  };
  const review = parseInt(getCollage?.review);
  return (
    <>
      <div className="my-16">
        <SectionTitle heading={"My College"} />
      </div>
      {userSpecificAdmissionDetails ? (
        <>
          <div className="mb-16 container mx-auto flex justify-center">
            <div className="mt-10">
              <div className="flex items-center">
                <img
                  className="w-16 h-16 rounded-full mr-4"
                  src={userSpecificAdmissionDetails?.image}
                  alt="Candidate Image"
                />
                <div>
                  <p className="font-bold">Candidate Name:</p>
                  <p>{userSpecificAdmissionDetails?.candidateName}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-bold">Subject:</p>
                <p>{userSpecificAdmissionDetails?.subject}</p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Candidate Email:</p>
                <p>{userSpecificAdmissionDetails?.candidateEmail}</p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Candidate Phone number:</p>
                <p>{userSpecificAdmissionDetails?.candidatePhone}</p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Address:</p>
                <p>{userSpecificAdmissionDetails?.address}</p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Date of Birth:</p>
                <p>{userSpecificAdmissionDetails?.dob}</p>
              </div>
              <div className="mt-4">
                <p className="font-bold">Review:</p>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={currentUser?.review ? review : rating}
                  onChange={setRating}
                  isRequired
                  readOnly={currentUser?.review ? true : false}
                />{" "}
                <button
                  disabled={currentUser?.review ? true : false}
                  onClick={handleReview}
                  className="mt-4 btn bg-main text-white normal-case font-semibold hover:text-gray-500 hover:border-main"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <p className="text-center font-bold text-2xl">
            You did not get admission yet.
          </p>
        </>
      )}
    </>
  );
};

export default MyCollege;
