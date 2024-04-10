"use client";
import Hero from "./_components/Hero";
import Search from "./_components/Search";
import CarFilter from "./_components/CarFilter";
import CarsList from "./_components/CarsList";
import { getCars } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [carsOrgList, setCarsOrgList] = useState<any>();
  const [brand, setBrand] = useState<string>();
  const getCarList = async () => {
    setLoading(true);
    const result: any = await getCars();
    setCarsList(result?.carLists);
    setCarsOrgList(result?.carLists);
    setLoading(false);
  };

  const filterCarList = (brand: string) => {
    const newCars = carsOrgList.filter((car: any) => car.carBrand == brand);
    setCarsList(newCars);
  };

  const orderList = (order: string) => {
    const newCars = [...carsOrgList].sort((a, b) =>
      order == "-1" ? a.price - b.price : b.price - a.price
    );
    setCarsList(newCars);
  };

  useEffect(() => {
    getCarList();
  }, []);

  return (
    <main className="p-5 sm:px-10  md:px-20">
      <Hero />
      <Search />
      <CarFilter
        carsList={carsOrgList}
        setBrand={(e: string) => filterCarList(e)}
        orderList={(e: string) => orderList(e)}
      />
      <CarsList carsList={carsList} loading={loading} />
    </main>
  );
}
