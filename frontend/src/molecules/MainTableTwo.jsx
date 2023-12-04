import React from "react";
import PlaneGraph from "../atoms/PlaneGraph";
import Bars from "../atoms/Bars";

export default function MainTableTwo() {
  return (
    <div className="flex  flex-col  md:flex-row justify-center items-center md:justify-around w-full h-full gap-[20px]  ">
      <PlaneGraph />
      <Bars />
    </div>
  );
}
