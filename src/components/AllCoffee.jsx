import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleCoffee from "./SingleCoffee";
import { FaCoffee } from "react-icons/fa";

const AllCoffee = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => {
        console.log("this is read coffee in mongodb", data);
        setCoffees(data);
      });
  }, []);
  return (
    <div className="w-11/12 md:w-3/4 mx-auto ">
      <div className="text-center space-y-2">
        <h5 className="text-xl">--- Sip & Savor ---</h5>
        <h3 className="text-5xl font-bold font-rancho">Our Popular Products</h3>
        <Link to="/addCoffee">
          <button className="bg-bannerBtn py-3 px-5  text-2xl text-black font-rancho flex gap-2 mx-auto rounded-lg border-4 items-center mt-3">
            <span>Add Coffee</span>{" "}
            <span>
              <FaCoffee></FaCoffee>
            </span>
          </button>
        </Link>
      </div>
      <div className="text-center grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        {coffees.map((coffee) => (
          <SingleCoffee
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
            coffee={coffee}
          ></SingleCoffee>
        ))}
      </div>
    </div>
  );
};

export default AllCoffee;
