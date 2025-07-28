// components/common/Button.tsx
import React from 'react';
import { type ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ size, shape, children }) => {
  const sizeClass = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  }[size];

  return (
    <button className={`bg-blue-500 text-white ${sizeClass} ${shape}`}>
      {children}
    </button>
  );
};

export default Button;
