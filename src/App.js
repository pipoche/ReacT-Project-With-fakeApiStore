import React, { useEffect, useState } from "react";
//import Card from "./components/Card/Card";
import Header from "./components/NavBar/Header";
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Shop from "./pages/Shop/Shop";
import Signin from "./pages/Signin/Signin";
import SignUP from "./pages/signup/Signup";
const styleContainer = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gap: "24px",
  position: "relative",
};
function App() {
  const [products, setProducts] = useState([]);

  const GetProducts = async () => {
    await fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    GetProducts();
  }, []);
  return (
    <main className="App">
      <Header />

      <Routes>
        
        <Route path="/" element={<Home products={products}  />} />

        <Route path="/contact-us" element={<Contact />} />
        <Route path="/shop" element={<Shop products={products} styleContainer={styleContainer}/>} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/SIGNUP" element={<SignUP />} />
      </Routes>
    </main>
  );
}

export default App;
