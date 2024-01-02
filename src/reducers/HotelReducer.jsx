export const initialState = {
    hotels: [],
    totalBookingValue: 0,
    bookings: [],
    search: "Agartala"
}

export const BOOKING_ACTIONS = {
    HOTELS_BY_CITY: "HOTELS_BY_CITY",
    TOTAL_BOOKING_PRICE: "TOTAL_BOOKING_PRICE",
    MY_BOOKINGS: "MY_BOOKINGS",
    SEARCH_HOTEL : "SEARCH_HOTEL"
}

export default function HotelReducer (state, action) {
    switch(action.type){
        case BOOKING_ACTIONS.HOTELS_BY_CITY : 
        return {...state, hotels: action.payload}
        case BOOKING_ACTIONS.SEARCH_HOTEL: 
        return {...state, search: action.payload}
    }
}