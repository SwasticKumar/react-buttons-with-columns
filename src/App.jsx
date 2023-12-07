import { useState } from "react";
import "./App.css";
import { Home } from "./Components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
