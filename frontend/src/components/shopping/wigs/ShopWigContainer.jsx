import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../../LoadingPage";
import NotFound from "../../NotFound";
import Shop from "./Shop";
import { getProduct } from "../../../firebase";
import RollbarError from "../../../helpers/Rollbar";

function ShopWigContainer() {
  const { wig } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct(wig, "wigs")
      .then(setProduct)
      .catch(RollbarError)
      .finally(() => setLoading(false));
  }, [wig]);

  if (loading) return <LoadingPage />;
  if (!loading && product) return <Shop wig={product} />;
  if (!loading && !product) return <NotFound />;
}

export default ShopWigContainer;
