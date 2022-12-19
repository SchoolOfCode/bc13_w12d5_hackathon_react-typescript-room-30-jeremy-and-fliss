import React, { useState } from "react";


type CityProp = {
    fetchWeather: (cityName: string) => void
}

export default function CitySearch({fetchWeather}: CityProp) {
    const [userInput, setUserInput] = useState("");

    function getUserInput(data: string){
        setUserInput(data)
    }

    function onSubmit (e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        fetchWeather(userInput);
        setUserInput('')
    }

    return (
    <form onSubmit={onSubmit}>
        <input 
            value={userInput}
            type="text"
            onChange={(e)=>{getUserInput(e.target.value)}}
            placeholder="Enter the city name"
        />
        <button type="submit">Search</button>
        
    </form>
    )
}