import {MainNav} from './style';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function CenterNavBar(){
    const [location,setLocation] = useState(false);
    const [weather, setWeather] = useState(false);
    useEffect(() =>{
        navigator.geolocation.getCurrentPosition((position) => {
            getWeather(position.coords.latitude, position.coords.longitude)
            // console.log(position.coords.latitude, position.coords.longitude);
            setLocation(true)
            
        })
    },[])

    let getWeather = async (lat,long) =>{
        let res = await axios.get("https://api.openweathermap.org/data/2.5/weather",{
            params:{
                lat: lat,
                lon: long,
                appid:process.env.REACT_APP_OPEN_WHEATHER_KEY,
                lang: 'pt',
                units: 'metric'
            }
        });
        setWeather(res.data);
    }


    if(location === false){
        alert('Habilite a localização para informação do clima')
        return (
        <div></div>
        
        )
    }else{
        console.log(weather)
        return(
            <MainNav>
                <div>
                    <p>Seu Clima</p>
                </div>
    
            </MainNav>
        )
    }
};

