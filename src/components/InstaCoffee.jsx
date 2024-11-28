import instagramCoffee0 from "../assets/images/cups/Rectangle 9.png";
import instagramCoffee1 from "../assets/images/cups/Rectangle 10.png";
import instagramCoffee2 from "../assets/images/cups/Rectangle 11.png";
import instagramCoffee3 from "../assets/images/cups/Rectangle 12.png";
import instagramCoffee4 from "../assets/images/cups/Rectangle 13.png";
import instagramCoffee5 from "../assets/images/cups/Rectangle 14.png";
import instagramCoffee6 from "../assets/images/cups/Rectangle 15.png";
import instagramCoffee7 from "../assets/images/cups/Rectangle 16.png";
const InstaCoffee = () => {
  return (
    <div className="w-11/12 md:w-3/4 mx-auto">
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <h5 className="text-xl">Follow Us Now</h5>
          <h3 className="text-3xl font-bold font-rancho">
            Follow on Instagram
          </h3>
        </div>
        {/* coffee img  container*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          <div>
            <img src={instagramCoffee0} alt="coffee" />
          </div>
          <div>
            <img src={instagramCoffee1} alt="coffee" />
          </div>
          <div>
            <img src={instagramCoffee2} alt="coffee" />
          </div>
          <div>
            <img src={instagramCoffee3} alt="coffee" />
          </div>
          <div>
            <img src={instagramCoffee4} alt="coffee" />
          </div>
          <div>
            <img src={instagramCoffee5} alt="coffee" />
          </div>
          <div>
            <img src={instagramCoffee6} alt="coffee" />
          </div>
          <div>
            <img src={instagramCoffee7} alt="coffee" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstaCoffee;
