import { BOOKING_ACTIONS } from "../reducers/HotelReducer"

//export const BASE_URL = "https://hb-backend--souravnath2.repl.co/"
export const BASE_URL = "https://3cf09645-20fb-4894-89cc-9772d2b323be-00-1072bnfxe1s23.pike.replit.dev/"

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

async function findHotelsByCity(dispatch, HOTEL_SEARCH){
    console.log(`${BASE_URL}${HOTEL_SEARCH}`)
    const FIND_HOTELS = `${BASE_URL}${HOTEL_SEARCH}`
    try{
        const response = await fetch(FIND_HOTELS)
        const allHotels = await response.json()
        dispatch({type: BOOKING_ACTIONS.HOTELS_BY_CITY, payload: allHotels.hotels})
        }
        catch(error){
            throw error
        }
}

export { findHotelsByPlace, findHotelsByCity }