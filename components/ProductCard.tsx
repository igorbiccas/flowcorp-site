import React from 'react';
import type { Product } from '../types';
import { ArrowRightIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const status = product.status.toUpperCase();

  return (
    <div className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_35px_90px_-60px_rgba(15,23,42,0.5)]">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      {product.icon}
      <div className="space-y-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
          {status}
        </span>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">{product.title}</h3>
        <p className="text-sm font-medium text-slate-500">{product.subtitle}</p>
      </div>
      <p className="text-base leading-relaxed text-slate-600">{product.description}</p>
      <div className="mt-auto pt-2">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/button inline-flex items-center justify-center gap-2 rounded-full border border-slate-900/10 bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          <span>{product.buttonText}</span>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;