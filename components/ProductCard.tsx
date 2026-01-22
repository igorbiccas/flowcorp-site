import React from 'react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <article className="group relative block space-y-4 rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04]">
      <div className="space-y-2">
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
          {product.status}
        </span>
        <h3 className="text-xl font-medium text-white">{product.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">{product.description}</p>
      </div>
      <div className="flex gap-4 pt-4">
        <a
          href={product.primaryCta.url}
          className="text-xs font-medium uppercase tracking-widest text-white transition-opacity hover:opacity-70"
        >
          {product.primaryCta.label} →
        </a>
      </div>
    </article>
  );
};

export default ProductCard;
