import { useState } from 'react'
import SearchBar from './components/SearchBar';
import axios from 'axios';


function App() {
  const [weather, setWeather] = useState(null);
  const[loading, setLoading] = useState (false);
  const[error, setError] =useState("") ;
  const API_KEY = import.meta.env.VITE_API_KEY;
  const API_URL = `api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid={API key}`;
  const fetchWeather = async (city)=> {
    setLoading(true);
    setError('');
    try{
      const url = `${API_URL}?q=${city}& units=metric&appid=${API_KEY}`;
      const response = await axios.get(url);
      console.log(response.data);
      setWeather(response.data);
    } catch (err){ 
      if (err.response && error.response.status === 404){
        setError('city not found. please try again')
      }else{
        setError('there is a problem. please try again later.');
      }
      setWeather(null);
    }
  }
  return (
    <div className="min-h-screen flex 
    flex-col items-center justify-center bg-blue-100">
      <div className='bg-black/60 text-white rounded-lg shadow-lg p-8 max-w-md w-full'>
      <h1 className='text-3xl 
      font-bold text-center mb-6 '>Weather App</h1>
      <SearchBar fetchWeather =
      {fetchWeather}/>
      </div>
    </div>
  )
}
    ;
export default App;
