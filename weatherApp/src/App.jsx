import { Search } from './components/Search'
import { Getlocation} from "./components/Getlocation"
import './App.css'
import { useEffect } from 'react'
import axios from "axios"
import { useDispatch , useSelector } from "react-redux"
import { Slider } from './components/Corousel'
import { useState } from 'react'


function App() {

  const [currentWeather, setCurrentWeather] = useState({})
  const [lat,setLat] = useState(null)
  const [lng,setLng] = useState(null)
 



  const {city} = useSelector((store)=>store.credential)
  
  
 
  
//console.log(latitude,longitude)
let Id;

  useEffect(()=>{
  
     Id = setTimeout( () => {

      
     if(city)
     { axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=2d9c313e67589677085ed508b96ae174`)
        .then((r)=>{
          setCurrentWeather(r.data)
          setLat(r.data.coord.lat)
          setLng(r.data.coord.lon)
        
          
        })
       .catch((e)=>console.log(e.message))
     }
      }, 5000); return () => clearTimeout(Id);
 
  },[city])


  useEffect(()=>{

    if(lat){
      axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=metric&exclude=hourly,minutely,alerts&appid=08f94d62d8b644853264d64f72bedf08`)
       .then((r)=>console.log(r.data))
      .catch((e)=>console.log(e.message))
    }


  },[lat,lng])

  return (
    <div className="App">
      <p>hello weather app</p> 
      
        <p>{lat}{lng}</p>
    
      <Getlocation></Getlocation>
      <Search></Search>
      <Slider></Slider>
      
    </div>
  )
}

export default App
