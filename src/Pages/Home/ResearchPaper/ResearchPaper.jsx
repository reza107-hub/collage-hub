import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";

const ResearchPaper = () => {
  const { data: researchPaper } = useQuery({
    queryKey: ["researchPaper"],
    queryFn: async () => {
      const res = await fetch(
        "https://college-hub-server.vercel.app/research-paper"
      );
      return res.json();
    },
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="mt-32 container mx-auto">
      <div data-aos="fade-up" data-aos-delay="300">
        <SectionTitle
          heading={"Top Research"}
          subheading={"Top Research from Top Colleges"}
        />
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-3">
        {researchPaper?.map((paper) => (
          <>
            <div
              data-aos="zoom-in-down"
              data-aos-delay="500"
              className="card h-[60%] bg-base-100 shadow-xl rounded-lg image-full"
            >
              <figure>
                <img
                  src={paper?.img}
                  alt="Research"
                  className="rounded-lg w-full"
                />
              </figure>
              <div className="card-body bg-black bg-opacity-70">
                <h2 className="card-title text-white">{paper?.name}</h2>
                <div className="card-actions justify-end">
                  <Link to={paper?.link}>
                    <button className="btn bg-main text-white normal-case font-semibold hover:text-white hover:border-main">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ResearchPaper;
