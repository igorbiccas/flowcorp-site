import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-brand-background inline-flex items-center justify-center";
  
  const primaryStyle = "bg-white text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(0,180,216,0.3)] focus:ring-brand-cyan/50";
  const secondaryStyle = "bg-transparent border border-brand-border text-brand-text-secondary hover:bg-white/5 hover:text-white focus:ring-brand-blue/50";

  const styles = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${styles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;