import { createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import HotelReducer, { BOOKING_ACTIONS, initialState } from "../reducers/HotelReducer";
import { convertDateFormat } from "../Utility/utility";
import { findHotelsByCity } from "../api/remote";


export const AppContext = createContext()


export default function AppProvider({children}){

    const [inputSearch, setInputSearch] = useState("")
    const [placePredictions, setPlacePredictions] = useState([])
    const [prediction, setPrediction] = useState("")
    const [results, setResults] = useState("");
    const [guestNumber, setGuestNumber] = useState(2)
    const [roomCount, setRoomCount] = useState(1)
    const [adultCount, setAdultCount] = useState(1)
    const [childAgeCount, setChildAgeCount] = useState(0)
    const [roomCountHolder, setRoomCountHolder] = useState("noDeal")
    const [perNightCharge, setPerNightCharge] = useState(0)
    const [vipCharge, setVipCharge] = useState(0)
    const [packageCharge, setPackageCharge] = useState(0)



    const [selectedDate, setSelectedDate] = useState(new Date())

    const twoDaysLater = new Date(selectedDate)
    twoDaysLater.setDate(twoDaysLater.getDate() + 2)
    //console.log(444, twoDaysLater)

    useEffect(() => {
        twoDaysLater.setDate(twoDaysLater.getDate());
        setFinalDate(twoDaysLater);
       // console.log(333, twoDaysLater)
      }, [selectedDate]);
    
    const [finalDate, setFinalDate] = useState(twoDaysLater)


    const priceRangeArrayForCheckbox = [{id: 1, min: 0, max: 3000}, 
                                        {id: 2, min: 3000, max: 5500},
                                        {id: 3, min: 5500, max: 7500},
                                        {id: 4, min: 7500, max: 9500},
                                        {id: 5, min: 9500, max: 15000},
                                        {id: 6, min: 15000, max: 30000},
                                        {id: 7, min: 30000, max: 300000}]
 
  

    const [state, dispatch] = useReducer(HotelReducer, initialState)


    const navigate = useNavigate()

    const openPopup = async () =>{
     try{
      await getPlacesFromGoogleAPI()
      }
      catch (error) {
        console.error('Error fetching places:', error);
      }
   }
 

   function updateAdults(roomCount){
      setAdultCount(roomCount)
   }

   useEffect(()=>{updateAdults(roomCount)}, [roomCount])
 
   const closePopup = () =>{
  
   }
   

   const onRoomCountHolderChange = (selectedValue) =>{
      setRoomCountHolder(selectedValue)
   }

    const onChangeInput = async (e) =>{
        setInputSearch(e.target.value)
        if (e.target.value.trim() !== '' ) {
          await openPopup();
        } else {
          closePopup();
        }
    }

    const goToInputText = (placePrediction) =>{
        setPrediction(placePrediction)
        setInputSearch(placePrediction.description)
        setPlacePredictions([])
    }


    const onGuestChange = (e) =>{
       setGuestNumber(e.target.value)
    }

    const onSearchClick = async (place) =>{
      const address = place.description
       getGeocodes(address)
    }

    const searchOnButtonClick = () =>{
      const convertedStartDate = convertDateFormat(selectedDate)
      const convertedFinalDate = convertDateFormat(finalDate)
      const HOTEL_SEARCH = `hotel-search/city/${city}/start_date/${convertedStartDate}/end-date/${convertedFinalDate}/rooms/${roomCount}/adult/${adultCount}/child/${childAgeCount}/night/${perNightCharge}/vip/${vipCharge}/package/${packageCharge}`
      findHotelsByCity(dispatch, HOTEL_SEARCH)
      navigate(`/hotel-search/city/${city}/start_date/${convertedStartDate}/end-date/${convertedFinalDate}/rooms/${roomCount}/adult/${adultCount}/child/${childAgeCount}/night/${perNightCharge}/vip/${vipCharge}/package/${packageCharge}`)
    }

    async function getPlacesFromGoogleAPI(){
      const location = inputSearch
     try {
     // https://backendapis.developersourav.repl.co/places/${location}
         const response = await fetch(`https://55ab11dd-823c-4991-8131-76e6995fdd10-00-336qjktrk2nb1.pike.replit.dev/places/${location}`);
         const data = await response.json();
         
         
         if (response.ok) {
           console.log(data)
           setPlacePredictions(data.places.predictions);
         } else {
           console.error('Error fetching predictions:', data.error);
         }
       } catch (error) {
         console.error('Error fetching predictions:', error);
       }
  }
  
  
  async function getGeocodes(address){
      const apiKey = "AIzaSyAJQrY712u4PWnqUAucdIiIjVG3H6ucJ6M"
      console.log(555, address)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'OK') {
        setResults(data.results);
      } else {
        console.error('Error fetching geocode:', data.status);
      }
    })
    .catch(error => {
      console.error('Error fetching geocode:', error);
    });
  }


  const setAdultCountChange = (e) =>{
    setAdultCount(e.target.value)
  }

  const onRoomCountChange = (e) =>{
   setRoomCount(e.target.value)
  }

  const onChildAgeCountChange = (e) =>{
   setChildAgeCount(e.target.value)
  }


  const onSetPerNightCharge = (e) =>{
       setPerNightCharge(e.target.value)
  }

  const onVipCharge = (e) =>{
        setVipCharge(e.target.value)
  }

  const onPackageCharge = (e) =>{
      setPackageCharge(e.target.value)
  }

  let city = "Agartala"
  if( prediction.description && prediction.description.includes("Delhi")){
           city = "Delhi"
  }
  else if(prediction.description && prediction.description.includes("Calcutta")){
    city= "Calcutta"
  }
  else if(prediction.description && prediction.description.includes("Bangalore")){
    city= "Bangalore"
  }

  function updateDeal (){
    if(roomCount<=4){
      setRoomCountHolder("noDeal")
    }
    else{
      setRoomCountHolder("Deal")
    }
  }

  const onSuggestedStateChange = ( ) =>{

  }


  const onPriceStateChange = (itemId, value) =>{
   dispatch({type: BOOKING_ACTIONS.PRICE_CHECKBOX, payload: itemId})
  }
  
  const onStarStateChange = (value, targetchecked) =>{
   //console.log(8888, targetchecked)
   dispatch({type: BOOKING_ACTIONS.STAR_CATEGORY_CHECKBOX, payload: value})
  }

  const onRatingStateChange = (value) =>{
    dispatch({type: BOOKING_ACTIONS.RATING_CHECKBOX, payload: value})
  }

  const onPropertyStateChange = (value) =>{
    dispatch({type: BOOKING_ACTIONS.PROPERTY_CHECKBOX, payload: value})
  }
  
  const onLocalityStateChange = () =>{

  }

  const onAreaStateChange = () =>{

  }


  const onAmenityStateChange = () =>{

  }

  const onMMTStateChange = (value) =>{
     dispatch({type: BOOKING_ACTIONS.MMT_VALUE_STAY, payload: value})
  }

  const onBookingPrefStateChange = () =>{

  }

  const onHouseRuleStateChange = () =>{

  }

  const onBudgetRangeChange = (min, max) =>{
    console.log(222, min, max)
    dispatch({type: BOOKING_ACTIONS.SEARCH_BY_BUDGET,  payload: true})
  }

  const onBudgetMinChange = (min) =>{
     dispatch({type: BOOKING_ACTIONS.SEARCH_BUDGET, payload: {min: min, max: budgetState.max }})
  }
  const onBudgetMaxChange = (max) =>{
    dispatch({type: BOOKING_ACTIONS.SEARCH_BUDGET, payload: {min: budgetState.min, max: max}})
  }
  
  const priceState = state.priceCheckBox
  const budgetState = state.searchBudget
    return(
      <AppContext.Provider value={{inputSearch, onChangeInput, placePredictions, setPlacePredictions, prediction, 
        setPrediction, results, setResults, goToInputText, onSearchClick, openPopup, closePopup,
          onGuestChange, guestNumber, navigate, searchOnButtonClick, 
         dispatch, hotels: state.hotels, roomCount, setRoomCount, childAgeCount, setChildAgeCount, 
         adultCount, setAdultCount, setAdultCountChange, onRoomCountChange, onChildAgeCountChange, roomCountHolder,
          setRoomCountHolder, onRoomCountHolderChange, selectedDate, setSelectedDate, finalDate, setFinalDate,
          onSetPerNightCharge, onVipCharge, onPackageCharge, perNightCharge, vipCharge, packageCharge, roomCountHolder, updateDeal,
          suggestedState: state.suggestedCheckBox, priceState, starState: state.starCategoryCheckbox, ratingState: state.ratingCheckbox,
          propertyState: state.propertyTypeCheckbox, localityState: state.localityCheckbox, areasState: state.topAreas, roomState: state.roomViews,
          amnetesState: state.amenetiesCb, mmtLuxState : state.mmtLuxCb, bookingPrefState: state.bookingPrefCb, houseRulesState: state.houseRules, 
          onSuggestedStateChange, onAmenityStateChange, onAreaStateChange, onBookingPrefStateChange, onPriceStateChange, onStarStateChange, 
          onRatingStateChange, onPropertyStateChange, onLocalityStateChange, onMMTStateChange, onHouseRuleStateChange, priceRangeArrayForCheckbox,
          onBudgetRangeChange, budgetState: state.searchBudget, onBudgetMinChange, onBudgetMaxChange, searchByBudgetState: state.searchByBudget, mmtValueState: state.mmtValueStay
       }}>{children}</AppContext.Provider>
    )
}