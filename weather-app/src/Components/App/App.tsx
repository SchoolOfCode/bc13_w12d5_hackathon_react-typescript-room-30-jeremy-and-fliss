import React, { useState } from 'react';
import './App.css';
import CitySearch from '../Input/Input';
import WeatherDisplay from '../Weather-Display/WeatherDisplay';


function App() {
  const weatherKey = process.env.REACT_APP_API_KEY;
  
  const [userInput, setUserInput] = useState("");
  const [weather, setWeather] = useState({});
  
  
 
  
  function getUserInput(data: string){
    setUserInput(data)
  }
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault()
  try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${weatherKey}`)
    const data = await res.json()
    setWeather(data)
  } catch(err) {
    console.log(err)
  }
   
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
      <WeatherDisplay 
      weather={weather}   
      />
  </div>
  );
}

export default App;
