export const initialState = {
    hotels: [],
    totalBookingValue: 0,
    bookings: []
}

export const BOOKING_ACTIONS = {
    HOTELS_BY_CITY: "HOTELS_BY_CITY",
    TOTAL_BOOKING_PRICE: "TOTAL_BOOKING_PRICE",
    MY_BOOKINGS: "MY_BOOKINGS"
}

export default function HotelReducer (state, action) {
    switch(action.type){
        case BOOKING_ACTIONS.HOTELS_BY_CITY : 
        console.log(123, action.payload)
        return {...state, hotels: action.payload}
    }
}