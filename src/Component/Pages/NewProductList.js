import React from "react";
import ProductListCard from "../Category/ProductListCard";
import ShortBanner from "../Banner/ShortBanner";
import { Container } from "@mui/material";

const NewProductList = () => {
  return (
    <>
      <ShortBanner  title='About Us'/>
      <Container>
        <ProductListCard />
      </Container>
      
    </>
  );
};

export default NewProductList;
