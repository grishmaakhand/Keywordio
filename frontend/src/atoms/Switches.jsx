// Demo.jsx
import * as React from "react";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Switches({ onSwitchToggle }) {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    onSwitchToggle(); // Notify the parent component about the switch toggle
  };

  const renderToggleButton = (value, label, icon) => (
    <ToggleButton
      value={value}
      aria-label={label}
      sx={{
        borderRadius: "20px",
        border: "none",
        backgroundColor: alignment === value ? "red" : "initial",
      }}
    >
      {icon}
    </ToggleButton>
  );

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      {renderToggleButton("left", "left aligned", <DonutLargeIcon />)}
      {renderToggleButton("right", "right aligned", <TableChartOutlinedIcon />)}
    </ToggleButtonGroup>
  );
}
