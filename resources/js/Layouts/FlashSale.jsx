import ProductDisplay from '@/Components/ProductDisplay'
import axios from 'axios';
import React, { useEffect, useState} from 'react'


export default function FlashSale() {
  const [products,setProducts] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:8000/api/product`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error =>{
        console.log(error);
      });
  },[])

  return (
    <>
        <ProductDisplay products={products} header={'FlashSale'} />
    </>
  )
}
