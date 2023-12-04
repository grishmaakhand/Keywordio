import React from "react";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import Box from "@mui/material/Box";
import SmallDropdown from "./SmallDropdown";

export default function DashboradTopBox({ dropdown }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        borderBottom: 1,
        borderColor: "grey.300",
      }}
    >
      {"Ad Insights"}
      <div className="flex justify-end gap-5 ">
        {dropdown && <SmallDropdown className="h-5 bg-red-500" />}
        {<HelpOutlineSharpIcon style={{ fontSize: 20, color: "#ECECEC" }} />}
      </div>
    </Box>
  );
}
