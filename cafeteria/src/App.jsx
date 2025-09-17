import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
