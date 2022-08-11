import { UPDATE_CITY , COORDINATES } from "./action";

const initState = {
    city:'',
    cor:{
            longitude: "",
            lalitude: "",
    }
    
}

export const Reducer = (state = initState ,action) =>{

    switch (action.type) {
        case UPDATE_CITY: 
        return {city : action.payload};

        case COORDINATES: 
        return {
                cor : {...action.payload},
                //longitude: action.payload
            };

         default:
            return state 
        
    }

}