import aboutImg1 from "../assets/images/icons/1.png";
import aboutImg2 from "../assets/images/icons/2.png";
import aboutImg3 from "../assets/images/icons/3.png";
import aboutImg4 from "../assets/images/icons/4.png";
const About = () => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto flex flex-col md:flex-row">
      <div className="card">
        <div className="card-body">
          <div className="h-10 w-10">
            <img className="w-full mx-auto" src={aboutImg1} alt="" />
          </div>
          <h2 className="card-title text-3xl font-rancho ">Awesome Aroma</h2>
          <p className="font-raleway">
            If a dog chews shoes whose shoes does he choose?
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="h-10 w-10">
            <img className="w-full mx-auto" src={aboutImg2} alt="" />
          </div>
          <h2 className="card-title font-rancho text-3xl">High Quality</h2>
          <p className="font-raleway">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="h-10 w-10">
            <img className="w-full mx-auto" src={aboutImg3} alt="" />
          </div>
          <h2 className="card-title font-rancho text-3xl">Pure Grades</h2>
          <p className="font-raleway">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="h-10 w-10">
            <img className="w-full mx-auto" src={aboutImg4} alt="" />
          </div>
          <h2 className="card-title font-rancho text-3xl">Proper Roasting</h2>
          <p className="font-raleway">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
