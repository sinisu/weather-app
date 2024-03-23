import React from 'react'

const weatherBox = ({weather}) => {
  let url = new URL(`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`);
  return (
    <div className='weather-box'>
      <div>
        <h2>{weather?.name.toUpperCase()}</h2>
        <h1>{Math.round(weather?.main.temp)}°</h1>
        <h4>{weather?.weather[0].description.toUpperCase()}</h4>
      </div>
      <div>       
        <img src={url}/>
      </div>
    </div>
  )
}

export default weatherBox
