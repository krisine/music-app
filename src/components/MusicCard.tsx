// import React, { useState } from 'react';
// import { Heart, Play } from 'lucide-react';
// import { Link } from 'react-router-dom';

// import supabase from "../utils/client"
// import { Song } from '../types';

// interface MusicCardProps {
//   song: Song;
//   rank?: number;
// }

// export default function MusicCard({ song, rank }: MusicCardProps) {
//   const {title, id, artist, cover, isLiked, likes} = song
//   const [liked, setLiked] = useState(isLiked)
//   const [likeCount, setLikeCount] = useState(likes)

//   const handleLikeClick = async () => {
//     try{
//       setLiked(!liked)
//       if(!liked){
//         setLikeCount(likeCount + 1)
//       } else {
//         setLikeCount(likeCount -1 )
//       }

//       // 更新 Supabase 数据库中的 isLiked 和 likes 字段
//       const { data, error } = await supabase
//         .from('songs')
//         .update({
//           isLiked: liked,
//           likes: likeCount,
//         })
//         .eq('id', id)
//         .select()

//       if (error) {
//         throw error;
//       }
//       console.log('Song updated successfully:', data);
//     } catch(e) {
//       console.error('Error updating song like status:', e);
//     }
//   }

//   return (
//     <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg">
//       {rank && (
//         <span className="text-2xl font-bold text-gray-400 w-8">{rank}</span>
//       )}
//       <img src={cover} alt={title} className="w-12 h-12 rounded-lg object-cover" />
//       <div className="flex-1">
//         <Link to={`/song/${id}`} className="text-white hover:text-purple-500">
//           <h3 className="font-semibold">{title}</h3>
//         </Link>
//         <p className="text-sm text-gray-400">{artist}</p>
//       </div>
//       <div className="flex items-center gap-2"
//         onClick={handleLikeClick} 
//       >
//         <Heart
//           className={`w-5 h-5 ${liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} 
//         />
//         <span className="text-sm text-gray-400">x{likeCount}</span>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

import supabase from "../utils/client";
import { Song } from '../types';

interface MusicCardProps {
  song: Song;
  rank?: number;
}

export default function MusicCard({ song, rank }: MusicCardProps) {
  const { title, id, artist, cover, isLiked, likes } = song;
  
  // 使用 `useState` 来管理本地状态
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = async () => {
    try {
      // 计算新的点赞状态和点赞数量
      const newLikedStatus = !liked;
      const newLikeCount = newLikedStatus ? likeCount + 1 : likeCount - 1;

      // 更新本地状态
      setLiked(newLikedStatus);
      setLikeCount(newLikeCount);

      // 更新 Supabase 数据库中的 isLiked 和 likes 字段
      const { data, error } = await supabase
        .from('songs')
        .update({
          isLiked: newLikedStatus, // 更新数据库中的 isLiked
          likes: newLikeCount, // 更新数据库中的点赞数量
        })
        .eq('id', id) // 使用歌曲的 ID 来查找对应的记录
        .select(); // 使用 `select()` 确保返回更新后的数据

      if (error) {
        throw error;
      }

      console.log('Song updated successfully:', data);
    } catch (e) {
      console.error('Error updating song like status:', e);
    }
  };

  return (
    <div className="flex items-center gap-4 p-2 hover:bg-gray-800 rounded-lg">
      {rank && (
        <span className="text-2xl font-bold text-gray-400 w-8">{rank}</span>
      )}
      <img src={cover} alt={title} className="w-12 h-12 rounded-lg object-cover" />
      <div className="flex-1">
        <Link to={`/song/${id}`} className="text-white hover:text-purple-500">
          <h3 className="font-semibold">{title}</h3>
        </Link>
        <Link 
                to={`/artist/${artist}`} 
          >
        <p className="text-sm text-gray-400">{artist}</p>
        </Link>
      </div>
      <div className="flex items-center gap-2" onClick={handleLikeClick}>
        <Heart
          className={`w-5 h-5 cursor-pointer ${liked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
        />
        <span className="text-sm text-gray-400">x{likeCount}</span>
      </div>
    </div>
  );
}
