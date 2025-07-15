import React from "react";
import ProductListCard from "../Category/ProductListCard";
import ShortBanner from "../Banner/ShortBanner";
import { Container } from "@mui/material";

const NewProductList = () => {
  return (
    <>
      <ShortBanner />
      <Container>
        <ProductListCard />
      </Container>
      
    </>
  );
};

export default NewProductList;
