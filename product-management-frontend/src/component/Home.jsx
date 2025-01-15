import React, { useEffect, useState } from "react";
import productService from "../service/product.service";
import { Link } from "react-router-dom";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);



  const init = () =>
  {
    productService
      .getAllProducts()
      .then((res) => {
        console.log(res.data);
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }


  const deleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      productService
        .deleteProduct(id)
        .then((res) => {
          setMsg("Product deleted successfully!");
          init();
          //setProductList(productList.filter((p) => p.id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center py-8">
      <div className="max-w-5xl w-full bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">Product List</h2>

        {msg && (
          <div className="bg-green-500 text-white p-4 rounded-md mb-4 shadow-md border-l-4 border-green-700">
            <p className="text-sm font-medium">{msg}</p>
          </div>
        )}

        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-200 text-left">S.No.</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Product Name</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Description</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Price</th>
              <th className="px-4 py-2 border border-gray-200 text-left">Status</th>
              <th className="px-4 py-2 border border-gray-200 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((p, num) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border border-gray-200 text-left">
                  {num + 1}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-left">
                  {p.productName}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-left">
                  {p.description}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-left">
                  {p.price}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-left">
                  {p.status}
                </td>
                <td className="px-4 py-2 border border-gray-200 text-center space-x-2">
                  {/* Edit Button */}
                  <Link
                    to={'/editProduct/'+p.id}
                    className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200"
                  >
                    Edit
                  </Link>
                  {/* Delete Button */}
                  <button
                    onClick={() => deleteProduct(p.id)}
                    className="px-4 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-full hover:bg-red-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
