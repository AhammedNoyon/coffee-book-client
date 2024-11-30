import { useContext } from "react";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const signUpUser = { name, email, password };
    console.log(signUpUser);
    //create user to fb
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential?.user;
        console.log(user);
        //create to db
        const createdAt = user?.metadata?.createdAt;
        const newUser = { name, email, createdAt };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User Create Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              form.reset();
            }
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="card bg-base-100 w-full max-w-2xl shrink-0 mx-auto">
      <div className="mt-10 text-4xl mx-auto">
        <p className="flex justify-center mb-4">
          <CiLogin />
        </p>
        <h3>Please Sing Up </h3>
      </div>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="bg-bannerBtn py-3 px-8  text-2xl text-black font-rancho">
            <Link>Sign Up</Link>
          </button>
        </div>
        <p className="text-lg font-medium">
          <span>Already have an account? So please </span>
          <Link to="/login">
            <span className="underline underline-offset-4 text-[#331A15] font-bold">
              Login
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
