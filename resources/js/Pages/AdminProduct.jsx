import React, { useState } from 'react';
import Admin from './Admin';

const initialItem = {
  name: 'Dusk Dark Hue',
  model: 'Perfumes',
  price: '105.2',
  quantity: '7',
  image: '' // Thêm trường image vào state items
};

export default function AdminProduct({props}) {
  const [item, setItem] = useState(initialItem);
  console.log(props);
  // const fetchProducts = (userId) => {
  //   axios.get(`http://localhost:8000/api/cart/${userId}`)
  //     .then(response => {
  //       // setProducts([...response.data.data]);
  //       setCartItems([...response.data.data]);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching cart items:', error);
  //     });
  // };
  const onChange = (ev, type) => {
    const { id, value } = ev.target;
    if (type === 'file') {
      const file = ev.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setItem(prevItem => ({
            ...prevItem,
            image: reader.result // Lưu đường dẫn của ảnh vào trường image
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setItem(prevItem => ({
        ...prevItem,
        [id]: id === 'price' ? parseFloat(value) : value // Convert price to float
      }));
    }
  };

  const handleUpdateItem = () => {
    
    // Cập nhật logic lưu sản phẩm vào database ở đây
  };

  return (
    <Admin>
      <div className="flex-1 p-5 overflow-y-auto pr-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Sản phẩm</h1>
        <div className='bg-white flex w-[700px] p-4 gap-6 rounded-lg'>
          <div>
            <div className='w-[350px] h-[400px] border'>
              <img className='object-cover w-full h-full' src={item.image} alt="" />
            </div>
            <input type="file" onChange={(ev) => onChange(ev, 'file')} accept="image/*" />
          </div>
          <form>
            <div className="flex flex-col gap-6 w-72">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Name
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder={item.name} autoComplete="off" onChange={(ev) => onChange(ev, 'text')} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Model
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="model" type="text" placeholder={item.model} autoComplete="off" onChange={(ev) => onChange(ev, 'text')} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Price
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="price" type="text" placeholder={item.price} autoComplete="off" onChange={(ev) => onChange(ev, 'text')} />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Quantity
                  </label>
                  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="quantity" type="text" placeholder={item.quantity} autoComplete="off" onChange={(ev) => onChange(ev, 'text')} />
                </div>
              </div>
              <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button" onClick={handleUpdateItem}>
                Cập nhật
              </button>
            </div>
          </form>
        </div>
      </div>
    </Admin>
  );
}
