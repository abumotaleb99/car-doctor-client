import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mb-16 lg:mb-32 px-5 lg:px-0">
      <div className="text-center">
        <h4 className="text-3xl text-[#FF3811] font-semibold pb-4">Service</h4>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="py-6">
          the majority have suffered alteration in some form, by injected
          humour, <br />
          or randomized words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
