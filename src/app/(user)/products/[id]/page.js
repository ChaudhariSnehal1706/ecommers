'use client';

import { useParams } from 'next/navigation';
import { useAppSelector, useAppDispatch } from '../../../../store/hooks';
import { addToCart } from '../../../../store/slices/cartSlice';
import Image from 'next/image';
import { useState } from 'react';

export default function ProductDetailPage() {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(state => state.products);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 dark:text-gray-500 text-6xl mb-4">❌</div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
            Product not found
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            The product you're looking for doesn't exist
          </p>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity };
    dispatch(addToCart(productWithQuantity));
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative h-96 lg:h-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-500'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">
                    {product.rating} ({Math.floor(Math.random() * 100) + 50} reviews)
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                  ${product.price}
                </h3>
                <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                  Free shipping on orders over $50
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Description</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Brand</h4>
                <p className="text-gray-600 dark:text-gray-400">{product.brand}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Quantity</h4>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-16 text-center text-lg font-medium text-gray-800 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors mb-3"
                >
                  Add to Cart - ${(product.price * quantity).toFixed(2)}
                </button>
                <button className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-4 px-6 rounded-lg text-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                  Buy Now
                </button>
              </div>

              {/* Additional Info */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Availability:</span>
                    <span className="ml-2 text-green-600 dark:text-green-400 font-medium">In Stock</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">SKU:</span>
                    <span className="ml-2 text-gray-800 dark:text-white">SKU-{product.id}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Return Policy:</span>
                    <span className="ml-2 text-gray-800 dark:text-white">30 Days</span>
                  </div>
                  <div>
                    <span className="text-gray-500 dark:text-gray-400">Warranty:</span>
                    <span className="ml-2 text-gray-800 dark:text-white">1 Year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
