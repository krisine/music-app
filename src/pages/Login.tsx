import React from 'react';
import { Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen bg-gray-900 flex flex-col items-center justify-center p-8">
        <div className="w-full max-w-sm bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl">
          <h2 className="text-2xl font-bold text-white mb-6">Log in</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-full mb-4"
          />
          <div className="mt-8">
            <p className="text-gray-400 text-center mb-4">
              More ways to register
            </p>
            <div className="flex justify-center gap-4">
              <button className="p-2 bg-blue-400 rounded-full">
                <Twitter className="w-6 h-6 text-white" />
              </button>
              <button className="p-2 bg-blue-600 rounded-full">
                <Linkedin className="w-6 h-6 text-white" />
              </button>
              <button className="p-2 bg-green-500 rounded-full">
                <MessageSquare className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
          <p className="text-center mt-6 text-gray-400">
            Existing account?{' '}
            <button onClick={() => navigate('/home')} className="text-red-500">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </>
  );
}
