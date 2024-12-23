import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Radio, Twitter, Linkedin, MessageSquare } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('password123');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, use these credentials:
    // email: demo@example.com
    // password: password123
    if (email === 'demo@example.com' && password === 'password123') {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <Radio className="w-32 h-32 text-purple-500 mx-auto mb-8" />
        
        {!showPassword ? (
          <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6">Log in</h2>
            <div className="relative mb-6">
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <button
              onClick={() => setShowPassword(true)}
              className="w-full bg-purple-500 text-white py-3 rounded-full hover:bg-purple-600 transition-colors mb-6"
            >
              Next
            </button>
            <p className="text-gray-400 text-center mb-4">More ways to register</p>
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
            <p className="text-center mt-6 text-gray-400">
              No account?{' '}
              <button onClick={() => navigate('/register')} className="text-red-500">
                Sign up
              </button>
            </p>
          </div>
        ) : (
          <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-3xl">
            <h2 className="text-2xl font-bold text-white mb-6">Log in</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  disabled
                  className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-full"
                />
              </div>
              <div className="mb-6">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-gray-700/50 text-white px-4 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="flex items-center text-sm text-gray-400">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
                <button type="button" className="text-sm text-purple-500">
                  Forgot password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-500 text-white py-3 rounded-full hover:bg-purple-600 transition-colors"
              >
                Log in
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}