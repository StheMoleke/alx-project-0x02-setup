import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page of the project.</p>
    </div>
  );
};

export default AboutPage;
// pages/about.tsx
import React from 'react';
import Button from '@/components/common/Button';

const About = () => {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">About Page</h1>
      <Button size="small" shape="rounded-sm">Small Button</Button>
      <Button size="medium" shape="rounded-md">Medium Button</Button>
      <Button size="large" shape="rounded-full">Large Button</Button>
    </div>
  );
};

export default About;
