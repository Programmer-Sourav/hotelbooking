export const initialState = {
    hotels: [],
    totalBookingValue: 0,
    bookings: [],
    search: "Agartala",
    suggestedCheckBox: [],
    priceCheckBox: [],
    starCategoryCheckbox: [],
    ratingCheckbox: [],
    propertyTypeCheckbox: [],
    localityCheckbox: [],
    topAreas: [],
    //roomViews: [],
    amenetiesCb: [],
    //mmtLuxCb: [],
    bookingPrefCb: [],
    //houseRules: [],
    searchBudget: {min: "", max: ""},
    searchByBudget: false,
    mmtValueStay: false
}

export const BOOKING_ACTIONS = {
    HOTELS_BY_CITY: "HOTELS_BY_CITY",
    TOTAL_BOOKING_PRICE: "TOTAL_BOOKING_PRICE",
    MY_BOOKINGS: "MY_BOOKINGS",
    SEARCH_HOTEL : "SEARCH_HOTEL",
    SUGGESTED_CHECKBOX: "SUGGESTED_CHECKBOX",
    PRICE_CHECKBOX: "PRICE_CHECKBOX",
    STAR_CATEGORY_CHECKBOX: "STAR_CATEGORY_CHECKBOX",
    RATING_CHECKBOX: "RATING_CHECKBOX",
    PROPERTY_CHECKBOX: "PROPERTY_CHECKBOX",
    LOCALITY_CHECKBOX: "LOCALITY_CHECKBOX",
    TOP_AREAS : "TOP_AREAS",
    ROOM_VIEWS : "ROOM_VIEWS",
    AMNETIES_CB: "AMNITIES_CB",
    MMT_LUX_CB: "MMT_LUX_CB",
    BOOKING_PREF_CB: "BOOKING_PREF_CB",
    HOUSE_RULES: "HOUSE_RULES",
    SEARCH_BUDGET: "SEARCH_BUDGET",
    SEARCH_BY_BUDGET: "SEARCH_BY_BUDGET",
    MMT_VALUE_STAY : "MMT_VALUE_STAY"
}

export default function HotelReducer (state, action) {
    switch(action.type){
        case BOOKING_ACTIONS.HOTELS_BY_CITY : 
        return {...state, hotels: action.payload}
        case BOOKING_ACTIONS.SEARCH_HOTEL: 
        return {...state, search: action.payload}
        case BOOKING_ACTIONS.SUGGESTED_CHECKBOX: 
        case BOOKING_ACTIONS.PRICE_CHECKBOX: 
        const itemId = action.payload
        return {...state, priceCheckBox : !state.priceCheckBox.includes(action.payload)? [...state.priceCheckBox, action.payload] : state.priceCheckBox.filter((eachId)=>(eachId!==itemId))}
        case BOOKING_ACTIONS.STAR_CATEGORY_CHECKBOX: 
        return {...state, starCategoryCheckbox: !state.starCategoryCheckbox.includes(action.payload) ? [...state.starCategoryCheckbox, action.payload] : state.starCategoryCheckbox.filter((eachCat)=>(eachCat!==action.payload))}
        case BOOKING_ACTIONS.RATING_CHECKBOX: 
        return {...state, ratingCheckbox: !state.ratingCheckbox.includes(action.payload)? [...state.ratingCheckbox, action.payload] : state.ratingCheckbox.filter((eachRating)=>(eachRating!==action.payload)) }
        case BOOKING_ACTIONS.PROPERTY_CHECKBOX:
        return {...state, propertyTypeCheckbox: !state.propertyTypeCheckbox.includes(action.payload) ? [...state.propertyTypeCheckbox, action.payload] : state.propertyTypeCheckbox.filter((eachItem)=>(eachItem!==action.payload))}     
        case BOOKING_ACTIONS.LOCALITY_CHECKBOX:
        case BOOKING_ACTIONS.TOP_AREAS: 
        case BOOKING_ACTIONS.ROOM_VIEWS:
        case BOOKING_ACTIONS.AMNETIES_CB:
        case BOOKING_ACTIONS.MMT_LUX_CB:
        case BOOKING_ACTIONS.BOOKING_PREF_CB:
        //case BOOKING_ACTIONS.HOUSE_RULES:
        case BOOKING_ACTIONS.SEARCH_BUDGET: 
        return {...state, searchBudget : {...state.searchBudget, min: action.payload.min, max: action.payload.max}}   
        case BOOKING_ACTIONS.SEARCH_BY_BUDGET: 
        return {...state, searchByBudget : action.payload} 
        case BOOKING_ACTIONS.MMT_VALUE_STAY: 
        return {...state, mmtValueStay: action.payload}
        default: return state;    
    }
}