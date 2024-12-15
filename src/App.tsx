import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AudioProvider } from './context/AudioContext';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Home from './pages/Home';
import Search from './pages/Search';
import DailyRecommend from './pages/DailyRecommend';
import Likes from './pages/Likes';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import SongDetail from './pages/SongDetail';
import MiniPlayer from './components/MiniPlayer';

export default function App() {
  return (
    <BrowserRouter>
      <AudioProvider>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/daily" element={<DailyRecommend />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/song/:id" element={<SongDetail />} />
        </Routes>
        <MiniPlayer />
      </AudioProvider>
    </BrowserRouter>
  );
}
