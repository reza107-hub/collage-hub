import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const { data: admissionDetails = [] } = useQuery({
    queryKey: ["admissionDetails"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/admission");
      return res.json();
    },
  });

  const userSpecificAdmissionDetails = admissionDetails.find(
    (admission) => user?.email === admission?.candidateEmail
  );
  return (
    <>
      <div className="my-16">
        <SectionTitle heading={"My College"} />
      </div>
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
        </div>
      </div>
    </>
  );
};

export default MyCollege;
