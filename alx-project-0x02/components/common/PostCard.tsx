import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, body }) => {
  return (
    <div className="border p-4 rounded shadow-sm mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;

