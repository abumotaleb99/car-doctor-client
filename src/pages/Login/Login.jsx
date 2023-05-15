import React from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = () => {};
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
