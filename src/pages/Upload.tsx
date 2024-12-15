import React from 'react';
import Layout from '../components/Layout';
import { Play, Plus, Minus } from 'lucide-react';

const localSongs = [
  { id: 1, title: 'Music 1', date: '2024-12-05' },
  { id: 2, title: 'Music 2', date: '2024-12-04' },
  { id: 3, title: 'Music 3', date: '2024-12-03' },
  { id: 4, title: 'Music 4', date: '2024-12-02' },
  { id: 5, title: 'Music 5', date: '2024-12-01' }
];

export default function Upload() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-teal-900 to-gray-900 p-6 pb-32">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Upload</h1>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-800 rounded-full">
              <Plus className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-800 rounded-full">
              <Minus className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Local song</h2>
          <p className="text-sm text-gray-400">30 songs in total</p>
        </div>

        <div className="space-y-4">
          {localSongs.map(song => (
            <div key={song.id} className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">{song.title}</h3>
                <p className="text-sm text-gray-400">{song.date}</p>
              </div>
              <button className="p-2 hover:text-purple-500">
                <Play className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}