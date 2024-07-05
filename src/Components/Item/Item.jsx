import React from "react";

const Item = (props) => {
  return (
    <div className="w-40 md:w-56 flex-shrink-0 flex-wrap h-auto flex flex-col justify-center bg-white items-center text-center shadow-lg gap-1 mx-2 p-4 hover:scale-105 active:scale-100 rounded-lg">
      <img
        src={props.image}
        alt="image"
        className="w-32"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <p className="text-base  sm:text-lg md:text-xl text-gray-800  font-medium mt-2 ">
        {props.name}
      </p>
      <div className="flex justify-center items-center">
        <div className="text-gray-800  text-sm sm:text-base md:text-lg font-semibold">
          ₹{props.new_price}
        </div>
        <div className="text-gray-400 text-sm sm:text-base md:text-lg font-medium line-through ml-2">
          ₹{props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Item;
