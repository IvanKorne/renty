import { Fuel, Car, Armchair } from "lucide-react";
import React from "react";

export const defaultForm = {
  location: "",
  pickupDate: "",
  dropoffDate: "",
  pickupTime: "",
  dropoffTime: "",
  contact: "",
  carId: { connect: { id: "" } },
};
export const headerButtons = [
  {
    name: "Home",
    link: "https://ivankorne.vercel.app/",
  },
  {
    name: "About",
    link: "https://github.com/IvanKorne",
  },
  {
    name: "Contact Us",
    link: "mailto:ikorney@uwaterloo.ca",
  },
] as const;

export const CardIcons = [
  {
    name: "",
    icon: React.createElement(Car),
    value: "carType",
  },
  {
    name: "Seat",
    icon: React.createElement(Armchair),
    value: "seat",
  },
  {
    name: "MPG",
    icon: React.createElement(Fuel),
    value: "mpg",
  },
] as const;
