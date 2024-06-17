import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { colors, useScrollTrigger } from '@mui/material';

function Hutt({search}) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
 const API_KEY="f34b9c43054d9766675875c1802d3f62"

  
  const [city, setCity] = useState("");
  const[error,seterror]=useState(false)

  const weatherinfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      let jsonres = await response.json();
      console.log(jsonres);
      let result={
        city:city,
        temp:jsonres.main.temp,
        max:jsonres.main.temp_max,
        min:jsonres.main.temp_min,
        humandity:jsonres.main.humidity,
        weather:jsonres.weather[0].description

      }
      console.log(result)
      return result
    } catch (error) {
      throw(error)
    }
  };

  const handling = (evt) => {
    setCity(evt.target.value);
  };

  const eventhandle = async(evt) => {
    try{
      evt.preventDefault();
      console.log(city);
      setCity("");
      let info=await weatherinfo();
      search(info)
    }
    catch(error){
      seterror(true)
    }
    
    
  };

  return (
    <div>
      <h3>Search for weather</h3>
      <form onSubmit={eventhandle}>
        <p><b>Enter Your City</b></p><TextField id="city" label="CITY NAME" variant="outlined" value={city} onChange={handling}  />
        <br /><br />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Send
        </Button>

        <p style={{color:"red"}}>{error&&"city is not found"}</p>
      </form>
    </div>
  );
}

export default Hutt;
