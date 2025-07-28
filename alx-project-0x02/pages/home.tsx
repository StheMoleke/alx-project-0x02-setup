// pages/home.tsx
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

export default function Home() {
  const [posts, setPosts] = useState([
    { title: "Hello World", content: "This is a sample post." }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addPost = (post: { title: string; content: string }) => {
    setPosts([...posts, post]);
  };

  return (
    <div>
      <Header />
      <div className="p-4">
        <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Post
        </button>

        <div className="mt-4 space-y-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </div>

      {isModalOpen && (
        <PostModal
          onClose={() => setIsModalOpen(false)}
          onSubmit={(post) => {
            addPost(post);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
}
