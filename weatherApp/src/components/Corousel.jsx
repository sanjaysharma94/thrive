import { Carousel } from '@trendyol-js/react-carousel';
import { useState } from 'react';

import {  useSelector } from "react-redux"

export const Slider = () => {

  const [forecast , setForecast] = useState([])

  const jankari = useSelector((store)=>store.credential.forecast)

  setForecast(jankari)
    
    
    
     return <div>
        <Carousel className='styles-module_item-provider__YgMwz' swiping={true}> 

{forecast.map((users)=><div key={users.dt} className='scrollable-div' color="#2d66c3">{users?.temp?.dy}°C🌐</div>)}
    


</Carousel>
    </div>
    
}