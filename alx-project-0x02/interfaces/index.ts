// interfaces/index.ts
export interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface ButtonProps {
  size: 'small' | 'medium' | 'large';
  shape: 'rounded-sm' | 'rounded-md' | 'rounded-full';
  children: React.ReactNode;
}
