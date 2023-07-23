import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./Feedback.css";
import { Autoplay, Navigation } from "swiper/modules";
import SectionTitle from "../../../Components/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import Aos from "aos";

const Feedback = () => {
  const { data: feedbackData = [] } = useQuery({
    queryKey: ["feedbackData"],
    queryFn: async () => {
      const res = await fetch("https://college-hub-server.vercel.app/feedback");
      return res.json();
    },
  });
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="container mx-auto mt-32">
      <div data-aos="fade-up" data-aos-delay="300" className="mb-16">
        <SectionTitle
          heading={"What Our Students Says"}
          subheading={"Reviews from some students"}
        />
      </div>
      <div data-aos="fade-up" data-aos-delay="300" className="mb-16">
        <Swiper
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation]}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={24}
          className="mySwiper"
        >
          {feedbackData.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md p-10 h-80">
                <div className="flex justify-between items-center">
                  <div className="flex items-start gap-5">
                    <img
                      className="rounded-full w-16 h-16"
                      src={feedback.image}
                      alt="Profile Image"
                    />
                    <div className="text-left">
                      <h2 className="text-xl font-bold">{feedback.name}</h2>
                      <p className="text-gray-500">{feedback.profession}</p>
                    </div>
                  </div>
                  <div>
                    <img src="quotation.svg" alt="" />
                  </div>
                </div>
                <div className="py-4">
                  <p className="text-gray-700 text-left">{feedback.message}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
