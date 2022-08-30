import { Carousel } from '@trendyol-js/react-carousel';
import { useEffect } from 'react';
import { useRef, useState } from 'react';

import {  useSelector } from "react-redux"

export const Slider = () => {

  const data = useRef([])
  
   data.current = useSelector((store)=>store.credential.forecast)
    useEffect(()=>{
     
      
        setData1(data.current)
        

    },[data.current])
  
   
    
    
  if(data1.length>1)return <div>
    <h1>hello</h1>

        <Carousel className='styles-module_item-provider__YgMwz' show={7} slide={2}swiping={true} > 

{


// data1.map((el)=><div key={el.dt} className='scrollable-div' color="#2d66c3">{el?.temp?.day}°C🌐</div>)
data1.map((el)=><div key={el.dt} color="#2d66c3">{el?.temp?.day}°C🌐</div>)

}
    


</Carousel>
    </div>
    else  return <div>
    <h1>bolo</h1>
        <Carousel className='styles-module_item-provider__YgMwz' show={7} slide={2}swiping={true} > 

{

// data1.map((el)=><div key={el.dt} className='scrollable-div' color="#2d66c3">{el?.temp?.day}°C🌐</div>)
data.current.map((el)=><div key={el.dt} color="#2d66c3">{el?.temp?.day}°C🌐</div>)

}
    


</Carousel>
    </div>
    
    
}