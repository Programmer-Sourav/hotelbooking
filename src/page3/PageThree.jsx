import "./css/index.css";
import "./css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import DummyImage from "./images/img03.jpg"
import RoomDummy from "./images/room.jpg"
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";
import { calculateTax } from "../Utility/utility";

export default function PageThree(){

const { id } = useParams()

const { hotels } = useContext(AppContext)

const hotelData = getHotelSpeceficData()

function getHotelSpeceficData(){
  return hotels.find((hotel)=>(hotel._id===id))
}


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
                        <h2>{hotelData.name}, {hotelData.city} <span className="rating-solid"><i
                                    className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i
                                    className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i
                                    className="fa-solid fa-star"></i></span></h2>
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
                                <h4>₹ {}</h4>
                                <h5>+₹ {} taxes & fees</h5>
                                <p>To Get This @INR1,890 or Less <a href="#">LOGIN NOW</a></p>
                            </div>
                            <div className="select-room-btn">
                                <button>Select Room</button>
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
                <p>Location Section</p>

            </div>
        </section>
        {/* <!-- amenities --> */}
        <section>
            <div className="amenities-all">
                <h4>Amenities at Country Inn and Suites by Radisson, Sahibabad</h4>
                <div>
                    <ul className="popu-amenities">
                        <li><span><i className="fa-solid fa-water-ladder"></i></span> Swimming Pool</li>
                        <li><span><i className="fa-solid fa-spa"></i></span> Spa</li>
                        <li><span><i className="fa-solid fa-utensils"></i></span> Restaurant</li>
                        <li><span><i className="fa-solid fa-water-ladder"></i></span> Lounge</li>
                        <li><span><i className="fa-solid fa-whiskey-glass"></i></span> Bar</li>
                    </ul>
                </div>
                <hr/>
                {/* <!--  --> */}
                <div className="all-avaible-info">
                    {/* <!--  --> */}
                    <div>
                        <h5>Highlighted Amenities</h5>
                        <ul>
                            <li>- Swimming Pool</li>
                            <li>- Spa</li>
                            <li>- Restaurant</li>
                            <li>- Lounge</li>
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
        <section>
            <h4 className="similar-main">Similar Properties</h4>
            <div className="card-similar-properties">
                
                <div>
                    <img src="./images/img.jpg" alt=""/>
                    <h5>Country Inn and Suites by Radisson, Sahibabad</h5>
                    
                    <span><i
                        className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i
                        className="fa-solid fa-star"></i> <i className="fa-solid fa-star"></i> <i
                        className="fa-solid fa-star"></i>
                    </span>
                    <h4>₹ 6,299</h4>
                    <span className="per-night">Per Night</span>
                    <br/>
                    <button>SELECT STAY</button>
                    <hr/>
                    <h5 className="rate-review"><span>4.2</span> Very Good</h5>
                    <hr/>
                    <p>.</p>
                    <hr/>
                    <p><del>Free Cancellation</del></p>
                    <hr/>
                    <p className="free-brkfast">Free Breakfast Available at Higher Price</p>


                </div>
            </div>
        </section>

    </maindiv>
  
    <footer>

    </footer>
    
    <script src="js/bootstrap.min.js"></script>
</body>
</div>
    )
}