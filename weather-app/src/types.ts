type WeatherState = {
  name: string;
  coord: {
    lat: number;
    lon: number;
  },
    main: {
      temp: number;
    },
    weather: any;
  };

type Pollution = {
  "dt": number;
  "main": {
    "aqi": number;
  },
  "components": {
    "co": number;
    "no": number;
    "no2": number;
    "o3": number;
    "so2": number;
    "pm2_5": number;
    "pm10": number;
    "nh3": number;
  }
}

type PollutionState = {
  "coord": number[],
  "list": Pollution[]
}

export {
  type WeatherState,
  type PollutionState
};
