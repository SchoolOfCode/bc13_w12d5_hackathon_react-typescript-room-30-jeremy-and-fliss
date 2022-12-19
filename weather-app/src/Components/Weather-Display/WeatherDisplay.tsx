import { PollutionState, WeatherState } from "../../types"
import { POLLUTION_LEVEL } from "../../constants"

type DisplayProps = {
    weatherInfo: WeatherState;
    pollution: PollutionState | null;
}

function WeatherDisplay({weatherInfo, pollution}: DisplayProps) {
    const { name,  main, weather} = weatherInfo
    console.log(weatherInfo)
   
        const skyCondition = weather[0].description
        const temp = main.temp
        const icon = weather[0].icon
        const imgurl = `https://openweathermap.org/img/w/${icon}.png` 
    
    
   
    return (
             
        <div>
            <h1>Current Weather</h1>
            <p>Location: {name}</p>
            <p>
                <span style={{verticalAlign: "middle"}}>Weather condition: {skyCondition}</span>
                <img style={{verticalAlign: "middle"}} src={imgurl} alt="weather icon"/>
            </p>
            <p>Temperature: {temp} °C</p>
            {pollution && (<>
            <p>Pollution Level: {POLLUTION_LEVEL[pollution.list[0].main.aqi].qualitativeName}</p>
            <p>PM2.5 value: {POLLUTION_LEVEL[pollution.list[0].main.aqi].pollutantConcentration.PM25}</p>
            </>
            )} 
        </div>
       
    )
}

export default WeatherDisplay