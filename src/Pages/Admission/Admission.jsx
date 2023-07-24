import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import useColleges from "../../Components/useColleges";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const Admission = () => {
  const [colleges] = useColleges();
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
    <div className="my-16 container mx-auto">
      <div>
        <SectionTitle heading={"Select A college for admission"} />
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-fixed text-center table-lg mx-auto">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-2xl">Name</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {colleges.map((college, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{college?.collegeName}</td>
                  <td>
                    <Link
                      to={`/admission/${college?._id}`}
                      disabled={userSpecificAdmissionDetails ? true : false}
                      className={`btn bg-main text-white normal-case font-semibold hover:text-gray-500 hover:border-main ${
                        userSpecificAdmissionDetails
                          ? "btn-disabled opacity-25"
                          : ""
                      }`}
                    >
                      Get Admission
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admission;
