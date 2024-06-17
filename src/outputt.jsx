import { useState } from "react"
import Forcast from "./result"
import Hutt from "./weather"

function Output(){
    let [weather,setWeather]=useState({
        city:"delhi",
    humandity:52,
    max:31,
    min:28,
    temp:31,
    weather:"overcast cloud"
    })

    let update=async(newinfo)=>{
        setWeather(newinfo)
    }
    return(
        <div>
            <h2><b>WEATHER APP BY VISHAL</b></h2>
            <Hutt  search={update}/>
            <Forcast info={weather}/>
        </div>
    )
}
export default Output