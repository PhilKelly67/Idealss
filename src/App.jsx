import Home from "./components/home";
import Collections from "./components/collections";
import { Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/collections" element={<Collections />} />
    </Routes>
  );
}
