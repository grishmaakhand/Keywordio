import React from "react";

import DashboradTopBox from "../atoms/DashboradTopBox";
import Tables from "../atoms/Tables";

export default function MainTable() {
  const rows = [
    {
      campaigns: "Cosmetics",
      clicks: "712",
      cost: "USD 4,272 ",
      conversions: 8,
      revenue: "USD 16,568",
    },
    {
      campaigns: "Serums",
      clicks: "3,961",
      cost: "USD 27,331",
      conversions: 115,
      revenue: "USD 362,526",
    },
    {
      campaigns: "Facewash",
      clicks: "9,462",
      cost: "USD 76,831",
      conversions: 123,
      revenue: "USD 266,800",
    },
    {
      campaigns: "Shampoos",
      clicks: 439,
      cost: "USD 2,151",
      conversions: 5,
      revenue: "USD 11,029",
    },
    {
      campaigns: "Conditioners",
      clicks: "1,680",
      cost: "USD 3,864",
      conversions: 49,
      revenue: "USD 175,245",
    },
    {
      campaigns: "Facewash 2",
      clicks: "4,978 ",
      cost: "USD 29,370",
      conversions: 189,
      revenue: "USD 623,106 ",
    },
    {
      campaigns: "Total",
      clicks: "26,510",
      cost: "USD 1,43,819",
      conversions: 489,
      revenue: "USD 15,73,563",
    },
  ];
  const rightAlineHeadingArrya = ["clicks", "Cost", "Conversions", "Revenue"];
  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: "8px",

        background: "white",
      }}
    >
      <DashboradTopBox />
      <Tables
        leftAlineHeading="Campaigns"
        rightAlineHeadingArrya={rightAlineHeadingArrya}
        rows={rows}
      />
    </div>
  );
}
