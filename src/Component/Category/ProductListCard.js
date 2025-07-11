import React from "react";
import HairData from "../Data/HairData";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductListCard = () => {
  return (
    <>
      <h1>Our Product</h1>
      <Grid container spacing={2} sx={{ paddingY: "10px" }}>
        {HairData.map((item, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <Link to={`/productlist/${item.id}`} style={{ textDecoration: "none" }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.img}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductListCard;
