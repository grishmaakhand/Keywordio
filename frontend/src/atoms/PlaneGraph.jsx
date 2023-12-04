import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

const data2 = [
  { label: "40% Male", value: 40 },
  { label: "35% Female", value: 35 },
  { label: "25% Unknown", value: 25 },
];
const customColors = ["#FF5733 ", "#2196F3", "#36454F"];

export default function PlaneGraph() {
  return (
    <div>
      <PieChart
        series={[
          {
            data: data2,
            cx: 150,
            cy: 200,
            innerRadius: 100,
            outerRadius: 150,
          },
        ]}
        width={310}
        height={360}
        colors={customColors}
        slotProps={{
          legend: { hidden: true },
        }}
      />
    </div>
  );
}
