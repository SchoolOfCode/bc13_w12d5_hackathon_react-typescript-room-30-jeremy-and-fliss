import React, { useState, useEffect } from 'react';

import CitySearch from '../CitySearch/CitySearch';
import WeatherDisplay from '../Weather-Display/WeatherDisplay';
import { PollutionState, WeatherState } from "../../types"

import './App.css';

const WEATHER_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [pollution, setPollution] = useState<PollutionState | null>(null)

  useEffect(() => {
    async function getPollutionData(lat: string, lon: string) {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`)
      const data = await res.json()
     
      setPollution(data)
    }

    if(weather) {
      const lat = weather.coord.lat.toString()
      const lon = weather.coord.lon.toString()
      getPollutionData(lat, lon); 
    }
  }, [weather])
 
 

  async function fetchWeather(cityName: string) {
  try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_KEY}&units=metric`)
   
    const data = await res.json()
    if(data.cod !== "404") {
      setWeather(data)
    }
     
      
  } catch(error) {
    console.log(error)
    
  }
  console.log(weather) 
  }

  return (
   <div className="container">
      <h1>Weather App</h1>
      <CitySearch fetchWeather={fetchWeather}/>
      {weather !== null && (<WeatherDisplay weatherInfo={weather} pollution={pollution} />)}
      
  </div>
  );
}

export default App;
