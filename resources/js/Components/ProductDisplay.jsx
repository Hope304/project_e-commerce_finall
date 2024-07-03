import React from 'react'
import Item from '@/Components/Item'
export default function ProductDisplay({header,item,children}) {
  return (
    <>

        <div className="bg-white mt-5 max-w-7xl mx-auto rounded-lg shadow py-6 px-4 sm:px-6 lg:px-8">
            <header className='inline-flex items-end'>
                <div className='bg-red-500 w-5 h-10 rounded-md'></div>
                <span className='text-red-500 font-bold text-xl'>{header}</span>
            </header>
            <main className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <Item/>   
            </main>
        </div>
    </>
  )
}
