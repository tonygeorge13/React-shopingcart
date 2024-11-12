import "./App.css";
import { Routes, Route } from "react-router-dom";
import Store from "./components/Store";
import About from "./components/About";
import Navbar from "./components/Navbar";

import ShoppingCartProvider from "../src/components/context/ShopingCartContext";
function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className="container  ">
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
