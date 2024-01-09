import "./css/index.css";
import "./css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import HotelIcon from "./images/ginger.jpg"
import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";
import { useParams } from "react-router-dom";
import { calculateTax, calculateTotal, convertDateFormat, differenceBetweenDates, formatCheckoutDateTime, formatDateTime } from "../Utility/utility";

export default function PageFour(){
  
    const { hotels, start_date, end_date, adultCount, roomCount, roomTypeId, selectedDate, finalDate } = useContext(AppContext)
    const { id } = useParams()

    const [addBreakfastOption, setAddBreakfastOption] = useState("breakfast")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [emailId, setEmailId] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [couponCode, setCouponCode] = useState("")


    function getHotelSpeceficData(){
        return hotels.find((hotel)=>(hotel._id===id))
      }


    const roomDetails = getHotelSpeceficData()  

    const onChangeRadio = (value) =>{
         setAddBreakfastOption(value)
    }
    
    const onCouponCodeChange = (value) =>{
        setCouponCode(value)
    }
  
    const roomByType = roomDetails && roomDetails.hotel_rate.find((room)=>(room.room_type_id._id===roomTypeId._id))
    const roomRate = roomByType.rate;
    console.log(3456, roomRate, roomTypeId)

    const checkoutDate = convertDateFormat(selectedDate);
    const checkinDate = convertDateFormat(finalDate)

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
    
    
    </head>
    
    <body>
        
        <headerparent>
            <h3>Review Your Booking</h3>
    
        </headerparent>
       
        <mainpart>
            <section>
                <div className="main-body-detail">
                    
                    <div className="left-body-main">
    
                        <div className="review-section-parent">
                            
                            <div className="review-card-section">
                               
                                <h2>{roomDetails.name}, {roomDetails.city}</h2>
                                <div className="review-section">
                                    <div className="review-rating">
                                        <ul>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-solid fa-star"></i></li>
                                            <li><i className="fa-regular fa-star"></i></li>
                                            <li><i className="fa-regular fa-star"></i></li>
                                        </ul>
                                    </div>
                                    <div>
                                        <button className="change-friendly">Change Friendly</button><br/>
                                    </div>
    
                                </div>
                                <p>{roomDetails.address}</p>
    
    
    
    
                            </div>
                            <div className="ginger-goa">
                                <img src={HotelIcon} alt=""/>
                            </div>
    
                        </div>
                     
                        <section>
                            <div className="night-stay-detail-parent">
                             
                                <div className="check-in-out">
    
                                    <div className="check-in">
                                        <p>
                                        <h6>CHECK IN</h6>
                                        {formatDateTime(convertDateFormat(selectedDate))}
                                        </p>
                                    </div>
    
                                    <div className="night-stay-parent">
    
                                        <span className="night-stay">{differenceBetweenDates(checkoutDate, checkinDate)} NIGHT</span>
                                    </div>
    
                                    <div className="check-out">
                                        <p>
                                         <h6>CHECK OUT</h6>   
                                         {formatCheckoutDateTime(convertDateFormat(finalDate))}
                                        </p>
                                    </div>
    
    
                                </div>
                               
                                <div className="night-stay-detail">
                                    <h6>{differenceBetweenDates(checkoutDate,checkinDate)} Night | {adultCount} Adults | {roomCount} Room</h6>
                                </div>
                            </div>
                        </section>
    
                    
                        <section className="luxe-twin-all">
                            <div>
                                <div className="luxe-twin-room">
                                    <h6>Luxe Twin Room</h6>
                                    <p>2 Adults
                                    <ul>
                                        <li>Room Only</li>
                                        <li>No Meals Included</li>
                                        <li>20% discount in Food & Soft Beverage</li>
                                        <li><span>Non-Refundable</span> On Cancellation. You will not get any refund <a
                                                href="#">Cancellation Policy Details</a></li>
                                    </ul>
                                    </p>
                                </div>
    
                            </div>
    
                        
                            <div className="inclusions-section">
    
                                <a className="see-inclusons" href="#">See inclusions</a>
                            </div>
                        </section>
                       
                        <section>
                            <div className="upgrade-stay">
                                <h5>Upgrade Your Stay</h5>
                                <p>
                                    <input type="radio" checked={addBreakfastOption==="breakfast"} onChange={()=>{onChangeRadio("breakfast")}}/> Add Breakfast for ₹1120 for all guests
    
                                    <input type="radio" checked={addBreakfastOption==="breakfast-lunch-dinner"} onChange={()=>{onChangeRadio("breakfast-lunch-dinner")}}/> Add Breakfast +Lunch/Dinner ₹2240 for all guests
                                </p>
                            </div>
                        </section>
                     
                        <section className="important-info">
                            <div className="luxe-twin-room">
                                <h5>Important Information</h5>
                                <ul>
                                    <li>Passport,Adhar,Driving License and Govt ID are accepted as ID proof</li>
                                    <li>Pets are not allowed</li>
                                    <li>Pets are not allowed</li>
                                    <li>Pets are not allowed</li>
    
                                </ul>
                            </div>
                        </section>
                     
                        <section className="guest-details">
                            <div>
                                <h5>Guest Details</h5>
                                <p className="title-fullname"><span>TITLE</span> <span>FULL NAME</span></p>
                                <div>
                                    <select name="" id="">
                                        <option value="MR">Mr</option>
                                        <option value="MRS">Mrs</option>
                                    </select>
                                    
                                    <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} required/>
                                    <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}required/>
    
                                </div>
    
                                <div className="email-number-details">
                                    <div>
                                        <p><span>EMAIL,ACCESS</span>(Optional data and information)</p>
                                        <input type="email" placeholder="Email ID" value={emailId} onChange={(e)=>{setEmailId(e.target.value)}} required/>
                                    </div>
                                    <div className="mobile-number">
                                        <span>MOBILE NUMBER</span><br/>
                                        <select name="" id="">
                                            <option value="91">+91</option>
                                            <option value="880">+880</option>
                                            <option value="971">+971</option>
                                        </select>
                                        <input type="number" placeholder="Contact Number" value={mobileNumber} onChange={(e)=>{setMobileNumber(e.target.value)}} required/>
                                    </div>
    
                                </div>
                                {/* <p className="gst-detail">
                                    <input type="checkbox"/> Enter GST Details <span>Optional</span>
                                </p> */}
                                <p className="add-guest"><a href="#">+ Add Guest</a></p>
                            </div>
                        </section>
                       
                        <section className="login-secret">
                            <div>
                                <p>Login to prefill traveller details and get access to secret deals</p>
                            </div>
                            <div>
                                <button>LOGIN</button>
                            </div>
                        </section>
                       
                        <section>
                            <div className="special-request">
                                <div>
    
                                    <h6>Special Request</h6>
                                    <p>Special requests are subject to each hotel's availability, maybe chargeable & can't
                                        be guaranteed</p>
    
                                </div>
                                <div>
                                    <span><i className="fa-solid fa-angle-down"></i></span>
                                </div>
                            </div>
                        </section>
                    
                        <section>
                            <div className="terms-services">
                                <p>By proceeding, I agree to MakeMyTrip's <a href="#">User Agreement</a>, <a href="#">Terms
                                        of Service</a> and <a href="#">Condition property</a></p>
                            </div>
                            
                            <div>
                                <button className="pay-now">PAY NOW</button>
                            </div>
                        </section>
                    </div>

    
    
                    <div className="right-body-main">
                        <div className="price-details-breakup">
                           
                            <h4>Price Breakup</h4>
                            <div className="price-breakup">
                                <div>
                                    <b>{roomCount} Room x {differenceBetweenDates(checkoutDate,checkinDate)} Night</b><br/>
                                    <span>Base Price</span>
                                </div>
                                <div>
                                    <span className="price">{roomRate * differenceBetweenDates(checkoutDate,checkinDate)}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="hotel-taxes">
                                <div>
                                    <b>Hotel Taxes</b> <i className="fa-solid fa-circle-info"></i>
                                </div>
                                <div>
                                    <span className="taxes">₹ {calculateTax(roomRate * differenceBetweenDates(checkoutDate,checkinDate))}</span>
                                </div>
                            </div>
                            <hr/>
                            <div className="donate-card">
                                <div>
                                    <p>
                                        <input type="checkbox"/> Donate ₹5 to build resilient travel <br/>destinations. <a
                                            href="#">T&Cs</a>
                                    </p>
                                </div>
                                <div>
                                    <span className="donate-five">₹0</span>
                                </div>
                            </div>
                            <div className="total-card">
                                <div>
                                    <b>Total Amount to be paid</b>
                                </div>
                                <div>
                                    <span className="bill">₹ {calculateTotal(roomRate * differenceBetweenDates(checkoutDate,checkinDate))}</span>
                                </div>
                            </div>
                        </div>
                     
    
                        <div className="coupon-codes">
                            <b>Coupon Codes</b>
                            <p>No coupon codes applicable for this property.</p>
                            <div className="mmt-gift-cards">
                                <p>MMT Gift Cards can be applied at payment step</p>
                            </div>
                            <div>
    
                                <input type="text" placeholder="Have a Coupon Code" value={couponCode} onChange={(e)=>{onCouponCodeChange(e.target.value)}}/><button className="btn-coupon">
    
                                    <i className="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
    
                        <div className="why-signup">
                            <b>WHY <a href="#">SIGN UP</a> OR <a href="#">LOGIN</a></b>
                            <ul>
                                <li><i className="fa-solid fa-check"></i> Get access to <span className="li-bold">Secret
                                        Deals</span></li>
                                <hr/>
                                <li><i className="fa-solid fa-check"></i> <span className="li-bold">Book Faster</span> -we'll save &
                                    pre-enter your details</li>
                                <hr/>
                                <li><i className="fa-solid fa-check"></i> <span className="li-bold">Manage your bookings</span> from
                                    one place</li>
    
                            </ul>
                        </div>
    
                        
                    </div>
    
                
    
    
    
    
    
                </div>
            </section>
    
    
    
    
    
    
        </mainpart>
       
        <footer>
    
    
        </footer>

    
        
        <script src="js/bootstrap.min.js"></script>
    </body>
    </div>
    )
}