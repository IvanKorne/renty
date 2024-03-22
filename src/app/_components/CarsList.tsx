import React, { useEffect } from "react";
import CarCard from "./CarCard";

const CarsList = (props: any) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {props?.carsList?.map((car: any) => (
        <div key={car?.id}>
          <CarCard car={car}></CarCard>
        </div>
      ))}
    </div>
  );
};

export default CarsList;
