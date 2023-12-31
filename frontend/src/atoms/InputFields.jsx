import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function InputFields({ heading, placeholder }) {
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(4),
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: "white",
      color: "#999999",
      border: "1px solid",
      borderColor: "#E0E3E7",
      fontSize: 16,
      width: "100%",
      padding: "10px 12px",
      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),
    },
  }));

  const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
    color: "#36404a",
    fontSize: 16,
    fontFamily: "Open Sans",
    fontWeight: "bold",

    transform: "translate(0, 0px) scale(1)",
  }));

  return (
    <FormControl className="w-full">
      <StyledInputLabel shrink={false} htmlFor="bootstrap-input">
        {heading}
      </StyledInputLabel>
      <BootstrapInput
        defaultValue={placeholder}
        id="bootstrap-input"
        style={{ paddingRight: "10px" }}
      />
    </FormControl>
  );
}
