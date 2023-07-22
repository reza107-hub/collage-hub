const Banner = () => {
    return (
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.postimg.cc/Bv2qs6GW/banner.jpg)",
          animation: `slidein 15s linear infinite`,
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">
              Unlock Your Future at Top Colleges
            </h1>
            <p className="mb-5 text-white">
              Unleash Your Potential in the World of Higher Education. Find Your
              Perfect College Match, Reserve Facilities, and Stay Informed about
              Admission Dates, Events, and Research Opportunities. Experience
              College Life Like Never Before.
            </p>
            <button className="btn btn-outline border-main text-white font-semibold hover:bg-white hover:border-black normal-case">Explore</button>
          </div>
        </div>
        <style>{`
          @keyframes slidein {
            0% {
              background-position: center;
            }
            50% {
              background-position: top;
            }
            100% {
              background-position: center;
            }
          }
        `}</style>
      </div>
    );
};

export default Banner;