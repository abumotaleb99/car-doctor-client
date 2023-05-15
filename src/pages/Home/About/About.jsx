import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-16 lg:my-32 px-5 lg:px-0">
      <div className="hero-content flex-col lg:flex-row p-0">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-1/2 absolute top-1/2 right-5 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <h4 className="text-3xl text-orange-700 font-semibold pb-4">
            About Us
          </h4>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.
          </p>
          <p className="pb-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomized words which don't look even slightly
            believable.
          </p>
          <button className="btn btn-warning">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
