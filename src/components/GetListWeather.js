import React, {Fragment, useEffect, useState} from "react"
import $ from "jquery"
import moment from "moment-timezone"
import FormWeather from "./FormWeather"
const GetListWeather = () => { 
 const [list, setList] = useState([])
 // render api get list weather 
 useEffect(() => {
  getListWeather()
 },[list])
 // define a function to call api get list weather
 const getListWeather = () => {
   $.ajax({
      type:"GET",
      dataType:"json",
      url:"http://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=1cfb9cca4b112bb3385fb192ab42b280",
      success:function(data){
       setList(data)
      }
   })
 }
 return (
  <div className="wrapper">
    <div className="title-weather-wrapper">
      <span className="title-weather">Today's weather</span>
    </div>
    {/* <hr/> */}
    <FormWeather/>
    <span className="content-weather">{list?.name}, {list?.sys?.country}</span>
    {list?.weather?.map((i) => {
      return(
       <Fragment key={i?.id}>
         <h1 style={{margin:"20px"}}>{i?.main}</h1>
         <p className="content-weather">Description:{i?.description}</p>
       </Fragment>
      )
    })
    }
    <ul className="list-content-wf">
      <li>
        <p className="content-weather">Temperature:{list?.main?.temp_min} ~ {list?.main?.temp_max}</p>
      </li>
      <li><p className="content-weather">Humidity:{list?.main?.humidity + "%"}</p></li>
      <li>
        <p className="content-weather">
          Time:{moment(list?.timezone).tz("Singapore").format("YYYY-MM-DD hh:mm A")}
        </p>
      </li>
    </ul>
    <span className="title-weather">Search history</span>
    <hr/>
  </div>
 )
}

export default GetListWeather