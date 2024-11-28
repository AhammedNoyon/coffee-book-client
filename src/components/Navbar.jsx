import navTea from "../assets/images/more/logo1.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar text-white">
        {/* navbar start */}
        <div className="navbar-start"></div>
        {/* navbar center */}
        <div className="navbar-center flex items-center gap-4 py-3 ">
          <div className="h-[90px] w-[75px]">
            <img className="w-full object-cover" src={navTea} alt="" />
          </div>
          <h3 className="font-rancho text-6xl ">Espresso Emporium</h3>
        </div>
        {/* navbar end */}
        <div className="navbar-end"></div>
      </div>
    </div>
  );
};

export default Navbar;
