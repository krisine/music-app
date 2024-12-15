import { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import MusicCard from '../components/MusicCard';
import { Heart } from 'lucide-react';

import { getSongs } from '../utils/getSongs.ts';

export default function Likes() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const loadSongs = async () => {
      const songsData = await getSongs(); // 获取歌曲数据
      const likedSongs = songsData.filter((songs) => songs.isLiked);
      setSongs(likedSongs); // 更新状态
    };

    loadSongs(); // 加载数据
  }, []); // 空依赖数组，确保仅在组件加载时调用一次

  return (
    <Layout>
      <div className="p-6 pb-32">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-red-500" />
          <h1 className="text-2xl font-bold">Favorite</h1>
        </div>

        <div className="flex gap-4 mb-6">
          <button className="px-4 py-1 rounded-full bg-red-500 text-white">
            song
          </button>
          <button className="px-4 py-1 rounded-full bg-gray-800 text-gray-400">
            singer
          </button>
        </div>

        <div className="space-y-4">
          {songs.map((song, index) => (
            <MusicCard key={song.id} song={song} rank={index + 1} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
