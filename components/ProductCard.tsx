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
      className="group flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-10 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] focus:outline-none focus-visible:-translate-y-1 focus-visible:border-white/20 focus-visible:bg-white/[0.06]"
    >
      <div className="space-y-4">
        <span className="text-[10px] uppercase tracking-[0.35em] text-neutral-400">{status}</span>
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-neutral-300">
            {product.icon}
          </div>
          <div>
            <h3 className="text-2xl font-medium tracking-tight text-neutral-50">{product.title}</h3>
            <p className="text-sm font-medium text-neutral-400">{product.subtitle}</p>
          </div>
        </div>
      </div>
      <p className="text-sm leading-7 text-neutral-400">{product.description}</p>
      <div className="mt-auto pt-2">
        <div className="inline-flex items-center gap-3 text-xs font-medium text-neutral-200">
          <span>{product.buttonText}</span>
          <span className="flex size-9 items-center justify-center rounded-full border border-white/10 text-neutral-300 transition group-hover:border-white/20 group-hover:text-neutral-50">
            <ArrowRightIcon />
          </span>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
