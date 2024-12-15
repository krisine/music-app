import React from 'react';
import { Home, Heart, Upload, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  
  return (
    <div className="h-screen w-full max-w-md mx-auto bg-gray-900 text-white relative">
      {children}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <Link to="/home" className={`flex flex-col items-center ${location.pathname === '/home' ? 'text-purple-500' : 'text-gray-400'}`}>
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link to="/likes" className={`flex flex-col items-center ${location.pathname === '/likes' ? 'text-purple-500' : 'text-gray-400'}`}>
            <Heart size={24} />
            <span className="text-xs mt-1">Love</span>
          </Link>
          <Link to="/upload" className={`flex flex-col items-center ${location.pathname === '/upload' ? 'text-purple-500' : 'text-gray-400'}`}>
            <Upload size={24} />
            <span className="text-xs mt-1">Upload</span>
          </Link>
          <Link to="/profile" className={`flex flex-col items-center ${location.pathname === '/profile' ? 'text-purple-500' : 'text-gray-400'}`}>
            <User size={24} />
            <span className="text-xs mt-1">Me</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}