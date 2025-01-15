import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import AddProduct from "./component/AddProduct";
import EditProduct from "./component/EditProduct";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <main className="py-6 px-4">

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addProduct" element={<AddProduct />}></Route>
          <Route path="/editProduct/:id" element={<EditProduct />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
