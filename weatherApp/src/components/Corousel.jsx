import { Carousel } from '@trendyol-js/react-carousel';
import { useEffect } from 'react';
import { useRef, useState } from 'react';

import {  useSelector } from "react-redux"

export const Slider = () => {

  //const data = useRef([])

const  data = useSelector((store)=>store.credential.forecast)
        
 //console.log(data)

    
  return <div>
    <h1>hello</h1>
    <div>{data[0]?.temp?.day}</div>

       {data.map((e)=><div key = {e.dt}>{e.temp.day}</div>)}
    </div>
  
    


    
}