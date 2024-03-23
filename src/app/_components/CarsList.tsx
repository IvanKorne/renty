"use client";
import React, { useState } from "react";
import CarCard from "./CarCard";
import LoadingSpin from "react-loading-spin";
import Modal from "./Modal";

const CarsList = ({ carsList, loading }: any) => {
  const [selectedCar, setSelectedCar] = useState<any>();

  if (loading) {
    return (
      <div className="flex mt-10 items-center justify-center">
        <LoadingSpin size={"100px"} />
      </div>
    );
  }
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {carsList?.map((car: any) => (
          <div
            key={car?.id}
            onClick={() => {
              (window as any).modal.showModal();
              setSelectedCar(car);
            }}
          >
            <CarCard car={car}></CarCard>
          </div>
        ))}
      </div>
      <dialog id="modal" className="modal">
        <Modal car={selectedCar} />
      </dialog>
    </div>
  );
};

export default CarsList;
