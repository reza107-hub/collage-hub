import { Link } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import useColleges from "../../Components/useColleges";

const Admission = () => {
    const [colleges] = useColleges()
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
                    <Link to={`/admission/${college?._id}`}>
                      <button className="btn bg-main text-white normal-case font-semibold hover:text-gray-500 hover:border-main">Get Admission</button>
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
