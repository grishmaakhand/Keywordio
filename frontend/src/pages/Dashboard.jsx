import React from "react";
import MainTable from "../molecules/MainTable";
import ToggleSideTable from "../organisms/ToggleSideTable";

export default function DashBoard() {
  return (
    <div
      className="flex flex-col gap-5 lg:flex-row justify-center  w-600"
      style={{ background: "#fafafa", padding: "35px" }}
    >
      <MainTable />
      <ToggleSideTable />
    </div>
  );
}
