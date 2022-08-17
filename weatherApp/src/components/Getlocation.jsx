import { useEffect } from "react";
import { useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import { coordinates, updateCity } from "../Redux/action"


export const Getlocation = ()=>{

const [lat, setLat] = useState(null)
const [lng, setLng] = useState(null)




const dispatch = useDispatch();

const {city} = useSelector((store)=>store.credential)
           useEffect(()=>{

            // if(!city==undefined){
            //   return
            // } 

            if (!navigator.geolocation) {
              alert('Geolocation is not supported by your browser');
            } else {
              
              navigator.geolocation.getCurrentPosition((position) => {

                  
                setLat(position.coords.latitude)
                setLng(position.coords.longitude)

                
              }, () => {
                alert('Unable to retrieve your location');
              },);
            }




           },[])

           useEffect(()=>{
            // setLat(position.coords.latitude)
            // setLng(position.coords.longitude)
            
             dispatch(coordinates({lat,lng}))
          },[lat,lng])
             
        

    


        

    
}