import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shop from "./Shop";
import frontals from "../../../constants/frontals";
import LoadingPage from "../../LoadingPage";
import NotFound from "../../NotFound";

function ShopContainer() {
  const { frontal } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(frontals).includes(frontal)) {
      setProduct(frontals[frontal]);
      setLoading(false);
    }
  }, [frontal]);

  if (loading) return <LoadingPage />;
  if (!loading && product) return <Shop frontal={product} />;
  if (!loading && !product) return <NotFound />;
}

export default ShopContainer;
