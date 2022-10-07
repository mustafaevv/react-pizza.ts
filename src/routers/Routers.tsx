import { Route, Routes } from "react-router-dom";

import Cart from "../pages/Cart";
import Category from "../pages/Category";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<Category />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;
