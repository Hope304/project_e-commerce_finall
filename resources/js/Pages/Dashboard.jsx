import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:8000/api/product')
      .then(response => {
        console.log(response.data.data);
        setProducts([...response.data.data]);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      {/* <div className="w-64 bg-white border-r border-gray-200 dark:border-gray-700">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Sidebar</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Các mục menu sẽ ở đây</p>
        </div>
      </div> */}

      <div className="flex-1 p-5 overflow-y-auto pr-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Danh sách sản phẩm</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {products.map((product,i) => (
            <div key={i} className="bg-white shadow-md rounded-lg p-4 flex">
              <img src={product.image} alt={product.name} className="w-48 h-48 object-cover mr-4" />
              <div className='flex gap-4'>
                <div className=''>
                    <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                    <h2 className="text  text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit augue nec diam pretium vehicula.
      Integer gravida, risus a congue scelerisque, ipsum lorem tincidunt velit, et malesuada elit velit quis
      ligula.</h2>
                </div>
                <div>
                    <p className="text-xl text-gray-600 font-bold">${product.price}</p>
                    <p className="text-xl text-gray-600 font-bold">{product.quantity}</p>
                </div>
                <div>
                    <p className="text-xl text-green-500 font-bold">Sửa</p>
                    <p className="text-xl text-red-500 font-bold">Xóa</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
