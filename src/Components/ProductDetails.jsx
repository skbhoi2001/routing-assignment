import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const [prod, setProd] = useState({});
  const pharms = useParams();
  useEffect(() => {
    if (pharms.id) {
      fetch(
        `https://json-server-skb-assignment.herokuapp.com/data2/${pharms.id}`
      )
        .then((r) => r.json())
        .then((data) => setProd(data));
    }
  }, [pharms]);
  return (
    <div>
      <div style={{ display: "flex", gap: "10%", textAlign: "center" }}>
        <p>{prod.id}</p>
        <h1>{prod.name}</h1>
        <h5>₹{prod.price}</h5>
      </div>
    </div>
  );
};
