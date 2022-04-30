import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddFruit from "./pages/AddFruit";
import Fruit from "./pages/Fruit";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruit/:id" element={<Fruit />} />
        <Route path="/add" element={<AddFruit />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
