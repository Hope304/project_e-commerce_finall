import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CartItem from '@/Components/CartItem';
import { UserContext } from '@/context/UserContext';

export default function CartLayout() {
  const { user } = useContext(UserContext);
  const [cartItems, setCartItems] = useState([]);
  const userId = user ? user.id : null;

  useEffect(() => {
    if (userId) {
      fetchProducts(userId);
    }
  }, [userId]);

  const fetchProducts = (userId) => {
    axios.get(`http://localhost:8000/api/cart/${userId}`)
      .then(response => {
        // setProducts([...response.data.data]);
        setCartItems([...response.data.data]);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  };
  return (
    <section className="py-10 relative">
      <div className="bg-white w-full max-w-7xl p-4 rounded-lg md:p-8 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">Shopping Cart</h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500">Product</div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">Delivery Charge</span>
            <span className="w-full max-w-[260px] text-center">Quantity</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </p>
        </div>
        {cartItems.map((product, index) => (
          <CartItem key={index} cartItem={product} onQuantityChange={handleQuantityChange} />
        ))}
        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full py-6">
            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">Total</p>
            <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">${calculateTotalPrice()}</h6>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <button className="rounded-full py-4 w-full max-w-[280px]  flex items-center bg-indigo-50 justify-center transition-all duration-500 hover:bg-indigo-100">
            <span className="px-2 font-semibold text-lg leading-8 text-indigo-600">Add Coupon Code</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
              <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#4F46E5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
            Continue to Payment
            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width={23} height={22} viewBox="0 0 23 22" fill="none">
              <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
