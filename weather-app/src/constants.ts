type PollutionLevel = {
  qualitativeName: string,
  pollutantConcentration: {
    NO2: string,
    PM10: string,
    O3: string,
    PM25: string
  }
}

const POLLUTION_LEVEL: Record<number, PollutionLevel> = {
  1: { 
    qualitativeName: "Good",
    pollutantConcentration: {
      NO2: "0-50",
      PM10: "0-25",
      O3: "0-60",
      PM25: "0-15"
    }
  },
  2: { 
    qualitativeName: "Fair",
    pollutantConcentration: {
      NO2: "50-100",
      PM10: "25-50",
      O3: "60-120",
      PM25: "15-30"
    }
  } ,
  3: { 
    qualitativeName: "Moderate",
    pollutantConcentration: {
      NO2: "100-200",
      PM10: "50-90",
      O3: "120-180",
      PM25: "30-55"
    }
  },
  4: { 
    qualitativeName: "Poor",
    pollutantConcentration: {
      NO2: "200-400",
      PM10: "90-180",
      O3: "180-240",
      PM25: "55-110"
    }
  },
  5: { 
    qualitativeName: "Very Poor",
    pollutantConcentration: {
      NO2: ">400",
      PM10: ">180",
      O3: ">240",
      PM25: ">110"
    }
  },
}

export { POLLUTION_LEVEL };