import React, { useState,useEffect,useContext } from 'react';
import { UserContext } from '@/context/UserContext';
export default function CartItem({cartItem,onQuantityChange}) {
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const { user } = useContext(UserContext);
  const fetchDecreaseQuantity = () => {
    axios.put(`http://localhost:8000/api/cart/${cartItem.id}`)
      .then(response => {
  
      })
      .catch(error => {
        console.error('Error fetching cartItems:', error);
      });
  };
  const fetchDeleteCart = () => {
    axios.delete(`http://localhost:8000/api/cart/${cartItem.id}`)
      .then(response => {
      })
      .catch(error => {
        console.error('Error fetching cartItems:', error);
      });
  };
  const fetchIncreaseQuantity = () => {
    axios.post(`http://localhost:8000/api/cart/${user.id}/${cartItem.product_id}`)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Error fetching cartItems:', error);
      });
  };

  const increaseQuantity = () => {
    fetchIncreaseQuantity();
    const newQuantity = quantity + 1 ;
    setQuantity(quantity + 1);
    onQuantityChange(cartItem.id,newQuantity);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      fetchDecreaseQuantity();
    }else{
      fetchDeleteCart();
    }
    const newQuantity = quantity - 1 ;
    setQuantity(quantity - 1);
    onQuantityChange(cartItem.id,newQuantity);
  };
  const price = parseFloat(cartItem.price);
  const totalPrice = isNaN(price) ? 0 : price * quantity;

  return (
    <>
      {quantity > 0 && (<div className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6">
      <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
        <div className="img-box">
          <img src={cartItem.image} alt="perfume bottle" className="xl:w-[140px]" />
        </div>
        <div className="pro-data w-full max-w-sm">
          <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
            {cartItem.name}
          </h5>
          <p className="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
            {cartItem.model}
          </p>
          <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
          ${cartItem.price}
          </h6>
        </div>
      </div>
      <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
        <div className="flex items-center w-full mx-auto justify-center">
          <button
            className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
            onClick={decreaseQuantity}
          >
            <svg
              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M16.5 11H5.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <input
            type="text"
            className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
            value={quantity}
            readOnly
          />
          <button
            className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
            onClick={increaseQuantity}
          >
            <svg
              className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
              xmlns="http://www.w3.org/2000/svg"
              width={22}
              height={22}
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M11 5.5V16.5M16.5 11H5.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <h6 className="text-indigo-600 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
          ${totalPrice.toFixed(2)} 
        </h6>
      </div>
      </div>)}
    </>
    
  );
}
