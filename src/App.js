import React, { useEffect, useState } from 'react';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import { ClipLoader } from 'react-spinners';


const API_KEY = 'd8c8e057b09fb525f3e63f1e152c96c9';

function App() {
  const [weather,setWeather] = useState(null);
  const [city,setCity] = useState('');
  const cities = ['PARIS','BERLIN','LONDON',];
  const [loading, setLoading] = useState(false);

  const getLocationCurrent = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat,lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat,lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url)
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
    console.log("data", data);
  }

  useEffect(()=>{
    if (city === '') {
      getLocationCurrent();
    } else {
      getWeatherByCity();
    }
  },[city])

  return (
    <div>
      {loading?(<ClipLoader color='#3a86ff' loading={loading} size={150}/>):
      (<div className='main-box'>
        <WeatherBox weather={weather}/>
        <WeatherButton cities={cities} setCity={setCity} getLocationCurrent={getLocationCurrent}/>
      </div>)}
    </div>
  );
}

export default App;
