// components/common/Card.tsx
import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
