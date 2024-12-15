import React from 'react';
import { Heart, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Song } from '../types';

interface MusicCardProps {
  song: Song;
  rank?: number;
}

export default function MusicCard({ song, rank }: MusicCardProps) {
  return (
    <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg">
      {rank && (
        <span className="text-2xl font-bold text-gray-400 w-8">{rank}</span>
      )}
      <img src={song.cover} alt={song.title} className="w-12 h-12 rounded-lg object-cover" />
      <div className="flex-1">
        <Link to={`/song/${song.id}`} className="text-white hover:text-purple-500">
          <h3 className="font-semibold">{song.title}</h3>
        </Link>
        <p className="text-sm text-gray-400">{song.artist}</p>
      </div>
      <div className="flex items-center gap-2">
        <Heart className={`w-5 h-5 ${song.isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        <span className="text-sm text-gray-400">x{song.likes}</span>
      </div>
    </div>
  );
}