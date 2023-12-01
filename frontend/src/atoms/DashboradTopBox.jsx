import React from "react";
import HelpOutlineSharpIcon from "@mui/icons-material/HelpOutlineSharp";
import Box from "@mui/material/Box";

export default function DashboradTopBox() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        p: 1,
        borderBottom: 1,
        borderColor: "grey.300",

        width: 700,
      }}
    >
      {"Ad Insights"}

      {<HelpOutlineSharpIcon style={{ fontSize: 20, color: "#ECECEC" }} />}
    </Box>
  );
}
