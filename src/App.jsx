import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Product from "./pages/Product";
import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import RegisterExperience from "./pages/RegisterExperience";
// import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="register/experience" element={<RegisterExperience />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
