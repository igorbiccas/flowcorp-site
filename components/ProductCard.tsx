import React from 'react';
import type { Product } from '../types';
import { ArrowRightIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const status = product.status.toUpperCase();

  return (
    <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-8 backdrop-blur transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-[0_40px_80px_-50px_rgba(161,161,170,0.4)]">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      {product.icon}
      <div className="space-y-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-900/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
          {status}
        </span>
        <h3 className="text-2xl font-semibold text-zinc-100 tracking-tight">{product.title}</h3>
        <p className="text-sm font-medium text-zinc-400">{product.subtitle}</p>
      </div>
      <p className="text-base leading-relaxed text-zinc-300/90">{product.description}</p>
      <div className="mt-auto pt-2">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/button inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700/60 bg-zinc-100 px-5 py-2 text-sm font-semibold text-zinc-900 transition hover:border-zinc-100 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          <span>{product.buttonText}</span>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;