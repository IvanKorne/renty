import React from "react";
import { Map, Calendar } from "lucide-react";

const Search = () => {
  return (
    <div>
      <h2 className="text-center text-lg text-gray-900 font-bold mt-5">
        Search for what you need!
      </h2>
      <div className="flex justify-center mt-3">
        <div className="flex bg-gray-100 px-5 gap-1 py-1 rounded-full divide-x">
          <div className="flex items-center">
            <Map />
            <input
              type="text"
              placeholder="Location"
              className="p-2 outline-none bg-transparent"
            />
          </div>
          <div className="flex items-center">
            <input
              type="Date"
              className="p-2 outline-none bg-transparent text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
