const Banner = () => {
  return (
    <div className="hero bg-bannerBg bg-no-repeat object-cover">
      <div className="bg-opacity-60"></div>
      <div className="hero-content mt-[188px] lg:mt-[288px] mb-[188px] lg:mb-[288px] text-neutral-content text-center">
        <div className="max-w-2xl lg:ml-56 ">
          <h1 className="mb-5 text-5xl font-bold font-rancho">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="mb-5 font-raleway">
            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="bg-bannerBtn py-3 px-5  text-2xl text-black font-rancho">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
