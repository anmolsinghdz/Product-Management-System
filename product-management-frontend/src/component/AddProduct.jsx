// src/components/AddProduct.jsx

import React, { useState } from "react";
import productService from "../service/product.service";
import { useNavigate } from "react-router-dom";

// This is a functional component using const
const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();
    productService
      .saveProduct(product)
      .then((res) => {
        console.log("Product Added Successfully");
        setMsg("Product Added Successfully");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
        });
        setTimeout(() => navigate("/"), 1500); // Delay navigation
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [msg, setMsg] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add New Product
        </h2>
        {msg && (
          <div className="bg-red-500 text-white p-4 rounded-md mb-4 shadow-md border-l-4 border-red-700">
            <p className="text-sm font-medium">{msg}</p>
          </div>
        )}

        <form
          action="#"
          method="POST"
          className="space-y-4"
          onSubmit={(e) => ProductRegister(e)}
        >
          {/* Product Name */}
          <div>
            <label
              htmlFor="productName"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => handleChange(e)}
              value={product.productName}
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => handleChange(e)}
              value={product.description}
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => handleChange(e)}
              value={product.price}
            />
          </div>

          {/* Status */}
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              required
              value={product.status || "Available"} // Default value when the user does not select
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) => handleChange(e)}
            >
              <option value="Available">Available</option>
              <option value="Out-of-Stock">Out of Stock</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
