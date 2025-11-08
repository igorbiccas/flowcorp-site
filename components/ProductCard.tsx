import React from 'react';
import type { Product } from '../types';
import { ArrowRightIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-sky-300/40 focus:outline-none focus-visible:-translate-y-1 focus-visible:ring-1 focus-visible:ring-sky-300/50"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex items-center rounded-full border border-sky-200/20 bg-sky-200/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-100/70">
          {product.status}
        </span>
        {product.icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold tracking-tight text-white">{product.title}</h3>
        <p className="text-sm font-medium text-slate-300">{product.subtitle}</p>
      </div>
      <p className="text-base leading-relaxed text-slate-300">{product.description}</p>
      <div className="mt-auto pt-2">
        <span className="group/button inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition group-hover/button:border-white/20 group-hover/button:bg-white/10 group-focus-visible/button:border-white/20 group-focus-visible/button:bg-white/10">
          <span>{product.buttonText}</span>
          <ArrowRightIcon />
        </span>
      </div>
    </a>
  );
};

export default ProductCard;