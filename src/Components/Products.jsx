import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const goToProduct = (item) => {
    navigate(`/products/${item.id}`);
  };

  useEffect(() => {
    fetch("https://json-server-skb-assignment.herokuapp.com/data2")
      .then((r) => r.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {products.map((item) => {
                return (
                  <>
                    <div>
                      <div>
                        <h2>{item.name}</h2>
                      </div>
                      <button onClick={() => goToProduct(item)}>
                        View More
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          }
        />
        <Route path=":id" element={<ProductDetails />} />
        <Route path="new" element={<>New To the </>} />
      </Routes>
    </div>
  );
};
