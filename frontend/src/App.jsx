import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";
import { Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import ProductDetails from "./Pages/ProductDetails";
import Products from "./Pages/Products";
import { useSelector } from "react-redux";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";
import { Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function App() {
  const { token } = useSelector((state) => state.auth);
  return (
    <>
      <Navbar />
      <Box sx={{ minHeight: "70vh" }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/products/:categoryId/:categotryName"
            element={<Products />}
          />
          <Route
            path="/product-details/:id/:name"
            element={<ProductDetails />}
          />
          <Route
            path="/cart"
            element={token ? <Cart /> : <Navigate to={"/auth"} />}
          />
          <Route
            path="/auth"
            element={!token ? <Auth /> : <Navigate to={"/"} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Box>
      <Footer />
    </>
  );
}
