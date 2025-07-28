// pages/home.tsx
import React from "react";
import Card from "@/components/common/Card";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Card title="Card 1" content="Content for the first card." />
      <Card title="Card 2" content="Content for the second card." />
    </div>
  );
};

export default HomePage;

