"use client";
import Hero from "./_components/Hero";
import Search from "./_components/Search";
import CarFilter from "./_components/CarFilter";
import CarsList from "./_components/CarsList";
import { getCars } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>();
  const getCarList = async () => {
    const result: any = await getCars();
    console.log(result.carLists);
    setCarsList(result?.carLists);
  };

  useEffect(() => {
    getCarList();
  }, []);
  return (
    <main className="p-5 sm:px-10  md:px-20">
      <Hero />
      <Search />
      <CarFilter />
      <CarsList carsList={carsList} />
    </main>
  );
}
