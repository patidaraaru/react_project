import products from "../Data/ProductData";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div style={{ paddingTop: "100px" }}>
      <h2>Our Products</h2>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Link
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  border: "1px solid #ddd",
                  padding: "16px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                    marginBottom: "10px",
                  }}
                />
                <h3>{product.name}</h3>
                <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
                <p style={{ fontSize: "14px", color: "#555" }}>
                  {product.description}
                </p>
              </div>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
