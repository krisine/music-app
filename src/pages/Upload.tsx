import React, { useState, useRef } from 'react';
import { Plus, Minus, Play, Upload as UploadIcon, Music } from 'lucide-react';
import Layout from '../components/Layout';
import { uploadSong } from '../utils/uploadSongs';
import { useUser } from '../context/UserContext';

export default function Upload() {
  const { user } = useUser();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type.startsWith('audio/')) {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please select a valid audio file');
    }
  };

  const handleUpload = async () => {
    if (!file || !title || !artist || !coverUrl) {
      setError('Please fill in all fields');
      return;
    }

    setIsUploading(true);
    setError('');

    try {
      await uploadSong(file, title, artist, coverUrl, user.id);
      // Reset form
      setTitle('');
      setArtist('');
      setCoverUrl('');
      setFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (err) {
      setError('Failed to upload song. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

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

        <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 mb-8">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Song Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-gray-700/50 text-white px-4 py-2 rounded-lg"
                placeholder="Enter song title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Artist
              </label>
              <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                className="w-full bg-gray-700/50 text-white px-4 py-2 rounded-lg"
                placeholder="Enter artist name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Cover Image URL
              </label>
              <input
                type="text"
                value={coverUrl}
                onChange={(e) => setCoverUrl(e.target.value)}
                className="w-full bg-gray-700/50 text-white px-4 py-2 rounded-lg"
                placeholder="Enter cover image URL"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Audio File
              </label>
              <input
                type="file"
                ref={fileInputRef}
                accept="audio/*"
                onChange={handleFileSelect}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full bg-gray-700/50 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <Music className="w-5 h-5" />
                {file ? file.name : 'Select audio file'}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              onClick={handleUpload}
              disabled={isUploading}
              className="w-full bg-purple-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-600 transition-colors disabled:opacity-50"
            >
              <UploadIcon className="w-5 h-5" />
              {isUploading ? 'Uploading...' : 'Upload Song'}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold mb-2">Recently Uploaded</h2>
          {/* List of recently uploaded songs will be displayed here */}
        </div>
      </div>
    </Layout>
  );
}