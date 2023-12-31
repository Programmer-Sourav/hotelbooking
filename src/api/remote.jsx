import { BOOKING_ACTIONS } from "../reducer/HotelReducer"

export const BASE_URL = "https://hb-backend--souravnath2.repl.co/"



async function findHotelsByPlace(city, dispatch){
    console.log(`${BASE_URL}hotels/${city}`)
    const FIND_HOTELS = `${BASE_URL}hotels/${city}`
    try{
        const response = await fetch(FIND_HOTELS)
        const allHotels = await response.json()
        dispatch({type: BOOKING_ACTIONS.HOTELS_BY_CITY, payload: allHotels.hotels})
        }
        catch(error){
            throw error
        }
}

export { findHotelsByPlace }