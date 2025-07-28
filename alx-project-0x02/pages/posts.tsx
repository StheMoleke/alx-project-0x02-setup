import React, { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";

interface APIResponse {
  title: string;
  body: string; // JSONPlaceholder uses `body` instead of `content`
  userId: number;
  id: number;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<APIResponse[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data.slice(0, 10)); // fetch first 10 posts only
    };

    fetchPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          content={post.body}
          userId={post.userId}
        />
      ))}
    </div>
  );
};

export default PostsPage;
