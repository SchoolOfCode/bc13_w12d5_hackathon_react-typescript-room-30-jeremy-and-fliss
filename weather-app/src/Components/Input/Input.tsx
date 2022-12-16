// type their search 
// button to submit

import React from "react";


type CityProp = {
    userInput: string;
    getUserInput: (value: string)=> void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void

}

export default function CitySearch({userInput, getUserInput, handleSubmit}: CityProp) {

    return (
    <form onSubmit={handleSubmit}>
        <input 
            value={userInput}
            type="text"
            onChange={(e)=>{getUserInput(e.target.value)}}
            placeholder="Enter your city name here"
        />
        <button type="submit">Search</button>
      
    </form>
    )
}