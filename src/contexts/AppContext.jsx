import { createContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router";
import HotelReducer, { initialState } from "../reducers/HotelReducer";
import { convertDateFormat } from "../Utility/utility";


export const AppContext = createContext()


export default function AppProvider({children}){

    const [inputSearch, setInputSearch] = useState("")
    const [placePredictions, setPlacePredictions] = useState([])
    const [prediction, setPrediction] = useState("")
    const [results, setResults] = useState("");
    const [guestNumber, setGuestNumber] = useState(2)
    const [roomCount, setRoomCount] = useState(1)
    const [adultCount, setAdultCount] = useState(2)
    const [childAgeCount, setChildAgeCount] = useState(0)
    const [roomCountHolder, setRoomCountHolder] = useState("4")
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
 
 
   const closePopup = () =>{
  
   }
   

   const onRoomCountHolderChange = (e) =>{
      setRoomCountHolder(e.target.value)
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
      navigate(`/hotel-search/city/${city}/start_date/${convertedStartDate}/end-date/${convertedFinalDate}/rooms/${roomCount}/adult/${adultCount}/child/${childAgeCount}/night/${perNightCharge}/vip/${vipCharge}/package/${packageCharge}`)
    }

    async function getPlacesFromGoogleAPI(){
      const location = inputSearch
     try {
         const response = await fetch(`https://backendapis.developersourav.repl.co/places/${location}`);
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
  
    return(
      <AppContext.Provider value={{inputSearch, onChangeInput, placePredictions, setPlacePredictions, prediction, 
        setPrediction, results, setResults, goToInputText, onSearchClick, openPopup, closePopup,
          onGuestChange, guestNumber, navigate, searchOnButtonClick, 
         dispatch, hotels: state.hotels, roomCount, setRoomCount, childAgeCount, setChildAgeCount, 
         adultCount, setAdultCount, setAdultCountChange, onRoomCountChange, onChildAgeCountChange, roomCountHolder,
          setRoomCountHolder, onRoomCountHolderChange, selectedDate, setSelectedDate, finalDate, setFinalDate,
          onSetPerNightCharge, onVipCharge, onPackageCharge, perNightCharge, vipCharge, packageCharge
       }}>{children}</AppContext.Provider>
    )
}