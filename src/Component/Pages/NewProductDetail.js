import React from "react";
import { useParams } from "react-router-dom";
import HairData from "../Data/HairData"; // Make sure this includes full product info
import {
  Grid,
  Typography,
  Button,
  Container,
  Box,
  Card,
  CardMedia,
  Divider,
} from "@mui/material";

const NewProductDetail = () => {
  const { id } = useParams();
  const product = HairData.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <Typography variant="h6" sx={{ mt: 10, textAlign: "center" }}>
        Product not found.
      </Typography>
    );
  }

  return (
    <Container sx={{ pt: 10 }}>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={product.img}
              alt={product.name}
              sx={{ objectFit: "cover", maxHeight: 500 }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, mb: 3 }}>
            {product.description ||
              "This nourishing product is designed to strengthen and revitalize your hair with all-natural ingredients."}
          </Typography>

          <Typography variant="h5" sx={{ mb: 3 }}>
            ₹{product.price}
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
            <Button variant="outlined" color="primary">
              Buy Now
            </Button>
          </Box>

          {/* Optional: Ingredients or Benefits */}
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
