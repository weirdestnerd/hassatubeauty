import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import ShopWigs from "./components/shopping/ShopWigs";
import NotFound from "./components/NotFound";
import ShopContainer from "./components/shopping/ShopContainer";
import MyStory from "./components/MyStory";
import ComingSoon from "./components/coming_soon/ComingSoon";
import ShopAllFrontals from "./components/shopping/frontals/ShopAllFrontals";
import ShopFrontalContainer from "./components/shopping/frontals/ShopFrontalContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/shop-wigs" element={<Landing />} />
      <Route path="/shop-frontals" element={<ShopAllFrontals />} />
      <Route
        path="/shop/frontals/:frontal"
        element={<ShopFrontalContainer />}
      />
      {/*  TODO: create these pages */}
      <Route path="/shop-bundles" element={<Landing />} />
      <Route path="/shop-sales" element={<Landing />} />
      <Route path="/shipping-policy" element={<Landing />} />
      <Route path="/shop-all" element={<Landing />} />
      {/*  END */}
      <Route path="/shop/:wig" element={<ShopContainer />} />
      <Route path="/shop-patricia" element={<ShopWigs />} />
      <Route path="/my-story" element={<MyStory />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
