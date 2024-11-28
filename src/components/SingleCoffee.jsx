import { FaRegEye } from "react-icons/fa";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleCoffee = (props = {}) => {
  const { coffee } = props || {};
  console.log(coffee);
  const { name, supplier, category, chef, taste, details, photo } = coffee;
  return (
    <div className=" shadow-xl flex justify-between gap-5 p-5 items-center bg-aboutBg">
      <figure className="h-[239px] w-[185px]">
        <img className="w-full" src={photo} alt="coffee" />
      </figure>
      <div className="text-start">
        <h3 className="text-3xl font-bold font-rancho">Name: {name}</h3>
        <p className="text-lg font-raleway">Supplier: {supplier}</p>
        <p className="text-lg font-raleway">Taste: {taste}</p>
      </div>
      <div className="flex flex-col text-3xl space-y-5 ">
        <Link>
          <button className="h-10 w-10 bg-bannerBtn flex justify-center items-center mx-auto text-white">
            <FaRegEye />
          </button>
        </Link>
        <Link>
          <button className="h-10 w-10 bg-neutral  flex justify-center items-center mx-auto text-white">
            <MdEdit />
          </button>
        </Link>
        <Link>
          <button className="h-10 w-10 bg-red-500 flex justify-center items-center mx-auto text-white">
            <MdDeleteOutline />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCoffee;
