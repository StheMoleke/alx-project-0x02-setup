import React from "react";
import Card from "../components/common/Card";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>

      <Card
        title="Card 1"
        content="This is the content of the first card."
      />

      <Card
        title="Card 2"
        content="This is some different content for the second card."
      />
    </div>
  );
};

export default HomePage;
