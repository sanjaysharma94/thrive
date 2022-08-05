import { UPDATE_CITY } from "./action";

const initState = {
    city:'',
}

export const cityReducer = (state = initState ,action) =>{

    switch (action.type) {
        case UPDATE_CITY: 
        return {city : action.payload};

         default:
            return state 
        
    }

}