import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const coffees = { name, supplier, category, chef, taste, details, photo };
    console.log(coffees);
    fetch("http://localhost:5000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffees),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
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
      <div className="w-11/12 md:w-3/4 mx-auto bg-aboutBg py-16">
        <div className="flex flex-col justify-center items-center">
          <div className="text-center">
            <h3 className="text-4xl font-bold font-rancho mb-4">
              Add New Coffee
            </h3>
            <h5 className="font-raleway w-full md:w-3/6 mx-auto">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </h5>
          </div>
        </div>

        <div className="card shrink-0 flex flex-col justify-center">
          <form onSubmit={handleAddCoffee} className="card-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter coffee name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  name="supplier"
                  type="text"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  name="category"
                  type="text"
                  placeholder="Enter coffee Category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  name="chef"
                  type="text"
                  placeholder="Enter coffee chef"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Taste</span>
                </label>
                <input
                  name="taste"
                  type="text"
                  placeholder="Enter coffee taste"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  name="details"
                  type="text"
                  placeholder="Enter coffee details"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter your photo url"
                className="input input-bordered"
                required
              />
            </div>
            <div>
              <button className="btn btn-neutral w-full">Add Coffee</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
