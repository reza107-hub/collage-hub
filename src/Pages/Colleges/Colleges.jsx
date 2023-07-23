import CollegeCard from "../../Components/CollegeCard";
import useColleges from "../../Components/useColleges";

const Colleges = () => {
    const [colleges] = useColleges()
    return (
      <div className="my-20 space-y-6 container mx-auto">
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
    );
};

export default Colleges;