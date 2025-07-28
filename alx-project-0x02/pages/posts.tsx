// pages/posts.tsx
import React from 'react';
import Header from '@/components/layout/Header';

const Posts = () => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <p>List of blog posts will go here.</p>
      </div>
    </div>
  );
};

export default Posts;
