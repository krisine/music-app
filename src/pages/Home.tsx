import React from 'react';
import { Bell, Search } from 'lucide-react';
import Layout from '../components/Layout';
import MusicCard from '../components/MusicCard';
import { useSongs } from '../context/SongContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  const { songs, loading, error } = useSongs();  // 使用 useSongs Hook 获取数据


  const today = new Date();
  const year = today.getFullYear();
  // 获取月份（注意：JavaScript 中月份是从 0 开始的，所以需要加 1）
  const month = String(today.getMonth() + 1).padStart(2, '0'); 
  // 获取日期
  const day = String(today.getDate()).padStart(2, '0');
  // 拼接成字符串格式
  const formattedDate = `${year}-${month}-${day}`;

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
            <p className="text-sm text-gray-400">{formattedDate}</p>
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
          {songs.sort((a, b) => b.likes - a.likes).map((song, index) => (
            <MusicCard key={song.id} song={song} rank={index + 1} />
          ))}
        </div>
      </div>
    </Layout>
  );
}