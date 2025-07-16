import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  // ✅ Load wishlist from localStorage (correct key used)
  useEffect(() => {
    const stored = localStorage.getItem("WishlistData");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const items = Array.isArray(parsed) ? parsed : [parsed];
        setWishlist(items);
      } catch (e) {
        console.error("Invalid wishlist data", e);
        setWishlist([]);
      }
    }
  }, []);

  // ✅ Remove from wishlist
  const handleRemove = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("WishlistData", JSON.stringify(updated));
  };

  if (wishlist.length === 0) {
    return (
      <Typography variant="h6" sx={{ mt: 10, textAlign: "center" }}>
        No items in wishlist.
      </Typography>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={3}>
        {wishlist.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea
                component={Link}
                to={`/productlist/${item.category}/${item.id}`}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={item.img}
                  alt={item.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    ₹{item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button
                fullWidth
                color="error"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Wishlist;
