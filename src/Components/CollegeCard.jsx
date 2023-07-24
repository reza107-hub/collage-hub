import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const CollegeCard = ({ college }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      className="flex w-[90%] flex-col mx-auto md:flex-row justify-center items-center md:w-full bg-[#f6f8f9] rounded-lg"
    >
      <div className="flex-1 p-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="p-2 bg-[#f6f8f9] shadow-lg rounded-lg md:w-72">
            <div className="overflow-hidden">
              <img
                className="w-72 h-52 object-cover max-w-full rounded-lg transform transition-transform duration-700 hover:scale-110"
                src={college?.collegeImage}
                alt="Image"
              />
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <span className="border border-solid border-main text-gray-500 px-2 py-1 rounded-full text-sm">
                {college?.admissionDates}
              </span>
            </div>
            <h4 className="text-3xl font-bold text-gray-600">
              {college?.collegeName}
            </h4>
            <h6 className="text-lg text-gray-600">Events: {college?.events}</h6>
            <h6 className="text-lg text-gray-600">
              Research history: {college?.researchHistory}
            </h6>
            <h6 className="text-lg text-gray-600">Sports: {college?.sports}</h6>
            {college?.review ? (
              <h6 className="text-lg text-gray-600 flex gap-3">
                Review:{" "}
                <Rating
                  style={{ maxWidth: 120 }}
                  value={college?.review}
                  readOnly
                />
              </h6>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/college-details/${college?._id}`}>
          <button className="btn bg-main text-white normal-case font-semibold hover:btn-outline hover:text-gray-500 hover:border-white">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CollegeCard;
