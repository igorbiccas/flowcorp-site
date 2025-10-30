import React from 'react';
import type { Product } from '../types';
import { ArrowRightIcon } from './icons';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const status = product.status.toUpperCase();

  return (
    <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_90px_-60px_rgba(30,64,175,0.65)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_45px_110px_-70px_rgba(59,130,246,0.75)]">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
      {product.icon}
      <div className="space-y-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-200">
          {status}
        </span>
        <h3 className="text-2xl font-semibold tracking-tight text-white">{product.title}</h3>
        <p className="text-sm font-medium text-slate-200/80">{product.subtitle}</p>
      </div>
      <p className="text-base leading-relaxed text-slate-200/80">{product.description}</p>
      <div className="mt-auto pt-2">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/button inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/60 bg-blue-500/90 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f172a]"
        >
          <span>{product.buttonText}</span>
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;