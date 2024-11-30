import { useContext } from "react";
import { CiLogin } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  // console.log(loginUser);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginUserInfo = { email, password };
    console.log(loginUserInfo);
    //login to fb
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("login successfully", user);
        //update to db
        const lastSignInTime = user?.metadata?.lastSignInTime;
        const updatedInfo = { email, lastSignInTime };
        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Updated data", data);
            if (data.matchedCount) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
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
        <h3>Please Login</h3>
      </div>
      <form onSubmit={handleLogin} className="card-body">
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
            Login
          </button>
        </div>
        <p className="text-lg font-medium">
          <span>Are you new drinker ? So please </span>
          <Link to="/signup">
            <span className="underline underline-offset-4 text-[#331A15] font-bold">
              Sign Up
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
