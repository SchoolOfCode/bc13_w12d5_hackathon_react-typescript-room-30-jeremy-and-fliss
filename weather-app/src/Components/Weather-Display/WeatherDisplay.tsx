
type displayProps = {
    weather: any;
   
}
function WeatherDisplay({weather}: displayProps) {



    console.log(weather)
    return (
        <div>
            <h1>Weather Forecast</h1>
            {/* <p>{weather}</p> */}
        </div>
    )
}

export default WeatherDisplay