import "./App.css";

import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    
  );
}

export default App;
