import { useNavigate } from 'react-router-dom';
import { Radio } from 'lucide-react';
import { useEffect, useState } from 'react';
import supabase from '../utils/client.ts';

export default function Welcome() {
  const navigate = useNavigate();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from('countries').select();
    setCountries(data);
  }

  return (
    <div className="h-screen bg-gray-900 flex flex-col items-center justify-center p-8 text-white">
      <Radio className="w-32 h-32 text-purple-500 mb-8" />
      <h1 className="text-4xl font-bold mb-2">Musea</h1>
      <p className="text-gray-400 mb-12">New music experience</p>
      <button
        onClick={() => navigate('/login')}
        className="bg-purple-500 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors"
      >
        Enter →
      </button>

      <ul>
        {countries.map((country: { name: string }) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}
