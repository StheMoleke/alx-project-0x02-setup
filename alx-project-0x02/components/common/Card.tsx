// components/common/Card.tsx

import React from 'react';
import { type CardProps } from '@/interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
