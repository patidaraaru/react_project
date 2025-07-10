import React from "react";
import { useParams } from "react-router-dom";
import products from "../Data/ProductData";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2> Product not found</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "300px", height: "300px", objectFit: "contain" }}
      />
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;
