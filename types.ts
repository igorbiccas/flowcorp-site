
import React from 'react';

export interface Product {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  status: string;
  buttonText: string;
  url: string;
}
