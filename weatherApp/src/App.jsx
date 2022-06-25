import { Search } from './components/Search'
import './App.css'
import { useEffect } from 'react'
import axios from "axios"
import { Slider } from './components/Corousel'


function App() {

  useEffect(()=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=2d9c313e67589677085ed508b96ae174`)
      .then((r)=>console.log(r.data))
      .catch((e)=>console.log(e.message))
  },[])
  

  return (
    <div className="App">
      <p>hello weather app</p>
      <Search></Search>
      <Slider></Slider>
    </div>
  )
}

export default App
