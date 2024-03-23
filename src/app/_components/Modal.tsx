import React from "react";
import CarCard from "./CarCard";
import Form from "./Form";

const Modal = ({ car }: any) => {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-1 pb-2">
        <h3 className="text-3xl font-medium text-gray-800  ">Rent a Car!</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <CarCard car={car} />
        </div>
        <div>
          <Form car={car} />
        </div>
      </div>
    </form>
  );
};

export default Modal;
