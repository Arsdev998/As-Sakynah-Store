import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./pages/shop";
import Shopcategory from "./pages/shopcategory";
import Product from "./pages/product";
import Cart from "./pages/cart";
import LoginSignup from "./pages/loginsign";
import Footer from "./components/Footer/Footer";
import ikhwah_banner from "./components/assets/Banner-Ikhwan.jpg";
import akhwat_banner from "./components/assets/Banner-Akhwat.jpg";
import kids_banner from "./components/assets/Banner-Kids.jpg";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/ikhwah"
            element={<Shopcategory banner={ikhwah_banner} category="ikhwah" />}
          />
          <Route
            path="/akhwat"
            element={<Shopcategory banner={akhwat_banner} category="akhwat" />}
          />
          <Route
            path="/kids"
            element={<Shopcategory banner={kids_banner} category="kids" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
