import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playground from "@/playground/Playground";
import ProductExtensionPage from "@/pages/product-extension-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductExtensionPage />} />
        <Route path="/playground" element={<Playground />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
