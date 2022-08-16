import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminProduct from "./AdminProduct";
import { getInventoryProduct } from "../../firebase";
import RollbarError from "../../helpers/Rollbar";
import LoadingOverlay from "../loading/LoadingOverlay";

function AdminProductContainer() {
  const { id, type } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getInventoryProduct(id, type)
      .then(setProduct)
      .catch(RollbarError)
      .finally(() => setLoading(false));
  });

  if (loading) return <LoadingOverlay />;
  if (!product) return null;
  return <AdminProduct product={{ ...product, type }} />;
}

export default AdminProductContainer;
