import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shop from "./Shop";
import LoadingPage from "../../LoadingPage";
import NotFound from "../../NotFound";
import RollbarError from "../../../helpers/Rollbar";
import { getProduct } from "../../../firebase";

function ShopContainer() {
  const { frontal } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(frontal, "frontals")
      .then(setProduct)
      .catch(RollbarError)
      .finally(() => setLoading(false));
  }, [frontal]);

  if (loading) return <LoadingPage />;
  if (!loading && product) return <Shop frontal={product} />;
  if (!loading && !product) return <NotFound />;
}

export default ShopContainer;
