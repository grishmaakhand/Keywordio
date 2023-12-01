import React from "react";
import DrawerAppBar from "../atoms/AppBar";

export default function Layout({ children }) {
  return <DrawerAppBar>{children}</DrawerAppBar>;
}
