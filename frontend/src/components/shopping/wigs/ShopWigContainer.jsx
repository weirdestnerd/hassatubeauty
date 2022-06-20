import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingPage from "../../LoadingPage";
import wigs from "../../../constants/wigs";
import NotFound from "../../NotFound";
import Shop from "./Shop";

function ShopWigContainer() {
  const { wig } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(wigs).includes(wig)) {
      setProduct(wigs[wig]);
      setLoading(false);
    }
  }, [wig]);

  if (loading) return <LoadingPage />;
  if (!loading && product) return <Shop wig={product} />;
  if (!loading && !product) return <NotFound />;
}

export default ShopWigContainer;
