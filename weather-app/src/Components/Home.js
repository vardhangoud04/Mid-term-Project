import React from 'react'

function Home(props) {
    if(!props.show) {
        return null
    }
  return (
    <div>
      <div className='box'>
        <div>
        <h2>Welcome, to our Forecast Weather App</h2>
        </div>
       <div>
       <p>Weather forecasting is the application of science and technology to predict 
        the conditions of the atmosphere for a given location and time. People have 
        attempted to predict the weather informally for millennia and formally since 
        the 19th century.Once calculated manually based mainly upon changes in barometric 
        pressure, current weather conditions, and sky condition or cloud cover, weather 
        forecasting now relies on computer-based models that take many atmospheric factors 
        into account.There is a vast variety of end uses to weather forecasts. Weather warnings
         are important forecasts because they are used to protect life and property.Forecasts 
         based on temperature and precipitation are important to agriculture, and therefore 
         to traders within commodity markets.</p>
       </div>
      
      </div>
    </div>
  )
}

export default Home
