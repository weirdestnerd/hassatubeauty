import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import closures from "../../../constants/closures";
import LoadingPage from "../../LoadingPage";
import NotFound from "../../NotFound";
import Shop from "./Shop";

function ShopClosureContainer() {
  const { closure } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(closures).includes(closure)) {
      setProduct(closures[closure]);
      setLoading(false);
    }
  }, [closure]);

  if (loading) return <LoadingPage />;
  if (!loading && product) return <Shop closure={product} />;
  if (!loading && !product) return <NotFound />;
}

export default ShopClosureContainer;
