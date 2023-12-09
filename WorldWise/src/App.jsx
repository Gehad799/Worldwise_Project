import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="pricing" element={<Pricing />} />
        <Route path="product" element={<Product />} />
        <Route path="app" element={<h1>App Layout</h1>} />
        <Route path="login" element={<Login />} />

        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
