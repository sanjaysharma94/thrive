
import { useEffect } from 'react';
import { useRef, useState } from 'react';
import { DateTime } from "luxon";
import {  useSelector } from "react-redux"



export const Slider = () => {
 

const  data = useSelector((store)=>store.credential.forecast)

         
let time = (tm)=>{

  return DateTime.fromSeconds(tm).toFormat("cccc")

};
    
  return (
    <div >
      
        {data.map((e) => (
          <div
            key={e.dt}
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
              src= "data:image/jpeg;base64,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"
              alt="ram"
            />
            <h4 style={{ marginTop: 0.5 }}>clear</h4>
          </div>
        ))}
      
    </div>
  )
  
    


    
}