
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { DateTime } from "luxon";
import {  useSelector } from "react-redux"

export const Slider = () => {
  //hii

const  data = useSelector((store)=>store.credential.forecast)
         
let time = (tm)=>{

  return DateTime.fromSeconds(tm).toFormat("cccc")

};
    
  return <div>
    <h1>hello</h1>
    <div>{data[0]?.temp?.day}</div>

       {data.map((e)=><div key = {e.dt}>{e.temp.day}</div>)}
    </div>
  
    


    
}