export const UPDATE_CITY = "UPDATE_CITY"
export const COORDINATES = "COORDINATES"

export const updateCity = (payload) =>{
    return {
        type: UPDATE_CITY,
        payload:payload
    }
}

export const coordinates = (payload) =>{
    return {
        type: COORDINATES,
        payload,
    }
}