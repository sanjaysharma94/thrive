import { UPDATE_CITY , COORDINATES } from "./action";

const initState = {
    city:'',
    cor:{
        latitude:"",
        longitude:""
    }
    
}

export const Reducer = (state = initState ,action) =>{

    switch (action.type) {
        case UPDATE_CITY: 
        return {city : action.payload};

        case COORDINATES: 
        return {
                latitude : action.payload.lat,
                longitude:action.payload.lng
                
            };

         default:
            return state 
        
    }

}