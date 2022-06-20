import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import bundles from "../../../constants/bundles";
import LoadingPage from "../../LoadingPage";
import NotFound from "../../NotFound";
import Shop from "./Shop";

function ShopBundleContainer() {
  const { bundle } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(bundles).includes(bundle)) {
      setProduct(bundles[bundle]);
      setLoading(false);
    }
  }, [bundle]);

  if (loading) return <LoadingPage />;
  if (!loading && product) return <Shop bundle={product} />;
  if (!loading && !product) return <NotFound />;
}

export default ShopBundleContainer;
