import { useState } from "react"
import { updateCity } from "../Redux/action"
import { useDispatch , useSelector } from "react-redux"
import { useEffect } from "react";


export const Search = ()=>{
const dispatch = useDispatch();

const [city , setCity] = useState('bhopal')

useEffect(()=>{
dispatch(updateCity(city));  

},[city])
    

    return (<>
    
    <input onChange={(e)=>setCity(e.target.value)} placeholder="enter city name to search" type="text" />
    </>)
}