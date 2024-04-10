"use client";
import { getStoreLocations, createBooking } from "@/services";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { defaultForm } from "@/data";

const Form = ({ car }: any) => {
  const [locations, setLocations] = useState<any>();
  const today = Date.now();
  const [formValues, setFormValues] = useState(defaultForm);
  const getStores = async () => {
    const response: any = await getStoreLocations();
    setLocations(response.storeLocations);
  };

  useEffect(() => {
    getStores();
  }, []);

  useEffect(() => {
    if (car) {
      setFormValues({ ...formValues, carId: { connect: { id: car.id } } });
    }
  }, [car]);

  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const response = await createBooking({ formValues });
    toast("Successfuly Booked!");
  };
  return (
    <>
      <div className="flex flex-col justify-center gap-2 ">
        <div className="flex w-full mb-2 flex-col">
          <span className=" font-semibold text-xl ">Pick up Location?</span>
          <select
            className="select select-bordered flex-1 "
            name="location"
            onChange={handleChange}
          >
            <option disabled selected></option>
            {locations &&
              locations?.map((l: any) => (
                <option key={l?.address}>{l?.address}</option>
              ))}
          </select>
        </div>
        <div className="flex gap-1">
          <div className="w-full">
            <label className="font-semibold">Pick-up Date</label>
            <div className="flex items-center px-3 py-1 pb-3 bg-white border-rounded border border-gray-200 rounded-xl w-full">
              <input
                type="Date"
                min={today}
                onChange={handleChange}
                name="pickupDate"
                className="p-2 outline-none bg-transparent text-gray-400"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="font-semibold">Drop-off Date</label>
            <div className="flex items-center px-3 py-2 bg-white border-rounded border border-gray-200 rounded-xl w-full">
              <input
                type="Date"
                min={today}
                onChange={handleChange}
                name="dropoffDate"
                className="p-2 outline-none bg-transparent text-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-1">
          <div className="w-full">
            <label className="font-semibold">Pick-up Time</label>
            <div className="flex items-center px-3 py-1 pb-3 bg-white border-rounded border border-gray-200 rounded-xl w-full">
              <input
                name="pickupTime"
                type="Time"
                onChange={handleChange}
                className="p-2 outline-none bg-transparent text-gray-400"
              />
            </div>
          </div>

          <div className="w-full">
            <label className="font-semibold">Drop-off Time</label>
            <div className="flex items-center px-3 py-2 bg-white border-rounded border border-gray-200 rounded-xl w-full">
              <input
                type="Time"
                onChange={handleChange}
                name="dropoffTime"
                className="p-2 outline-none bg-transparent text-gray-400"
              />
            </div>
          </div>
        </div>
        <div>
          <span className=" font-semibold text-md ">Contact Number</span>
        </div>
        <input
          type="text"
          name="contact"
          onChange={handleChange}
          placeholder="Enter Phone Number"
          className="input input-bordered w-full "
        />
      </div>
      <div className="modal-action">
        <button className="btn font-semibold px-10 mx-2">Close</button>
        <button
          className="btn bg-blue-500 px-10 hover:bg-blue-600 transition text-white font-semibold"
          onClick={() => handleSubmit()}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Form;
