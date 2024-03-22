import React from "react";
import Image from "next/image";
import { CardIcons } from "@/data";
import { ArrowRight } from "lucide-react";

const CarCard = ({ car }: any) => {
  return (
    <div className="group bg-gray-50 p-2 hover:bg-white hover:border-[1px] cursor-pointer duration border-blue-500 rounded-xl m-5">
      <h2 className="text-xl font-bold  mb-2">{car.name}</h2>
      <h2 className="text-3xl font-semibold mb-2 ">
        <span className="text-sm font-light">$</span>
        {car.price}
        <span className="text-sm font-light"> /day</span>
      </h2>
      <Image
        src={car.image?.url}
        alt="car"
        width={220}
        height={200}
        className="w-[250px] h-[150px] mb-3 object-contain"
      />
      <div className="flex justify-around group-hover:hidden transition">
        {CardIcons.map((c, i) => (
          <div key={i} className="text-gray-500 text-center ">
            <div className="text-xl mb-2 w-full ml-[6px]">{c.icon}</div>
            <h2 className="line-clamp-5 text-[14px] font-semibold">
              {car[c.value]} {c.name}
            </h2>
          </div>
        ))}
      </div>
      <div className="hidden group-hover:block cursor-pointer">
        <div className="justify-between items-center flex p-4 bg-gradient-to-r rounded-xl from-blue-400 to-blue-600">
          <h1 className="text-white font-semibold text-xl">Rent Now!</h1>
          <button className="p-4 rounded-xl bg-blue-500">
            <ArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
