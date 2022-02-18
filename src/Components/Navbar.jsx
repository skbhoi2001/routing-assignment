import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div
        style={{
          width: "50%",
          display: "flex",
          gap: "50px",
          textAlign: "center",
          margin: "auto"
        }}
      >
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="products">Products</Link>
      </div>
    </div>
  );
};
