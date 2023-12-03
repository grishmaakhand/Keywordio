import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "30%",

  bgcolor: "background.paper",
  boxShadow: 5,
  padding: "50px",
  borderRadius: 2,
};

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const BackdropComponent = (props) => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent background
        backdropFilter: "blur(5px)", // Adjust the blur intensity as needed
        // Ensure it's above the modal
      }}
      {...props}
    />
  );

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        BackdropComponent={BackdropComponent}
      >
        <Box
          sx={{
            ...style,
            width: "25em",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <CheckCircleIcon
            style={{ fontSize: "3em", color: "blue" }} // Change size and color
          />
          <h2 className="text-[#36404a] text-[22px] text-base font-sans font-semibold ">
            Submitted
          </h2>
        </Box>
      </Modal>
    </div>
  );
}
