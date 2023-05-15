import React from "react";
import loginImg from "../../assets/images/login/login.svg";

const Login = () => {
  return (
    <div className="hero min-h-screen mb-7 lg:mb-0">
      <div className="hero-content flex-col gap-20 lg:flex-row">
        <div className="px-5 lg:px-0">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm border">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Login</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
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
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white bg-[#FF3811] hover:bg-[#b04f3c] border-none">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
