import { Navbar } from "./Components/Navbar";
import { AllRoutes } from "./routes/AllRoutes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}
