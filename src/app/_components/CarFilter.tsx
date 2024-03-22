import React from "react";

const CarFilter = () => {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold">Cars Catalog </h2>
        <h3 className="text-lg font-semibold text-gray-700">
          Explore our collection of amazing cars!
        </h3>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs hidden md:block">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Brand
          </option>
          <option>Honda</option>
          <option>Toyota</option>
          <option>BMW</option>
          <option>Ford</option>
          <option>Mazda</option>
          <option>Acura</option>
        </select>
      </div>
    </div>
  );
};

export default CarFilter;
