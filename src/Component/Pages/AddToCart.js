import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
} from "@mui/material";
import { useEffect, useState } from "react";

const AddToCart = () => {
  const [detail, setDetail] = useState([]);
  


  useEffect(() => {
  const storedData = localStorage.getItem("AddProductData");

  if (storedData) {
    try {
      const parsed = JSON.parse(storedData);
      const cartItems = Array.isArray(parsed) ? parsed : [parsed];

      // Add quantity default = 1 if missing
      const cartItemsWithQty = cartItems.map(item => ({
       ...item,
       quantity: item.quantity || 1
      }));

      setDetail(cartItemsWithQty);
    } catch (e) {
      console.error("Invalid cart data", e);
      setDetail([]);
    }
  }
}, []);


  const handleRemove = (id) => {
    const updatedCart = detail.filter((item) => item.id !== id);
    setDetail(updatedCart);
    localStorage.setItem("AddProductData", JSON.stringify(updatedCart));
  };
  const decrementQty = (id) => {
    const updatedCart = detail.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setDetail(updatedCart);
  };
  const incrementQty = (id) => {
    const updatedCart = detail.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setDetail(updatedCart);
  };

  if (!detail || detail.length === 0) {
    return (
      <Typography variant="h6" sx={{ mt: 10, textAlign: "center" }}>
        No product added to cart yet.
      </Typography>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <Grid spacing={2} container>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>Remove</TableCell>
              </TableRow>
            </TableHead>
            {detail.map((item) => (
              <TableBody>
                <TableRow>
                  <TableCell>
                    <img src={item.img} alt="product" width="60" height="60" />
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                          mt: 2,
                        }}
                      >
                        <Button
                          variant="outlined"
                          size="small"
                          disabled={item.quantity <= 1}
                          onClick={() => decrementQty(item.id)}
                        >
                          −
                        </Button>
                        <Typography variant="body1">{item.quantity}</Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          onClick={() => incrementQty(item.id)}
                        >
                          +
                        </Button>
                      </Box>
                    </TableCell>
                  </TableCell>
                  <TableCell>{item.price * item.quantity}</TableCell>
                  <TableCell>
                    <Button onClick={() => handleRemove(item.id)}>
                      Remove
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </Grid>
    </Container>
  );
};

export default AddToCart;
