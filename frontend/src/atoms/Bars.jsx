import React from "react";

export default function Bars() {
  return (
    <div className="flex flex-col justify-center items-start gap-5 p-5">
      <div className="flex judtify-around items-center gap-4">
        <div className="bg-[#FF5733] border rounded-lg w-[40px] h-[20px]"></div>
        <h2>40% Male</h2>
      </div>
      <div className="flex judtify-around items-center gap-4">
        <div className="bg-[#2196F3] border rounded-lg w-[40px] h-[20px]"></div>
        <h2>35% Female</h2>
      </div>
      <div className="flex judtify-around items-center gap-4">
        <div className="bg-[#36454F] border rounded-lg w-[40px] h-[20px]"></div>
        <h2>25% Unknown</h2>
      </div>
    </div>
  );
}
