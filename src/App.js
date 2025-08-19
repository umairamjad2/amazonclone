import "./App.css";
import Navbar from "./components/Navbar/navbar";
import HomeScreen from "./Screen/HomeScreen/homeScreen";
import { Routes, Route } from "react-router-dom";
import Product from "./Screen/Product/product";
import Footer from "./components/Footer/footer";
import Cart from "./Screen/Cart/cart";
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
