import { useEffect, useState, useRef } from "react";
import CollegeCard from "../../../Components/CollegeCard";

const FeaturedCollege = () => {
  const [colleges, setColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const collegeCardRef = useRef(null); // Create a ref for the college card section

  const handleSearch = () => {
    // Scroll to the college card section when the search button is clicked
    collegeCardRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetch("https://college-hub-server.vercel.app/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredColleges = colleges.filter((college) =>
    college.collegeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-32 container mx-auto">
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
        {" "}
        {/* Assign the ref to the college card section */}
        {filteredColleges.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCollege;
