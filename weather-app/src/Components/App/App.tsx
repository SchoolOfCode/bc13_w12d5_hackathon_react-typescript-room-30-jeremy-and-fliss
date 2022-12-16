import React, { useState } from 'react';
import './App.css';
import CitySearch from '../Input/Input';

function App() {
  const weatherKey = process.env.REACT_APP_API_KEY;
  
  const [userInput, setUserInput] = useState("");
  // const [weather, setWeather] = useState({});
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${weatherKey}`;
  
  function getUserInput(data: string){
    setUserInput(data)
  }
  //user search

  return (
   <>
    <CitySearch userInput={userInput} getUserInput={getUserInput}/>
    {/* <WeatherDisplay /> */}
   </>
  );
}

export default App;
