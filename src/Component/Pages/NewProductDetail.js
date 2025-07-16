import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import HairData from "../Data/HairData"; // Make sure this includes full product info
import {
  Grid,
  Typography,
  Button,
  Container,
  Box,
  Divider,
} from "@mui/material";
import BodyData from "../Data/BodyData";
import SkinDate from "../Data/SkinDate";

const NewProductDetail = () => {
  const [num, setNum] = useState(0);
  const { category, id  } = useParams();
  let dataArray = [];
  if (category === "hair") dataArray = HairData;
  else if (category === "body") dataArray = BodyData;
  else if (category === "skin") dataArray = SkinDate;

  const product = dataArray.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <Typography variant="h6" sx={{ mt: 10, textAlign: "center" }}>
        Product not found.
      </Typography>
    );
  }
  const handleAddToCart = (product) => {
    let existingCart = [];

    const storedData = JSON.parse(localStorage.getItem("AddProductData"));
    if (Array.isArray(storedData)) {
      existingCart = storedData;
    } else if (storedData) {
      existingCart = [storedData];
    }

    const alreadyInCart = existingCart.some((item) => item.id === product.id);
    if (alreadyInCart) {
      alert("Product already in cart!");
      return;
    }

    const updatedCart = [...existingCart, product];
    localStorage.setItem("AddProductData", JSON.stringify(updatedCart));
  };
  const decrementQty = (id) => {
    setNum(num - 1);
   
  };
  const incrementQty = (id) => {
    setNum(num + 1);
  };

  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              maxHeight: 500,
              maxWidth: 500,
              overflow: "hidden",
            }}
          >
            <img
              src={product.img}
              alt={product.name}
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ maxWidth: 600 }}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="h6" color="text.secondary">
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
            {product.description ||
              "This nourishing product is designed to strengthen and revitalize your hair with all-natural ingredients."}
          </Typography>

          <Typography variant="h5" sx={{ mb: 3 }}>
            ₹{product.price * num}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 2 }}>
            <Button
              variant="outlined"
              size="small"
               disabled ={num <= 0}
              onClick={() => decrementQty(product.id)}
            >
              −
            </Button>
            <Typography variant="body1">{num}</Typography>
            <Button
              variant="outlined"
              size="small"
             
              onClick={() => incrementQty(product.id)}
            >
              +
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="subtitle1" fontWeight="bold">
            Key Ingredients:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.ingredients || "Argan Oil, Aloe Vera, Keratin, Vitamin E"}
          </Typography>

          <Typography variant="subtitle1" fontWeight="bold" sx={{ mt: 3 }}>
            How to Use:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.usage ||
              "Apply to damp hair, leave in for 5 minutes, and rinse thoroughly."}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewProductDetail;
