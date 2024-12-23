import React from 'react';
import { Radio } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <Radio className="w-32 h-32 text-purple-500 mb-8" />
      <div className="w-full max-w-sm bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl">
        {children}
      </div>
    </div>
  );
}