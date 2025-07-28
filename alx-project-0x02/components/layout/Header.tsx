// components/layout/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-100 p-4 flex gap-4 shadow">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
};

export default Header;

