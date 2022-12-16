// type their search 
// button to submit

import React from "react";
import { text } from "stream/consumers";

type CityProp = {
    userInput: string;
    getUserInput: (value: string)=> void
}

export default function CitySearch({userInput, getUserInput}: CityProp) {

function handleSubmit() {
    //passing city name as userInput to fetch request
}

    return (
    <>
        <input 
            value={userInput}
            type="text"
            onChange={(e)=>{getUserInput(e.target.value)}}
            placeholder="Enter your city name here"
        />
        <button onClick={handleSubmit}>Click To Search</button>
    </>
    )
}