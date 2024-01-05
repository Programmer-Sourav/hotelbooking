import "./css/index.css"
import "./css/bootstrap.min.css"


import HotelCard from "./HotelCard"
import Header from "./Header"
import SecondaryHeader from "./SecondaryHeader"
import LeftNavigation from "./LeftNavigation"
import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export default function PageTwo(){

const { priceRangeArrayForCheckbox, priceState, hotels } = useContext(AppContext)

let filteredList = [...hotels];
console.log(hotels, filteredList)

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
      filteredList = filteredList.filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>7500 && item.rate<=9500))))
     
    }
    if(priceState.includes(5))
    {
      filteredList = filteredList.filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>9500 && item.rate<=15000))))
     
    }
    if(priceState.includes(6))
    {
      filteredList = filteredList.filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>15000 && item.rate<=30000))))
     
    }
    if(priceState.includes(7))
    {
      filteredList = filteredList.filter((eachItem)=>(eachItem.hotel_rate.find((item)=>(item.rate>30000))))
     
    }
}

console.log(444, filteredList)

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
                        Hotels and more in Goa</p>

                    <h3>Hotels, Villas, Apartments and more in Goa</h3>

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
                            <select className="section-popularity" name="" id="">
                                <option value="pop">Popularity</option>
                                <option value="pop">Price-Low to High</option>
                                <option value="pop">Price-High to Low</option>
                                <option value="pop">User Rating-High to Low</option>
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
                            filteredList.map((hotel)=>(
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