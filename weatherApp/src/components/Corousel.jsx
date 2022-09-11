
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { DateTime } from "luxon";
import {  useSelector } from "react-redux"
import Whirligig from "react-whirligig";

export const Slider = () => {
  //hii

const  data = useSelector((store)=>store.credential.forecast)
console.log(data)
         
let time = (tm)=>{

  return DateTime.fromSeconds(tm).toFormat("cccc")

};
    
  return (
    <div>
      <Whirligig visibleSlides={7} gutter="1em">
        {data.map((e) => (
          <div
            key={e}
            style={{
              display: "inline-block",
              border: "dotted black",
              width: "100px",
              height: "150px"
            }}
          >
            <p style={{ marginTop: 0.5, marginBottom: 0.5 }}>{time(e.dt)}</p>
            <p style={{ marginTop: 0.5, marginBottom: 0.5 }}>{e.temp.day}°C</p>
            <img
              style={{
                width: "100%",
                height: "70%",
                marginTop: 0.5,
                marginBottom: 0.5
              }}
              src={e}
              alt="ram"
            />
            <h4 style={{ marginTop: 0.5 }}>clear</h4>
          </div>
        ))}
      </Whirligig>
    </div>
  )
  
    


    
}