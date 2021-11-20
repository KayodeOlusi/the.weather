import React, { useState, useEffect } from 'react'

const initialValue = {
  weatherValue: 'Cloudy',
  setWeatherValue: () => {}
}
// Create context with initial value
export const WeatherContext = React.createContext(initialValue)

/*
Best you create a wrapper here so you can dynamically
change the value you pass
*/
// eslint-disable-next-line import/no-anonymous-default-export
export default function WeatherProvider(props) {
  const [weatherValue, setWeatherValue] = useState('')
  
  useEffect(() => {
    // Probably you need some loading
    setWeatherValue('It\'s code here')
  }, [])

  const value = {
    weatherValue,
    setWeatherValue // A function to update the weather from any component
  }
  return (
    <WeatherContext.Provider value={value}>
      {props.children}
    </WeatherContext.Provider>
  )
}