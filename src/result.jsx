import Card from '@mui/material/Card';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
function Forcast({info}){
    let img_url="https://c8.alamy.com/comp/2E49448/field-meadow-feeding-meadow-clouds-threatening-difficult-dark-dawn-rainy-weather-dirty-weather-2E49448.jpg"
    let hot_url="https://tse4.mm.bing.net/th?id=OIP.MHsw_Cqvyzcf79fa7JcdhQHaEy&pid=Api&P=0&h=220"
    let cold_url="http://2.bp.blogspot.com/-mmBeYIaifyY/WGz2qcu6iAI/AAAAAAAPBYQ/dFK2U3-L2mAgIkkX2XHb3g2SDN-OwkhMACK4B/s1600/Blue%2Bhour%2BFinland_by_Laurence%2BNorah.jpg"
    let rain_url="https://tse4.mm.bing.net/th?id=OIP.RXV4uq59d7XsAZs7rgYs5wHaE7&pid=Api&P=0&h=220"
    return(
        <div>
            <h2> <b> Weather Information  </b> </h2>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humandity>80?rain_url:info.temp>30?hot_url:cold_url}
        title="weather"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} <br></br>{
            info.humandity>80?<ThunderstormIcon/>:info.temp>30?<WbSunnyIcon/>:<SevereColdIcon/>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <div>Temperature={info.temp}&deg;c</div>
         <div> Humidity={info.humandity} </div>
         <div> max_temp={info.max}&deg; </div>
         <div> min_temp={info.min}&deg; </div>
         <div> weather={info.weather} </div>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    )
}
export default Forcast