import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  let location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        const loggedUser = {
          email: user.email,
        };
        console.log(loggedUser);
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt response ", data);

            localStorage.setItem("car-access-token", data.token);
            navigate(from, { replace: true });
          });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen mb-7 lg:mb-0">
      <div className="hero-content flex-col gap-20 lg:flex-row">
        <div className="px-5 lg:px-0">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm border">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <h1 className="text-3xl font-bold">Login</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary text-white bg-[#FF3811] hover:bg-[#b04f3c] border-none">
                  Sign In
                </button>
              </div>
            </form>
            <p>
              New to Car Doctor?
              <Link className="underline text-blue-900 ms-2" to="/sign-up">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
