import { UPDATE_CITY , COORDINATES, FORECAST } from "./action";

const initState = {
    city:'',
    cor:{
        latitude:"",
        longitude:""
    },

    forecast:[]
    
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
            case FORECAST: 
        return {
                forecast : action.payload,
                  
            };


         default:
            return state 
        
    }

}