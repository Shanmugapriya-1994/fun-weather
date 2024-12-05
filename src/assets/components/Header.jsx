import { useContext } from "react"
import { appcontext } from "./AppContext"
import axios from "axios"

import { WiDayHail } from "react-icons/wi";


function Header()
{
    const {city,setcity} = useContext(appcontext)
   
    const {setweather} = useContext(appcontext)
    const {settemp} = useContext(appcontext)
    const {setdesc} = useContext(appcontext)

    function getWeather()
    {
        setcity("")
       if(city === "")
       {
       alert("Enter city name")
       }else{
       axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=470f119ab2ec0b49496a0617249944b8`)
       .then(function (success)
        {
        
         setweather(success.data.weather[0].main);
         settemp(success.data.main.temp);
         setdesc(success.data.weather[0].description);
       })
       .catch(function (error) {
         if (error.response && error.response.status === 404) {
           alert("City not found. Please enter a valid city name.")
         } else {
           alert("Unable to fetch weather data. Please try again later.")
         }
       })
   }
 }
   function handleCity(evt)
    {
        setcity(evt.target.value)
    }

    return(
        <div>
            <nav className="bg-slate-500 flex gap-5 text-white text-center p-4">
            <WiDayHail className="text-white text-5xl" /><h1 className="text-3xl font-medium">Weather Dashboard </h1>
            </nav>
            <div className="my-7 text-center">
                <input onChange={handleCity} value={city} type="text" placeholder="City Name" className="border p-2"></input>
                <button onClick={getWeather} className="bg-slate-500 p-2 mx-3 text-white rounded-md hover:opacity-90 cursor-pointer" >Search</button>
            </div>


        </div>
    )
}

export default Header