import React from 'react';
import type { Product } from '../types';
import { ArrowRightIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:border-zinc-700 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-2">
      {product.icon}
      <h3 className="text-xl font-bold text-zinc-100 mb-2">{product.title}</h3>
      <p className="text-zinc-400 mb-4 text-base font-medium">{product.subtitle}</p>
      <p className="text-zinc-300 mb-6 flex-grow">{product.description}</p>
      <div className="flex items-center justify-between mt-auto pt-4">
        <span className="text-xs font-semibold uppercase tracking-wider bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full">{product.status}</span>
        <a 
          href={product.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="group/button flex items-center px-5 py-2 text-sm font-semibold text-black bg-white rounded-lg transition-colors hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-950"
        >
          <span>{product.buttonText}</span>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;