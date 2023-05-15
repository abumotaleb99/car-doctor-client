import React from "react";
import bannerImg1 from "../../../assets/images/banner/1.jpg";
import bannerImg2 from "../../../assets/images/banner/2.jpg";
import bannerImg3 from "../../../assets/images/banner/3.jpg";
import bannerImg4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full max-h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={bannerImg1} className="w-full object-cover rounded-xl" />
        <div className="absolute flex flex-col justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ps-10 rounded-xl">
          <div className="space-y-4 sm:space-y-5 w-2/3 text-white">
            <h2 className="text-4xl sm:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="hidden sm:block">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={bannerImg2} className="w-full object-cover rounded-xl" />
        <div className="absolute flex flex-col justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ps-10 rounded-xl">
          <div className="space-y-4 sm:space-y-5 w-2/3 text-white">
            <h2 className="text-4xl sm:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="hidden sm:block">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bannerImg3} className="w-full object-cover rounded-xl" />
        <div className="absolute flex flex-col justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ps-10 rounded-xl">
          <div className="space-y-4 sm:space-y-5 w-2/3 text-white">
            <h2 className="text-4xl sm:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="hidden sm:block">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={bannerImg4} className="w-full object-cover rounded-xl" />
        <div className="absolute flex flex-col justify-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ps-10 rounded-xl">
          <div className="space-y-4 sm:space-y-5 w-2/3 text-white">
            <h2 className="text-4xl sm:text-6xl font-bold">
              Affordable Price For Car Servicing
            </h2>
            <p className="hidden sm:block">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-primary mr-5">Discover More</button>
              <button className="btn btn-outline btn-secondary">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
