import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-200 group-hover:opacity-100" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-violet-500/10 to-sky-500/10 blur-xl" />
      </div>
      <div>
        <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          {product.status}
        </span>
        <h3 className="mt-6 text-2xl font-semibold leading-tight text-white">{product.title}</h3>
        <p className="mt-4 text-base leading-[1.5] text-white/70">{product.description}</p>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={product.primaryCta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-200 hover:shadow-[0_0_28px_rgba(99,102,241,0.3)]"
        >
          {product.primaryCta.label}
        </a>
        <a
          href={product.secondaryCta.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:border-white/50 hover:text-white"
        >
          {product.secondaryCta.label}
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
