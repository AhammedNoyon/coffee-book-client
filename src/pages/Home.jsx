import About from "../components/About";
import AllCoffee from "../components/AllCoffee";
import Banner from "../components/Banner";
import InstaCoffee from "../components/InstaCoffee";

const Home = () => {
  return (
    <>
      <div>
        {/* Banner  */}
        <Banner></Banner>
      </div>
      <div className="bg-aboutBg">
        {/* about */}
        <About></About>
      </div>
      <div className="my-28 bg-allCoffeeBg bg-no-repeat ">
        {/* All coffee */}
        <AllCoffee></AllCoffee>
      </div>
      <div>
        {/* instagram  coffee*/}
        <InstaCoffee></InstaCoffee>
      </div>
    </>
  );
};

export default Home;
