import React from 'react'
import { Link } from '@inertiajs/react';

export default function Hero({header}) {
  return (
    <>
    <div className= "flex justify-between mt-5 max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
      <div className='basis-1/4 bg-white rounded-md'>
        <ul className=' list-none text-center'>
          <li className='py-3 border-b-2'>
            <Link className='list-none  hover:text-indigo-600'> Điện thoại
            </Link>
          </li>
          <li className='py-3 border-b-2'>
            <Link className='list-none  hover:text-indigo-600'> Điện thoại
            </Link>
          </li>
          <li className='py-3 border-b-2'>
            <Link className='list-none  hover:text-indigo-600'> Điện thoại
            </Link>
          </li>
          <li className='py-3 border-b-2'>
            <Link className='list-none  hover:text-indigo-600'> Điện thoại
            </Link>
          </li>
          
        </ul>
      </div>
      <div className='basis-2/3'>
        <div className='bg-white w-full h-full rounded-lg'>

        </div >
      </div>
    </div>
    </>
  )
}
