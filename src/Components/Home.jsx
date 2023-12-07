import { Buttons } from "./Buttons";
import { NavBar } from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { Table } from "./Table";
import { useState } from "react";

const Home = () => {
  const [columns, setColumns] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/buttons" element={<Buttons setColumns={setColumns} />} />
        <Route path="/table" element={<Table columns={columns} />} />
      </Routes>
    </>
  );
};

export { Home };
