import React from "react";
import MainTable from "../molecules/MainTable";
import Switches from "../atoms/Switches";

export default function DashBoard() {
  return (
    <div style={{ background: "#fafafa", padding: "35px" }}>
      <MainTable />
      <Switches />
    </div>
  );
}
