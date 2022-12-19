
type displayProps = {
    weatherInfo: {name: string, coord: {lat: number, lon: number}, main: {temp: number}, weather: any};
   
}
function WeatherDisplay({weatherInfo}: displayProps) {
const { name, coord, main, weather} = weatherInfo
console.log(weatherInfo)
const skyCondition = weather[0].description
const temp = main.temp 

// const lon = coord.lon
// const lat = coord.lat



    console.log(weather)
    return (
        <div>
            <h1>Weather Forecast</h1>
            <p>Location: {name}</p>
            <p>Gener condition: {skyCondition}</p>
            <p>Temperature: {temp} °C</p>

        </div>
    )
}

export default WeatherDisplay