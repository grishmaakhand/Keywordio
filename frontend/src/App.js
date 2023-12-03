// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CreateAds from "./pages/CreateAds";
import DrawerAppBar from "./atoms/AppBar";
import DashBoard from "./pages/DashBoard";
import MediaForm from "./pages/MediaForm";
import TextForm from "./pages/TextForm";

function App() {
  return (
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/createads" element={<CreateAds />} />
        <Route path="/createads/mediaform" element={<MediaForm />} />
        <Route path="/createads/textform" element={<TextForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
