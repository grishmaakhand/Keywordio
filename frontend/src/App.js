// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateAds from "./pages/CreateAds";
import DrawerAppBar from "./atoms/AppBar";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/createads" element={<CreateAds />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
