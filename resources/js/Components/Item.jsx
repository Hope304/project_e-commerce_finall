import React from 'react';
import { Link } from '@inertiajs/react';

export default function ProductCard({ product }) {
    const isSoldOut = product.quantity === 0;
    const handleProductClick = () => {
        if (!isSoldOut) {
            console.log("Product ID:", product.id);
            // Add your desired functionality here (e.g., add to cart logic)
        }
    };
    return (
        <div
            key={product.id}
            onClick={handleProductClick}
            className={`group relative shadow-sm ${isSoldOut ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{ pointerEvents: isSoldOut ? 'none' : 'auto' }}
        >
            <div className="bg-white p-4 rounded-md">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="h-full w-full object-center"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <Link aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Số lượng: {product.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}$</p>
                </div>
            </div>

            <div
                className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 rounded-md
                            ${isSoldOut ? 'opacity-100' : 'group-hover:opacity-100'} transition-opacity duration-300`}
            >
                <span className="text-white text-lg font-semibold">
                    {isSoldOut ? 'Sold Out' : 'Add to cart'}
                </span>
            </div>
        </div>
    );
}
