
import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:border-neutral-700 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-1">
      {product.icon}
      <h3 className="text-xl font-bold text-neutral-100 mb-2">{product.title}</h3>
      <p className="text-neutral-400 mb-4 text-base font-medium">{product.subtitle}</p>
      <p className="text-neutral-300 mb-6 flex-grow">{product.description}</p>
      <div className="flex items-center justify-between mt-auto pt-4">
        <span className="text-xs font-semibold uppercase tracking-wider bg-neutral-800 text-neutral-400 px-3 py-1 rounded-full">{product.status}</span>
        <a 
          href={product.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-5 py-2 text-sm font-semibold text-neutral-950 bg-neutral-100 rounded-lg transition-colors hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
        >
          {product.buttonText}
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
