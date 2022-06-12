import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import NotFound from "./components/NotFound";
import ShopWigContainer from "./components/shopping/wigs/ShopWigContainer";
import MyStory from "./components/MyStory";
import ComingSoon from "./components/coming_soon/ComingSoon";
import ShopAllFrontals from "./components/shopping/frontals/ShopAllFrontals";
import ShopFrontalContainer from "./components/shopping/frontals/ShopFrontalContainer";
import ShopAllClosures from "./components/shopping/closures/ShopAllClosures";
import ShopClosureContainer from "./components/shopping/closures/ShopClosureContainer";
import ShopAllWigs from "./components/shopping/wigs/ShopAllWigs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/shop-wigs" element={<ShopAllWigs />} />
      <Route path="/shop/wigs/:wig" element={<ShopWigContainer />} />
      <Route path="/shop-frontals" element={<ShopAllFrontals />} />
      <Route
        path="/shop/frontals/:frontal"
        element={<ShopFrontalContainer />}
      />
      <Route path="/shop-closures" element={<ShopAllClosures />} />
      <Route
        path="/shop/closures/:closure"
        element={<ShopClosureContainer />}
      />
      {/*  TODO: create these pages */}
      <Route path="/shop-bundles" element={<Landing />} />
      <Route path="/shop-sales" element={<Landing />} />
      <Route path="/shipping-policy" element={<Landing />} />
      <Route path="/shop-all" element={<Landing />} />
      <Route path="/shop-patricia" element={<Landing />} />
      {/*  END */}
      <Route path="/my-story" element={<MyStory />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
