import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../../LoadingPage";
import NotFound from "../../NotFound";
import Shop from "./Shop";
import { getProduct } from "../../../firebase";
import RollbarError from "../../../helpers/Rollbar";

function ShopClosureContainer() {
  const { closure } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(closure, "closures")
      .then(setProduct)
      .catch(RollbarError)
      .finally(() => setLoading(false));
  }, [closure]);

  if (loading) return <LoadingPage />;
  if (!loading && product) return <Shop closure={product} />;
  if (!loading && !product) return <NotFound />;
}

export default ShopClosureContainer;
