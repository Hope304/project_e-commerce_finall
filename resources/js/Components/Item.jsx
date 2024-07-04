import React from 'react'
import { Link } from '@inertiajs/react'


  

export default function (props) {
    const product = props.product
  return (
    <>
        <div key={product.id} className='group relative shadow-sm '>
            <div className="bg-white p-4 rounded-md"> 
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img 
                        src={product.image} 
                        alt={product.imageAlt} 
                        className='h-full w-full object-center'
                    />
                </div>
                <div className="mt-4 flex justify-between ">
                    <div>
                    <h3 className="text-sm text-gray-700">
                        <Link>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
            </div>
        </div>
    </>
  )
}
