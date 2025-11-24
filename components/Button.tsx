import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-brand transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  
  const variants = {
    primary: "bg-realvo-blue text-white hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 focus:ring-realvo-blue dark:focus:ring-offset-realvo-charcoal",
    secondary: "bg-realvo-teal text-white hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 focus:ring-realvo-teal",
    outline: "border-2 border-realvo-blue text-realvo-blue dark:border-white dark:text-white hover:bg-realvo-blue hover:text-white dark:hover:bg-white dark:hover:text-realvo-charcoal",
    ghost: "text-realvo-charcoal dark:text-gray-300 hover:bg-realvo-light dark:hover:bg-gray-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;