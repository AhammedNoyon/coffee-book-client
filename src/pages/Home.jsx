import About from "../components/About";
import Banner from "../components/Banner";

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
      <div>{/* product */}</div>
      <div>{/* instagram */}</div>
    </>
  );
};

export default Home;
