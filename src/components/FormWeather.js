import React, {useState} from "react"
import $ from "jquery"
const FormWeather = () => {
  const [city, setCity] = useState("")
  const [country, setCountry] = useState("")
  const [searchWeatherForecast, setSeearchWeatherForecast] = useState([])
  const [dropDown, setDropdown] = useState(false)
  // Get value input country
  const handleOnChangeCountry = (e) => {
    setCountry(e.target.value)
  }
  // Get value input city
  const handleOnChangeCity = (e) => {
    setCity(e.target.value)
  }
  // Search city and country in weather forecast
  const handleOnSearchWeatherForecast = () => {
    $.ajax({
       type:"GET",
       dataType:"json",
       url:`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=1cfb9cca4b112bb3385fb192ab42b280`,
       success:function(data){
        setSeearchWeatherForecast(data)
       }
    })
    setDropdown(!dropDown)
  }
  // Clear input weather forecast
  const handleClearInputWeatherForecast = () => {
    setCountry("")
    setCity("")
  }
  return(
   <form method="post">
     <label>City:</label>
     <input 
       type="text" 
       style={{margin:"1%"}}
       value={city}
       onChange={handleOnChangeCity}
     />
     <label>Country:</label>
     <input 
       type="text" 
       style={{margin:"1%"}}
       value={country}
       onChange={handleOnChangeCountry}
     />
     <button type="button" onClick={handleOnSearchWeatherForecast}>Search</button>
     <button type="button" style={{margin:"1%"}} onClick={handleClearInputWeatherForecast}>Clear</button>
      {
        dropDown ? 
        <div className="search-weather-forecast-dropdown">
          <p>{searchWeatherForecast?.name}, {searchWeatherForecast?.sys?.country}</p>
        </div> 
        : 
       ""
      }
   </form>
  )
}
export default FormWeather