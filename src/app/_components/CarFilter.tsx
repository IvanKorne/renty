"use client";
import React from "react";
import { useState, useEffect } from "react";

const CarFilter = ({ carsList, setBrand, orderList }: any) => {
  const BrandSet = new Set();
  const [brandList, setBrandList] = useState<any>();

  const filterCarList = () => {
    carsList.forEach((c: any) => {
      BrandSet.add(c.carBrand);
    });
    console.log(BrandSet);
    setBrandList(Array.from(BrandSet));
  };

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold">Cars Catalog </h2>
        <h3 className="text-lg font-semibold text-gray-700">
          Explore our collection of amazing cars!
        </h3>
      </div>
      <div className="flex gap-5">
        <select
          className="select select-bordered w-full max-w-xs hidden md:block"
          onChange={(e) => orderList(e.target.value)}
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select
          className="select select-bordered w-full max-w-xs"
          onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>
            Brand
          </option>
          {brandList &&
            brandList?.map((b: any, i: number) => <option key={i}>{b}</option>)}
        </select>
      </div>
    </div>
  );
};

export default CarFilter;
