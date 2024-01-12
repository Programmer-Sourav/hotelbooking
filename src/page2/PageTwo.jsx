import "./css/index.css";
import "./css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import HotelCard from "./HotelCard"
import Header from "./Header"
import SecondaryHeader from "./SecondaryHeader"
import LeftNavigation from "./LeftNavigation"
import { useContext, useEffect } from "react"
import { AppContext } from "../contexts/AppContext"
import { getAllAminities } from "../api/remote"
import { useParams } from "react-router-dom";

export default function PageTwo(){

    const {city} = useParams()
    
const { priceRangeArrayForCheckbox, priceState, hotels, searchByBudgetState,
     budgetState, starState, ratingState, propertyState, onPropertyStateChange, 
     mmtValueState, onMMTStateChange, sortByValueChange, sortByState, dispatch, amnetesState, searchAmenityState} = useContext(AppContext)

let filteredList = [...hotels];
console.log(hotels, filteredList)
let amenitiesList = [...amnetesState]


useEffect(()=>{getAllAminities(dispatch)}, [])

if(priceState){
    console.log(666, priceState)
    if(priceState.includes(1))
    {
      filteredList = [...hotels].filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>0 && item.rate<=3000))))
     
    }
    if(priceState.includes(2))
    {
      filteredList = [...hotels].filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>3000 && item.rate<=5500))))
     
    }
    if(priceState.includes(3))
    {
      filteredList = [...hotels].filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>5500 && item.rate<=7500))))
     
    }
    if(priceState.includes(4))
    {
      filteredList = [...hotels].filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>7500 && item.rate<=9500))))
     
    }
    if(priceState.includes(5))
    {
      filteredList = [...hotels].filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>9500 && item.rate<=15000))))
     
    }
    if(priceState.includes(6))
    {
      filteredList = [...hotels].filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>15000 && item.rate<=30000))))
     
    }
    if(priceState.includes(7))
    {
      filteredList = [...hotels].filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>30000))))
     
    }
 }

 if(searchByBudgetState && budgetState){
    filteredList = [...hotels].filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>=budgetState.min && item.rate<=budgetState.max))))
 }

 if(starState.length>0){
    filteredList = [...hotels].filter((eachItem)=>(eachItem.starCategory && starState.find((starItem)=>(starItem===eachItem.starCategory))))
 }

 if(ratingState.length>0){
    filteredList = [...hotels].filter((eachItem)=>(eachItem.rating_review && eachItem.rating_review.rating>ratingState.find((rating)=>(rating))))
 }

 if(propertyState.length>0){
    filteredList = [...hotels].filter((eachItem)=>(eachItem.propertyType && propertyState.find((property)=>(property=== eachItem.propertyType))))
 }

 if(mmtValueState){
    filteredList = [...hotels].filter((eachItem)=>(eachItem.mmtValueStay && eachItem.mmtValueStay))
 }

 if(amnetesState.length>0){
    filteredList = [...hotels].filter((eachHotel)=>(eachHotel.aminities && eachHotel.aminities.amenties.find((eachItem)=>(amnetesState.includes(eachItem)))))
 }

 let sortedList = [...filteredList]

 if(sortByState){
    switch(sortByState){
        case "lth":
        sortedList = [...sortedList].sort((a, b)=>(a.hotel_rate[0].rate> b.hotel_rate[0].rate ? 1 : -1))
        break;
        case "htl":
        sortedList = [...sortedList].sort((a, b)=>(b.hotel_rate[0].rate> a.hotel_rate[0].rate ? 1 : -1))
        break;
        case "userrating":
        sortedList = [...sortedList].sort((a, b)=>(b.rating_review && b.rating_review.rating> a.rating_review && a.rating_review.rating ? 1 : -1)) 
        break; 
        default: 
        return sortedList
    }
 }



//console.log(999, filteredList, sortedList)
return(
<div>
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>make more trip</title>
    
    {/* <link rel="stylesheet" href="css/index.css"/> */}
   
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

    {/* <link rel="stylesheet" href="css/bootstrap.min.css"/> */}
</head>

<body>
   
   
    <Header/>
  

    <main>
        <section>

            <div className="main-detail-body">



                <div className="main-body">
                   
                    <SecondaryHeader/>


                    <section>

                    </section>




                </div>

            </div>
        </section>

        <section>
            <div className="low-info-all">
                <div>
                    <p><a href="#">Home</a> 
                        Hotels and more in {city}</p>

                    <h3>Hotels, Villas, Apartments and more in {city}</h3>

                </div>
               
                <div className="select-trip">
                    <div className="type-trip">
                        <p>
                        <form action="">
                            <label className="showing-info" for="select">Select Trip Type:</label>
                            <select className="select-popularity" name="cars" id="cars">
                                <option value="non"></option>
                                <option value="B">Business</option>
                                <option value="F">Family</option>
                                <option value="R">Romantic</option>
                            </select>

                            <label className="" for="sort">
                                | Sort By:
                            </label>
                            <select className="section-popularity" value={sortByState} onChange={(e)=>{sortByValueChange(e.target.value)}}>
                                <option value="pop">Popularity</option>
                                <option value="lth">Price-Low to High</option>
                                <option value="htl">Price-High to Low</option>
                                <option value="userrating">User Rating-High to Low</option>
                            </select>
                            <label for="">| Showing 1847 properties in Goa</label>

                        </form>

                        </p>

                    </div>
                    <div className="location-search">

                        <input className="search-input-location" type="text" placeholder="&#xf002  Location or Property" style={{fontFamily: "Arial, FontAwesome"}}/>

                    </div>

                </div>

            </div>
        </section>

     
        <section>
            <div className="showing-main">
                {/* <!-- left side --> */}
                <div className="left-showing">
                    {/* <!-- map part --> */}
                    <div className="map-part">
                        explore on map
                    </div>
                    {/* <!-- map end --> */}
                    <LeftNavigation/>
                </div>
                    {/* <!-- right side --> */}
                    <div className="right-showing">
                        <h2 className="show-property">Showing Properties in Goa</h2>
                        {/* <!-- card --> */}
                        {
                            sortedList.map((hotel)=>(
                                <HotelCard data={hotel}/>
                            ))
                        }
                       

                    </div>
                </div>
        </section>

    </main>


    <footer>

    </footer>





    <script src="js/bootstrap.min.js"></script>
</body>
        </div>
    )
}