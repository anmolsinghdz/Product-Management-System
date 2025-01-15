import React, { useEffect, useState } from "react";
import productService from "../service/product.service";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState({
    id: "",
    productName: "",
    description: "",
    price: "",
    status: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    productService
      .getProductById(id)
      .then((res) => {
        if (!res.data) {
          setMsg("Product not found");
        } else {
          setProduct(res.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setMsg("Error fetching product. Please try again.");
      });
  }, [id]);

  const handleChange = (e) => {
    const value = e.target.value;
    setProduct({ ...product, [e.target.name]: value });
  };

  const ProductUpdate = (e) => {
    e.preventDefault();
    productService
      .editProduct(product)
      .then(() => {
        setMsg("Updated Successfully");
        setTimeout(() => navigate("/"), 1500); // Delay navigation
      })
      .catch((error) => {
        console.error("Error updating product:", error);
        setMsg("Error updating product. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Edit Product
        </h2>
        {msg && (
          <div
            className={`p-4 rounded-md mb-4 shadow-md border-l-4 ${
              msg.includes("Error")
                ? "bg-red-500 text-white border-red-700"
                : "bg-green-500 text-white border-green-700"
            }`}
          >
            <p className="text-sm font-medium">{msg}</p>
          </div>
        )}

        <form
          action="#"
          method="POST"
          className="space-y-4"
          onSubmit={ProductUpdate}
        >
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
              onChange={handleChange}
              value={product.productName}
            />
          </div>

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
              onChange={handleChange}
              value={product.description}
            ></textarea>
          </div>

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
              onChange={handleChange}
              value={product.price}
            />
          </div>

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
              value={product.status}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={handleChange}
            >
              <option value="Available">Available</option>
              <option value="Out-of-Stock">Out of Stock</option>
            </select>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
