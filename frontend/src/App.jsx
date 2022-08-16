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
import ShopAllBundles from "./components/shopping/bundles/ShopAllBundles";
import ShopBundleContainer from "./components/shopping/bundles/ShopBundleContainer";
import SignIn from "./components/account/SignIn";
import ForgotPassword from "./components/account/ForgotPassword";
import CreateAccount from "./components/account/CreateAccount";
import OrderDetails from "./components/shopping/OrderDetails";
import Inventory from "./components/admin/Inventory";
import AdminProduct from "./components/admin/AdminProduct";
import AdminProductContainer from "./components/admin/AdminProductContainer";

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
      <Route path="/shop-bundles" element={<ShopAllBundles />} />
      <Route path="/shop/bundles/:bundle" element={<ShopBundleContainer />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/ordered" element={<OrderDetails />} />
      <Route path="/admin" element={<Inventory />} />
      <Route path="/admin/inventory" element={<Inventory />} />
      <Route path="/admin/:type/:id" element={<AdminProductContainer />} />
      <Route
        path="/admin/products/new"
        element={<AdminProduct isEdit={false} product={null} />}
      />
      {/*  TODO: create these pages */}
      {/* <Route path="/shop-sales" element={<Landing />} /> */}
      {/* <Route path="/shipping-policy" element={<Landing />} /> */}
      {/* <Route path="/shop-all" element={<Landing />} /> */}
      {/* <Route path="/shop-patricia" element={<Landing />} /> */}
      {/*  END */}
      <Route path="/my-story" element={<MyStory />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
