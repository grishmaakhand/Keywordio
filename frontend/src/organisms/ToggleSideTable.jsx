// ToggleSideTable.jsx
import React, { useState } from "react";
import DashboradTopBox from "../atoms/DashboradTopBox";
import Switches from "../atoms/Switches";
import ToggleTable from "../molecules/ToggleTable";

import MainTableTwo from "../molecules/MainTableTwo";

export default function ToggleSideTable() {
  const [showMainTableTwo, setShowMainTableTwo] = useState(true);

  const handleSwitchToggle = () => {
    setShowMainTableTwo((prev) => !prev);
  };

  return (
    <div>
      <div className="flex flex-col bg-white border-[1px] border-[#E0E0E0]  w-full xl:w-[600px]  h-[380] md:h-[480px] rounded-md ">
        <DashboradTopBox dropdown={"true"} />
        <div className="flex flex-col justify-end w-full h-full">
          {showMainTableTwo ? (
            <div className="border-b-[1px]">
              <ToggleTable />
            </div>
          ) : (
            <div className="flex justify-center w-full ">
              <MainTableTwo />
            </div>
          )}

          <div className="flex justify-end items-end h-full p-2">
            <Switches onSwitchToggle={handleSwitchToggle} />
          </div>
        </div>
      </div>
    </div>
  );
}
