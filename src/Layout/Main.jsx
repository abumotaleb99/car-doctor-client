import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/Shared/Navbar/NavBar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="min-h-[calc(100vh-287px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
