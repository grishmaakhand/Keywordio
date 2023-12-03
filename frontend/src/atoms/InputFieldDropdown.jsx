import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

export default function InputFieldDropdown({ heading, placeholder }) {
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
      width: "94%",
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

  const DropdownIcon = styled("svg")({
    fill: "grey",
    position: "absolute",
    top: "65%",
    right: "30px",
    transform: "translateY(-50%)",
    cursor: "pointer",
  });

  return (
    <FormControl className="w-full">
      <StyledInputLabel shrink={false} htmlFor="bootstrap-input">
        {heading}
      </StyledInputLabel>

      <BootstrapInput defaultValue={placeholder} id="bootstrap-input" />
      <DropdownIcon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="18"
        height="18"
      >
        <path d="M12 21l5.707-5.707a1 1 0 00-1.414-1.414L12 18.172l-4.293-4.293a1 1 0 00-1.414 1.414L12 21z" />
      </DropdownIcon>
    </FormControl>
  );
}
