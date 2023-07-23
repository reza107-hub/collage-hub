import { useEffect, useState, useRef } from "react";
import CollegeCard from "../../../Components/CollegeCard";
import SectionTitle from "../../../Components/SectionTitle";
import Aos from "aos";
import useColleges from "../../../Components/useColleges";

const FeaturedCollege = () => {
  const [colleges] = useColleges();
  const [searchQuery, setSearchQuery] = useState("");
  const collegeCardRef = useRef(null); // Create a ref for the college card section

  const handleSearch = () => {
    // Scroll to the college card section when the search button is clicked
    collegeCardRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredColleges = colleges.filter((college) =>
    college.collegeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-32 container mx-auto">
      <div data-aos="fade-up" data-aos-delay="300">
        <SectionTitle
          heading={"Featured Colleges"}
          subheading={"Colleges that you will like most"}
        />
      </div>
      {/* search field */}
      <div className="form-control flex">
        <div className="input-group justify-end absolute top-20 -left-16">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered border-white text-white"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button
            onClick={handleSearch}
            className="btn btn-square border-white text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* ................... */}
      <div ref={collegeCardRef} className="mt-20 space-y-6">
        {filteredColleges
          .slice(0, filteredColleges.length > 3 ? 3 : filteredColleges.length)
          .map((college) => (
            <CollegeCard key={college._id} college={college} />
          ))}
      </div>
    </div>
  );
};

export default FeaturedCollege;
