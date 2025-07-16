import { Container } from "@mui/material";
import ShortBanner from "../Banner/ShortBanner";
import AllProduct from "../Data/AllProduct";
import Footer from "../Footer/Footer";

const ProductList = () => {
  return (
    <>
    <ShortBanner title="All Products"/>
    <Container  >
      <AllProduct/>
    </Container>
    <Footer/>
    </>
  );
};

export default ProductList;
