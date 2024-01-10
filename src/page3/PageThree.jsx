import "./css/index.css";
import "./css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import DummyImage from "./images/img03.jpg"
import RoomDummy from "./images/room.jpg"
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { calculateTax, calculateTotal, formatNumber } from "../Utility/utility";
import MapComponent from "./MapComponent";
import { Rating } from "./RatingComponent";
import ReactStars from "react-stars";
import HotelImage from "./images/img.jpg"
import { selectRoomForReservation } from "../api/remote";

export default function PageThree(){

const { id } = useParams()

const { hotels, dispatch, roomCount, setRoomTypeId, onSetSelectedRoomCode} = useContext(AppContext)

const hotelData = getHotelSpeceficData()

function getHotelSpeceficData(){
  return hotels.find((hotel)=>(hotel._id===id))
}

const dummySimilarHotels = hotels.filter((hotel)=>hotel._id!==id)

const navigate = useNavigate()

const goToReviewPage = (roomTypeId, roomTypeCode) =>{
    console.log(999, roomTypeId._id, roomTypeCode)
    navigate(`/hotels/review/${id}`)
    setRoomTypeId(roomTypeId._id)
    onSetSelectedRoomCode(roomTypeCode)
}

//console.log(777, hotelData)
const keyVal = [{"Swiming Pool" : "fa-solid fa-water-ladder"},
{"Spa Tub": "fa-solid fa-spa"},
{"Restaurant":"fa-solid fa-utensils"},
{"Lounge":"fa-solid fa-water-ladder"},
{"Bar":"fa-solid fa-whiskey-glass"},
{"room service": "fa-solid fa-bell-concierge"},
{"Fire place": "fa-solid fa-fire"},
{"Heater":"fa-solid fa-heat"},
{"Geysar":"fa-solid fa-heat"},
{"Living Area": "fa-solid fa-sprinkler"},
{"Fitness Center" : "fa-solid fa-water-ladder"},
{"cook" : "fa-solid fa-fire"},
{"Balcony" : "fa-solid fa-spa"},
{"Home Theatre": "fa-solid fa-sprinkler"},
{"River view" : "fa-solid fa-whiskey-glass"},
{"Extra space": "fa-solid fa-bell-concierge"}
] 

// const keys = ["Swiming Pool", "Spa"]
// const aminities = ["Swimming Pool", "Gym", "Spa"]

// function filterAms(){
//     return keyVal.filter((item) => aminities.includes(Object.keys(item)[0]));
// }
// console.log(777, filterAms())
return(
<div> 
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>make more trip</title>

   
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

  
<style>
          {`
            table,
            th,
            td {
                border: 2px solid rgb(168, 166, 166);
            }
          `}
        </style>
</head>

<body>
    {/* <!-- Header --> */}
    <headerdiv>
        <h2>Header</h2>

    </headerdiv>
    {/* <!-- main --> */}
    <maindiv>
        
        <section>
            <div>
                <div id="carouselExample" className="carousel slide">

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src= {DummyImage} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={DummyImage} className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src={DummyImage} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="hotel-name">
                    <div>
                        <h2>{hotelData.name}, {hotelData.city} <Rating rating={hotelData.rating_review && hotelData.rating_review.rating}/></h2>
                    </div>
                    <div>
                        <p><span><i className="fa-solid fa-location-dot"></i></span> Sahibabad, Ghaziabad | <span
                                className="distance">30.0 km</span> from Delhi city centre</p>
                    </div>

                </div>
            </div>
        </section>

        {/* <!-- main nav section --> */}
        <div>
            <nav className="card-nav">
                <ul>
                    <li><a href="#">ROOMS</a></li>
                    <li><a href="#">LOCATION</a></li>
                    <li><a href="#">AMENITIES</a></li>
                    <li><a href="#">USER REVIEWS</a></li>
                    <li><a href="#"></a>SIMILAR PROPERTIES</li>
                </ul>
            </nav>
        </div>
        <hr/>
        {/* <!-- main main section --> */}
        <section>
            <div className="select-room">
                <b>Select Rooms</b>
            </div>

            {/* <!-- main part --> */}
            <table>
                <thead>
                    <tr>
                        <th>ROOM TYPE</th>
                        <th>OPTION</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
               { hotelData.hotel_rate && hotelData.hotel_rate.map((hotel)=>
                <tr>
                    <td>
                        <div className="room-card-details">
                            <div className="room-card">
                                <img src= {RoomDummy} alt=""/>
                            </div>
                            <div className="room-detail">
                                <h4>{hotel.room_type_id.room_type} Double Non AC</h4>
                                <ul>
                                    <li><i className="fa-brands fa-windows"></i> 140 sq.ft</li>
                                    <li><i className="fa-brands fa-windows"></i> City View</li>
                                    <li><i className="fa-solid fa-bed"></i> Double Bed</li>
                                </ul>
                            </div>
                            <div className="optional-details">
                                <ul>
                                    <li>WiFi</li>
                                    <li>Mineral Water</li>
                                    <li>Additional Charge</li>
                                </ul>
                            </div>




                        </div>
                    </td>
                    <td className="td-option">
                        <div className="option-detail-card">
                            <div className="option-detail">
                                <button>RECOMMENDED</button>
                            </div>
                            <div className="option-li">
                                <b>Room Only</b>
                                <ul>
                                    <li><i className="fa-regular fa-circle-xmark"></i> Non-Refundable</li>
                                    <li><i className="fa-regular fa-circle-xmark"></i> No meals included</li>
                                    <li><i className="fa-regular fa-clock"></i> Free Early Check in, Subject to
                                        Availability, EKITURIPATI</li>
                                </ul>


                            </div>
                            <div className="more-details-a">
                                <a href="#">MORE DETAILS</a>
                            </div>
                        </div>
                    </td>

                    <td className="td-price">
                        
                        <div className="price-card">
                            <div className="price-offer-detail">
                                <p>Exclusive Offer on Federal Bank Cards. GET INR 1959 OFF <a href="#">SELECT TO
                                        AVAIL</a></p>
                            </div>
                            <div className="available-offer">
                                <span>Per Night</span>
                                <h6><del>₹2,190</del></h6>
                                <h4>₹ {hotel.rate}</h4>
                                <h5>+₹ {calculateTax(hotel.rate)} taxes & fees</h5>
                                <p>To Get This @INR{calculateTotal(hotel.rate).toFixed(2)} or Less <a href="#">LOGIN NOW</a></p>
                            </div>
                            <div className="select-room-btn">
                                {/* <button onClick={()=>{selectRoomForReservation(dispatch, id, hotel.room_type_id, hotel.room_type_id.room_type_id, roomCount)}}>Select Room</button> */}
                                <button onClick={()=>{goToReviewPage(hotel.room_type_id, hotel.room_type_id.room_type_id)}}>Select Room</button>
                            </div>
                        </div>
                    </td>
                </tr>
)}
            </table>


        </section>
        {/* <!-- location --> */}
        <section>
            <div className="location">
                <p>Location</p>
                 <MapComponent/>
            </div>
        </section>
        {/* <!-- amenities --> */}
        <section>
            <div className="amenities-all">
              <h4>{hotelData.name}, {hotelData.city}</h4>
              <div>
               <ul className="popu-amenities">
              {hotelData.aminities && hotelData.aminities.amenties.map((amenity, index) => {
               const matchingAmenity = keyVal.find((item) => amenity.toLowerCase() === Object.keys(item)[0].toLowerCase());

           return (
              <li key={index}>
                <span>
            {matchingAmenity && <i className={matchingAmenity[Object.keys(matchingAmenity)[0]]}></i>}
          </span> 
          {matchingAmenity && Object.keys(matchingAmenity)[0]}
        </li>
      );
    })}
  </ul>
</div>



                <hr/>
                {/* <!--  --> */}
                <div className="all-avaible-info">
                    {/* <!--  --> */}
                    <div>
                        <h5>Highlighted Amenities</h5>
                        <ul>
                            {hotelData.aminities.amenties.map((eachItem)=>(
                                <li>-{eachItem}</li>
                            ))
                           
                           }
                        </ul>

                    </div>
                    <div>
                        <h5>Basic Facilities</h5>
                        <ul>
                            <li>- Swimming Pool</li>
                            <li>- Dry Cleaning Service</li>
                            <li>- Bathroom</li>
                            <li>- Smoke Detector</li>
                        </ul>

                    </div>
                    <div>
                        <h5>Transfers</h5>
                        <ul>
                            <li>- Paid Bus Station Transfers</li>
                            <li>- Paid Pickup/Drop</li>
                            <li>- Paid Railway Transfers</li>
                            <li>- Paid Airport Transfers</li>
                        </ul>

                    </div>
                    <div>
                        <h5>Food and Drinks</h5>
                        <ul>
                            <li>- Restaurant</li>
                            <li>- Bar</li>
                            <li>- Kids' Meals</li>
                            <li>- cafe</li>
                        </ul>

                    </div>
                    <div>
                        <h5>Payment Services</h5>
                        <ul>
                            <li>- Currency Exchange</li>
                        </ul>

                    </div>

                </div>

            </div>
        </section>
        {/* <!-- user reviews --> */}
        <section>
            <div className="user-reviews">
                <h3>Guest Reviews</h3>
                <div className="review-card">
                    <h4>Awesome Stay</h4>
                    <p><b>Rated</b><span className="rate"> 5.0</span> by Dushyant Malik . Couple Traveller . Dec 31, 2023
                    </p>
                    <p>The best location, great vegetarian food and cooperative staff. Feels like staying at home only.
                        Varitey of the food is so much that, its difficult to decide what to eat and what to leave. Best
                        vegetarian hotel.</p>

                    <p className="find-helpful">Do you find this helpful? <i className="fa-regular fa-thumbs-up"></i>
                    </p>

                </div>

            </div>
        </section>
        {/* <!-- similar properties --> */}
        {/* Basically, it may be based up on some business condition, like star category, user review or anything related to business condition */}
        <section>
            <h4 className="similar-main">Similar Properties</h4>
            { dummySimilarHotels.map((hotel)=>(
            <div className="card-similar-properties">
                
                <div>
                    <img src={HotelImage} alt=""/>
                    <h5>{hotel.name}</h5>
                    
                    <span>
            <ReactStars
                count={5}
                value={formatNumber(hotel.rating_review && hotel.rating_review.rating)}
                size={20}
                color1={'#cccccc'}  
                color2={'#ffd700'}  
                edit={false}        
           />
                    </span>
                    <h4>₹ {hotel.hotel_rate[0] && hotel.hotel_rate[0].rate}</h4>
                    <span className="per-night">Per Night</span>
                    <br/>
                    <button>SELECT STAY</button>
                    <hr/>
                    <h5 className="rate-review"><span>{formatNumber(hotel.rating_review && hotel.rating_review.rating)}</span> Very Good</h5>
                    <hr/>
                    <p>.</p>
                    <hr/>
                    <p><del>Free Cancellation</del></p>
                    <hr/>
                    <p className="free-brkfast">Free Breakfast Available at Higher Price</p>


                </div>
            </div>
        ))}
        </section>

    </maindiv>
  
    <footer>

    </footer>
    
    <script src="js/bootstrap.min.js"></script>
</body>
</div>
    )
}