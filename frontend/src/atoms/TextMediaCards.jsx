import { Checkbox } from "@mui/material";
import React from "react";

export default function TextMediaCards({ img, subheading, heading }) {
  return (
    <div className="flex flex-col w-[300px]  bg-white border rounder-md shadow-sm">
      <div className="flex justify-start">
        <Checkbox sx={{ color: "grey" }} />
      </div>
      <div className="flex  justify-center items-center ">
        <img src={img} alt="text" className=" w-[300px] h-[300px]" />
      </div>
      <div className="flex flex-col justify-center items-center h-[60px] p-5 bg-slate-50">
        <h4 className="text-gray-400 text-[14px] text-base font-sans ">
          {subheading}
        </h4>
        <h2 className="text-[#36404a] text-[20px] text-base font-sans font-semibold">
          {heading}
        </h2>
      </div>
    </div>
  );
}
