import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import ShopAll from "./components/shopping/ShopAll";
import NotFound from "./components/NotFound";
import ShopContainer from "./components/shopping/ShopContainer";
import MyStory from "./components/MyStory";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/shop-all" element={<ShopAll />} />
      <Route path="/shop/:wig" element={<ShopContainer />} />
      <Route path="/shop-patricia" element={<ShopAll />} />
      <Route path="/my-story" element={<MyStory />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
