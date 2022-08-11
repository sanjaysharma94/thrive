import { useEffect } from "react";
import { useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import { coordinates, updateCity } from "../Redux/action"


export const Getlocation = ()=>{

const [positiocord, setPositioncord] = useState({latitude:null,longitude:null})

//const {longitude,latitude} = useSelector((store)=>store.city)
const dispatch = useDispatch();

        
            if (!navigator.geolocation) {
                alert('Geolocation is not supported by your browser');
              } else {
                
                navigator.geolocation.getCurrentPosition((position) => {

                    
                  setPositioncord({...position.coords.latitude});
                  
                  dispatch(coordinates(positiocord))
                  
                }, () => {
                  alert('Unable to retrieve your location');
                },);
              }

             
        

    


        

    
}