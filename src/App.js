import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
import LoginProvider from "./Component/Auth/LoginProvider";
import Login from "./Component/Auth/Login";
import PrivateRoute from "./Component/Auth/LoginPrivateRoute";
import Navigation from "./Component/Navigation";
import ProductListCard from "./Component/Category/ProductListCard";
import NewProductList from "./Component/Pages/NewProductList";
import NewProductDetail from "./Component/Pages/NewProductDetail";
import Wishlist from "./Component/Pages/Wishlist";
import HairCare from "./Component/Category/HairCare";
import SkinCare from "./Component/Category/SkinCare";
import BodyCare from "./Component/Category/BodyCare";

function App() {
  const Home = lazy(() => import("./Component/Pages/Home"));
  const About = lazy(() => import("./Component/Pages/About"));
  const Contact = lazy(() => import("./Component/Pages/Contact"));
  const Gallery = lazy(() => import("./Component/Pages/Gallery"));
  const ProductList = lazy(() => import("./Component/Pages/ProductList"));
  const ProductDetail = lazy(() => import("./Component/Data/ProductDetail"));
  return (
    <div className="App">
      <LoginProvider>
        <BrowserRouter>
          <PrivateRoute>
            <Navigation />
          </PrivateRoute>

          <Suspense fallback={<div>Loading......</div>}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Home />
                  </PrivateRoute>
                }
              />
              <Route
                path="/about"
                element={
                  <PrivateRoute>
                    <About />
                  </PrivateRoute>
                }
              />
              <Route
                path="/contact"
                element={
                  <PrivateRoute>
                    <Contact />
                  </PrivateRoute>
                }
              />
              <Route
                path="/gallery"
                element={
                  <PrivateRoute>
                    <Gallery />
                  </PrivateRoute>
                }
              />
              <Route
                path="/product"
                element={
                  <PrivateRoute>
                    <ProductList />
                  </PrivateRoute>
                }
              />

              <Route
                path="/productlist/:id"
                element={
                  <PrivateRoute>
                    <NewProductDetail />
                  </PrivateRoute>
                }
              />
              <Route
                path="/productlist"
                element={
                  <PrivateRoute>
                    <NewProductList />
                  </PrivateRoute>
                }
              />
              <Route
                path="/wish-list"
                element={
                  <PrivateRoute>
                    <Wishlist />
                  </PrivateRoute>
                }
              />
              <Route
                path="/hair-care"
                element={
                  <PrivateRoute>
                    <HairCare />
                  </PrivateRoute>
                }
              />
              <Route
                path="/skin-care"
                element={
                  <PrivateRoute>
                    <SkinCare />
                  </PrivateRoute>
                }
              />
              <Route
                path="/body-care"
                element={
                  <PrivateRoute>
                    <BodyCare />
                  </PrivateRoute>
                }
              />
              <Route
                path="/product/id"
                element={
                  <PrivateRoute>
                    <ProductDetail />
                  </PrivateRoute>
                }
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LoginProvider>
    </div>
  );
}

export default App;
