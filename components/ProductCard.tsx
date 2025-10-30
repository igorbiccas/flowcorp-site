import React from 'react';
import type { Product } from '../types';
import { ArrowRightIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const status = product.status.toUpperCase();

  return (
    <a
      href={product.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-white/10 bg-[#111315] p-8 shadow-[0_30px_80px_-60px_rgba(15,15,15,0.8)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_-55px_rgba(17,17,17,0.85)] focus:outline-none focus-visible:-translate-y-1 focus-visible:shadow-[0_35px_90px_-55px_rgba(17,17,17,0.85)] focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
    >
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
      {product.icon}
      <div className="space-y-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-100">
          {status}
        </span>
        <h3 className="text-2xl font-semibold tracking-tight text-white">{product.title}</h3>
        <p className="text-sm font-medium text-slate-300">{product.subtitle}</p>
      </div>
      <p className="text-base leading-relaxed text-slate-300">{product.description}</p>
      <div className="mt-auto pt-2">
        <span className="group/button inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-2 text-sm font-semibold text-white transition group-hover/button:border-white/20 group-hover/button:bg-white/15 group-focus-visible/button:border-white/20 group-focus-visible/button:bg-white/15">
          <span>{product.buttonText}</span>
          <ArrowRightIcon />
        </span>
      </div>
    </a>
  );
};

export default ProductCard;