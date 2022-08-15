import { Carousel } from '@trendyol-js/react-carousel';
import { useState } from 'react';

import {  useSelector } from "react-redux"

export const Slider = () => {
  const jankari = useSelector((store)=>store.credential.forecast) 
    
  if(jankari){ return <div>
        <Carousel className='styles-module_item-provider__YgMwz' show={5} slide={2}swiping={true} > 

{jankari.map((users)=><div key={users.dt} className='scrollable-div' color="#2d66c3">{users?.temp?.day}°C🌐</div>)}
    


</Carousel>
    </div>}
    
}