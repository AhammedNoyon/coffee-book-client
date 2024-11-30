import { FaRegEye } from "react-icons/fa";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleCoffee = (props = {}) => {
  const { coffee, coffees, setCoffees } = props || {};
  console.log(coffee);
  const { _id, name, supplier, taste, photo } = coffee;

  const handleDeleteCoffee = (_id) => {
    console.log("delete coffee id", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffee = coffees.filter(
                (singleCoffee) => singleCoffee?._id !== _id
              );
              setCoffees(remainingCoffee);
            }
          });
      }
    });
  };
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
        <Link to={`/coffeeDetails/${_id}`}>
          <button className="h-10 w-10 bg-bannerBtn flex justify-center items-center mx-auto text-white">
            <FaRegEye />
          </button>
        </Link>
        <Link to={`/updateCoffee/${_id}`}>
          <button className="h-10 w-10 bg-neutral  flex justify-center items-center mx-auto text-white">
            <MdEdit />
          </button>
        </Link>
        <Link>
          <button
            onClick={() => handleDeleteCoffee(_id)}
            className="h-10 w-10 bg-red-500 flex justify-center items-center mx-auto text-white"
          >
            <MdDeleteOutline />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleCoffee;
