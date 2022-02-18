import { Route, Routes } from "react-router-dom";
import { About } from "../Components/About";
import { Home } from "../Components/Home";
import { ProductDetails } from "../Components/ProductDetails";
import { Products } from "../Components/Products";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products/*" element={<Products />}>
          <Route path=":id" element={<ProductDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
