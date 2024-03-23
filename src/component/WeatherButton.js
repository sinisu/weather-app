import React from 'react'

const weatherButton = ({cities,setCity,getLocationCurrent}) => {
  return (
    <div className='weather-button'>
      <button onClick={()=>getLocationCurrent()}>CURRENT</button>
      {cities.map((item)=>(
        <button onClick={()=>setCity(item)}>{item}</button>
      ))}
    </div>
  )
}

export default weatherButton
