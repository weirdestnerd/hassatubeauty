import React from "react";
import { Route, Routes } from "react-router-dom";
import ComingSoon from "./components/coming_soon/ComingSoon";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoon />} />
      <Route path="/landing" element={<Landing />} />
    </Routes>
  );
}

export default App;
