import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button 
      className={`px-6 py-2 bg-sky text-black rounded hover:bg-sand transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}