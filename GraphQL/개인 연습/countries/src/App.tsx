import { BrowserRouter, Routes, Route } from "react-router-dom";
import Country from "./pages/Country";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryCode" element={<Country />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
