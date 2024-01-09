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

async function getAllAminities(dispatch){
    const ALL_AMINITIES = `${BASE_URL}aminities`
    try{
     const response = await fetch(ALL_AMINITIES)
     const allAmeneties = await response.json()
     dispatch({type: BOOKING_ACTIONS.AMENITIES, payload: allAmeneties.amenities})
    }
    catch(error){
        throw error
    }
}

async function selectRoomForReservation(dispatch, hotelId, roomTypeId, room_type_id_code,  roomCount){
    
    const HOTEL_SELECT = `reservations/${hotelId}/${roomTypeId._id}/${room_type_id_code}/${roomCount}`
    const SELECT_ROOM = `${BASE_URL}${HOTEL_SELECT}`
    try {
        const response = await fetch(SELECT_ROOM, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
            }
        });
    }
    catch(error){
         throw error
    }
}

export { findHotelsByPlace, findHotelsByCity , getAllAminities, selectRoomForReservation}