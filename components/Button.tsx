import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  children: React.ReactNode;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '', 
  showArrow = false,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-bg focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    secondary: "bg-brand-card text-brand-text hover:bg-brand-cardHover border border-transparent",
    outline: "bg-transparent text-brand-text border border-white/20 hover:border-white hover:bg-white/5",
    ghost: "bg-transparent text-brand-text hover:text-white hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;