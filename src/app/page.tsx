"use client";
import Hero from "./_components/Hero";
import Search from "./_components/Search";
import CarFilter from "./_components/CarFilter";

export default function Home() {
  return (
    <main className="p-5 sm:px-10  md:px-20">
      <Hero />
      <Search />
      <CarFilter />
    </main>
  );
}
