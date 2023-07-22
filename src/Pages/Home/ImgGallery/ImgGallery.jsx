import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import Aos from "aos";

const ImgGallery = () => {
  const images = [
    "https://i.postimg.cc/wj12V7YY/image.png",
    "https://i.postimg.cc/pTqdGVKK/image.png",
    "https://i.postimg.cc/tCncDSjg/image.png",
    "https://i.postimg.cc/G3g0XTTX/image.png",
    "https://i.postimg.cc/KvbfGSQM/image.png",
    "https://i.postimg.cc/tgPmMC7s/image.png",
    "https://i.postimg.cc/7Pgw2wVY/students-fellow-graduates-group-college-graduates-standing-cap-gown-holding-their-diplomas-590464-74.jpg",
    "https://i.postimg.cc/j2KVXnXq/Multi-ethnic-group-college-graduates-on-campus.jpg",
    "https://i.postimg.cc/90nDLXyr/image.png",
  ];
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mt-32 container mx-auto">
      <div data-aos="fade-up" data-aos-delay="300">
        <SectionTitle
          heading={"Featured Gallery"}
          subheading={"Some images of colleges students"}
        />
      </div>
      <div className="mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {images.map((image, index) => {
            return (
              <img
                data-aos="zoom-in-up"
                data-aos-delay="500"
                key={index}
                src={image}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImgGallery;
