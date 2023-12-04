import React from "react";

import Tables from "../atoms/Tables";

export default function ToggleTable() {
  const rows = [
    {
      campaigns: "Male",
      clicks: "348",
      cost: "USD 12,582 ",
      conversions: 42,
      revenue: "USD 16,118",
    },
    {
      campaigns: "Female",
      clicks: "692",
      cost: "USD 24,912",
      conversions: 35,
      revenue: "USD 5,175",
    },
    {
      campaigns: "Unknown",
      clicks: "105",
      cost: "USD 3,943",
      conversions: 3,
      revenue: "USD 4,489",
    },
    {
      campaigns: "Total",
      clicks: " 1,145",
      cost: "USD 41,383",
      conversions: 80,
      revenue: "USD 71,782",
    },
  ];
  const rightAlineHeadingArrya = ["clicks", "Cost", "Conversions", "Revenue"];
  return (
    <div>
      <Tables
        leftAlineHeading="Campaigns"
        rightAlineHeadingArrya={rightAlineHeadingArrya}
        rows={rows}
      />
    </div>
  );
}
