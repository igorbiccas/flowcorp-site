export interface ProductCta {
  label: string;
  url: string;
}

export interface Product {
  title: string;
  description: string;
  status: string;
  primaryCta: ProductCta;
  secondaryCta: ProductCta;
}
