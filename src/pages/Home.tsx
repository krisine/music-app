import React from 'react';
import { Bell, Search } from 'lucide-react';
import Layout from '../components/Layout';
import MusicCard from '../components/MusicCard';
import { songs } from '../data/songs';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="p-6 pb-24">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold">Hello, Bryce</h1>
          </div>
          <Bell className="w-6 h-6 text-gray-400" />
        </div>

        <div 
          className="relative mb-8 cursor-pointer"
          onClick={() => navigate('/search')}
        >
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <div className="w-full bg-gray-800 text-gray-400 pl-12 pr-4 py-3 rounded-full">
            Search
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div 
            className="bg-gray-800 p-4 rounded-xl cursor-pointer hover:bg-gray-700 transition-colors"
            onClick={() => navigate('/daily')}
          >
            <h3 className="font-semibold mb-2">Daily recommed</h3>
            <p className="text-sm text-gray-400">2024-12-5</p>
          </div>
          <div 
            className="bg-gray-800 p-4 rounded-xl cursor-pointer hover:bg-gray-700 transition-colors"
            onClick={() => navigate('/likes')}
          >
            <h3 className="font-semibold mb-2">You Like</h3>
            <p className="text-sm text-gray-400">From your liking</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4">Top 10 songs</h2>
        <div className="space-y-4">
          {songs.map((song, index) => (
            <MusicCard key={song.id} song={song} rank={index + 1} />
          ))}
        </div>
      </div>
    </Layout>
  );
}