import ProductDisplay from '@/Components/ProductDisplay'
import axios from 'axios';
import React, { useEffect, useState} from 'react'

export default function FlashSale() {

  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('http://localhost:8000/api/product')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  };

  const handleProductClick = () => {
    fetchProducts();
  };

  return (
    <>
        <ProductDisplay products={products} header={'FlashSale'} onProductClick={handleProductClick}/>
    </>
  )
}
