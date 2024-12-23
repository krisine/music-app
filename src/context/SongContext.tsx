import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { getSongs } from '../utils/getSongs'; // 导入你提供的获取歌曲的函数
import { Song } from '../types';

// 定义 Context 的数据结构
interface SongsContextType {
  songs: Song[];
  loading: boolean;
  error: string | null;
  updateSongs: (newSong: Song) => void; // 添加更新歌曲列表的回调
}

// 创建 SongsContext，指定默认值为空
const SongsContext = createContext<SongsContextType | undefined>(undefined);

// 定义 Props 类型
interface SongsProviderProps {
  children: ReactNode;
}

// 创建 SongsProvider
export const SongProvider: React.FC<SongsProviderProps> = ({ children }) => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchSongs = async () => {
      try {
        const data = await getSongs(); // 获取歌曲数据
        setSongs(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error'); // 处理错误
        console.error("Error fetching songs:", err);
      } finally {
        setLoading(false); // 请求结束，更新 loading 状态
      }
    };

    useEffect(() => {
      fetchSongs(); // 调用获取歌曲的函数
    }, []); // 依赖空数组，确保只在组件首次加载时调用

    // 更新歌曲列表的函数
    const updateSongs = (newSong: Song) => {
      setSongs((prevSongs) => [...prevSongs, newSong]); // 将新上传的歌曲添加到歌曲列表中
      console.log('New songs:', songs); // 输出最新的歌曲列表
    };


    return (
      <SongsContext.Provider value={{ songs, loading, error, updateSongs }}>
      {children}
      </SongsContext.Provider>
    );
};

// 自定义 Hook 用于在组件中使用 Context
export const useSongs = (): SongsContextType => {
  const context = useContext(SongsContext);
  if (!context) {
    throw new Error('useSongs must be used within a SongsProvider');
  }
  return context;
};
