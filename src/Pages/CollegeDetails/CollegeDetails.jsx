import { useParams } from "react-router-dom";
import useColleges from "../../Components/useColleges";

const CollegeDetails = () => {
  const { id } = useParams();
  const [colleges] = useColleges();
  const filteredCollege = colleges.find((college) => college?._id === id);
  return (
    <div className="card lg:card-side my-20 container mx-auto">
      <figure className="lg:w-1/2">
        <img
          className="h-full"
          src={filteredCollege?.collegeImage}
          alt="collegeImage"
        />
      </figure>
      <div className="card-body lg:w-1/2">
        <h2 className="card-title text-2xl md:text-4xl font-bold">
          {filteredCollege?.collegeName}
        </h2>
        <p>
          <span className="font-bold">Admission Dates</span>:{" "}
          {filteredCollege?.admissionDates}
        </p>
        <p>
          <span className="font-bold">Admission Process:</span>:{" "}
          {filteredCollege?.collegeDetails?.admissionProcess}
        </p>
        <p>
          <span className="font-bold">Events:</span> {filteredCollege?.events}
        </p>
        <p>
          <span className="font-bold">Events details:</span>:{" "}
          {filteredCollege?.collegeDetails?.eventsDetails}
        </p>
        <p>
          <span className="font-bold">Research Topic</span>:{" "}
          {filteredCollege?.researchHistory}
        </p>
        <p>
          <span className="font-bold">Research Works details:</span>:{" "}
          {filteredCollege?.collegeDetails?.researchWorks}
        </p>
        <p>
          <span className="font-bold">Sports Achievement</span>:{" "}
          {filteredCollege?.sports}
        </p>
        <p>
          <span className="font-bold">Sports Process:</span>:{" "}
          {filteredCollege?.collegeDetails?.sportsCategories}
        </p>
      </div>
    </div>
  );
};

export default CollegeDetails;
