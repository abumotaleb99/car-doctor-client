import React from "react";
import bannerImg1 from "../../../assets/images/banner/1.jpg";
import bannerImg2 from "../../../assets/images/banner/2.jpg";
import bannerImg3 from "../../../assets/images/banner/3.jpg";
import bannerImg4 from "../../../assets/images/banner/4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full max-h-screen">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={bannerImg1} className="w-full object-cover" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 pr-7 pb-7">
          <a href="#slide4" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={bannerImg2} className="w-full object-cover" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 pr-7 pb-7">
          <a href="#slide1" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={bannerImg3} className="w-full object-cover" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 pr-7 pb-7">
          <a href="#slide2" className="btn btn-circle mr-4">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={bannerImg4} className="w-full object-cover" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 pr-7 pb-7">
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
