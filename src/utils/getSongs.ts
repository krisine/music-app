import supabase from '../utils/client.ts';

/**
 * 获取所有歌曲
 * @returns {Promise<Array>} 返回所有歌曲的数据
 */
export const getSongs = async () => {
  const { data, error } = await supabase
    .from('songs') // 从 songs 表获取数据
    .select('*'); // 获取所有字段

  if (error) {
    console.error('Error fetching songs:', error);
    return []; // 如果出错，返回一个空数组
  }

  return data; // 返回数据
};
