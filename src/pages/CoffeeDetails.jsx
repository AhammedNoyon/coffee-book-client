import { IoIosArrowRoundBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const loadedCoffee = useLoaderData();
  const { _id, name, supplier, category, chef, taste, details, photo } =
    loadedCoffee;
  return (
    <div className="bg-addCoffeeBg ">
      <Link
        to="/"
        className="flex items-center text-xl py-12 w-11/12 md:w-3/4 mx-auto"
      >
        <span className="text-2xl">
          <IoIosArrowRoundBack />
        </span>
        <span>back to home</span>
      </Link>
      <div className="w-11/12 md:w-3/4 mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h3 className="text-4xl font-bold font-rancho mb-4">
              Coffee Details
            </h3>
            <h5 className="font-raleway w-full md:w-3/6 mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              expedita quasi neque dolorum voluptatibus ipsam officia nulla
              placeat, distinctio tempora adipisci vel a sit omnis aperiam
              labore magni veniam laboriosam voluptatum deserunt illo debitis
            </h5>
          </div>
        </div>

        {/* coffee details  */}
        <div className="card card-side bg-aboutBg w-full max-w-2xl mx-auto mt-10">
          <figure>
            <img src={photo} alt="coffee" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-[#331A15] font-rancho text-4xl font-bold my-2">
              Niceties
            </h2>
            <p className="text-xl font-bold ">
              Name: <span className="text-gray-500">{name}</span>
            </p>
            <p className="text-xl font-bold ">
              Chef: <span className="text-gray-500">{chef}</span>
            </p>
            <p className="text-xl font-bold ">
              Supplier: <span className="text-gray-500">{supplier}</span>
            </p>
            <p className="text-xl font-bold">
              Taste: <span className="text-gray-500">{taste}</span>
            </p>
            <p className="text-xl font-bold ">
              Category: <span className="text-gray-500">{category}</span>
            </p>
            <p className="text-xl font-bold ">
              Details: <span className="text-gray-500">{details}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
