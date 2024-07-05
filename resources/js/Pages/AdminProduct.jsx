import React from 'react'

import ProductDisplay from '@/Components/ProductDisplay'

const item = {
  'name':'Dusk Dark Hue',
  'model':'Perfumes',
  'price':'105.2',
  'quantity': '7',
  'image':'https://pagedone.io/asset/uploads/1701162880.png'
}

export default function AdminProduct() {
  
  return(
  <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 dark:border-gray-700">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">Sidebar</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Các mục menu sẽ ở đây</p>
        </div>
      </div>

      <div className="flex-1 p-5 overflow-y-auto pr-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Sản phẩm </h1>
        <div className='bg-white flex w-[700px] h-[700px] p-4 gap-6 rounded-lg'>
          <div>
            <div className='w-[350px] h-[350px] cover'>
              <img src={item.image} alt="" />
            </div>

          </div>
          <div>
            <h2>{item.name}</h2>
            <p>{item.model}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>

          </div>

        </div>
      </div>
    </div>
  );
}
