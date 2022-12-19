import React, { useState, useEffect } from 'react';
import './App.css';
import CitySearch from '../Input/Input';
import WeatherDisplay from '../Weather-Display/WeatherDisplay';


function App() {
  const weatherKey = process.env.REACT_APP_API_KEY;
  
  const [userInput, setUserInput] = useState("");
  const [weather, setWeather] = useState<{name: string, coord: {lat: number, lon: number}, main: {temp: number}, weather: any} | null >();
  const [pollution, setPollution] = useState('')


  useEffect(() => {
  
    const lat = weather?.coord.lat
    const lon = weather?.coord.lon
    async function getPollutionData() {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${weatherKey}`)
      const data = await res.json()
     
      setPollution(data)
    }     
    
    getPollutionData()
    console.log("polllution data", pollution)
  }, [weather, weatherKey])
 
  
  function getUserInput(data: string){
    setUserInput(data)
  }
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${weatherKey}&units=metric`)
    const data = await res.json()
    
    setWeather(data)
    
  } catch(err) {
    console.log(err)
  }
  console.log(weather) 
  console.log(userInput)
    
  }

  return (
   <div className="container">
      <h1>Weather App</h1>
      <CitySearch 
      userInput={userInput} 
      getUserInput={getUserInput}
      handleSubmit={handleSubmit}
      />
      {weather && (<WeatherDisplay 
      weatherInfo={weather}   
      />)
    }
  </div>
  );
}

export default App;
