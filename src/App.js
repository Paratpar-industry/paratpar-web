import "./App.css";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import AboutUs from "./component/AboutUs";
import Home from "./component/Home";
import ContectUs from "./component/ContectUs";
import ProductDetail from "./component/ProductDetail";
import Product from "./component/Product";
import ErrorPage from "./component/ErrorPage";
import FormSpark from "./component/FormSpark";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import  { Toaster } from "react-hot-toast";

function App() {
  console.log = () => {};
  console.error = () => {};
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productdetail/:id" element={<ProductDetail />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/contact" element={<ContectUs />} />
        <Route exact path="/formspark" element={<FormSpark />} />
        <Route exact path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
