import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";
// import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Navigation from "./Component/Navigation";
import Contact from "./Component/Pages/Contact";
import ProductList from "./Component/Pages/ProductList";
import ProductDetail from "./Component/Data/ProductDetail";
import CreateDataProvider from "./Component/Contextask/CreateDataProvider";
import ContextAPI from "./Component/Contextask/ContextAPI";
import Gallery from "./Component/Pages/Gallery";
import Index from "./Component/ContextReducer/Index";
import ContextCount from "./Component/ContextReducer/ContextCount";
import NameProvider from "./Component/ContextReducer/NameProvider";
import NameUpdated from "./Component/ContextReducer/NameUpdated";

function App() {
  const Home = lazy(() => import("./Component/Pages/Home"));
  const About = lazy(() => import("./Component/Pages/About"));
  const Contact = lazy(() => import("./Component/Pages/Contact"));
  const Gallery = lazy(() => import("./Component/Pages/Gallery"));
  const ProductList = lazy(() => import("./Component/Pages/ProductList"));
  const ProductDetail = lazy(() => import("./Component/Data/ProductDetail"));
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Suspense fallback={<div>Loading......</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/product" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <NameProvider>
        <NameUpdated />
      </NameProvider>
    </div>
  );
}

export default App;
