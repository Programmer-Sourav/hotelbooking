import { useNavigate } from "react-router-dom"
import { calculateTax, formatNumber } from "../Utility/utility"
import ReactStars from "react-stars"
import HotelPhoto from "./images/hotel-ar.jpg"
export default function HotelCard({data}){

    console.log(1234, data)

    const navigate = useNavigate()

    const goToDetails = (id) =>{
        navigate(`/hoteldetails/${id}`)
    }

    return(
        <div className="parent-card" onClick={()=>{goToDetails(data._id)}}>
                        <div className="card-section">
                         
                            <div className="img-detail">
                               
                                <div>
                                    <img className="hotel-img" src= {HotelPhoto} alt=""/>
                                    <div className="view-all-img">
                                        <div>

                                            <img className="view-hotel" src={HotelPhoto} alt=""/>
                                        </div>
                                        <div>

                                            <img className="view-hotel" src={HotelPhoto} alt=""/>
                                        </div>
                                        <div>

                                            <img className="view-hotel" src={HotelPhoto} alt=""/>
                                        </div>
                                        <div className="detail-view">
                                            <a href="#">View All</a>
                                        </div>
                                    </div>

                                </div>
                                
                                <div>
                                <div className="rat-name-hotel">
                                    <div class="hotel-and-star">
                                        <h4>{data.name}</h4>

                                        <ul className="rat-star">
                                           {/* <li><i className="fa-solid fa-star"></i></li> */}
                                          <ReactStars count={5} size={24} value={data.rating_review && data.rating_review.rating} color1={'#cccccc'} color2={'#FFD700'} edit={false} />
                                        </ul>
                                        
                                    </div>
                                    
                                        



                                </div>
                                <p className="loact-name"><span className="place-name">{data.city}</span> | 360 m from Immaculate Conception Church</p>
                                
                                <span className="couple-friendly">Couple Friendly</span>
                               
                                <p className="breakfast-info"><i className="fa-solid fa-check"></i>  Breakfast Included</p>
                               
                                <p className="benefit-info">Prime location with delicious breakfast</p>
                            </div>
                            </div>
                            {/* <!-- right end card section --> */}
                            <div>
                                <div className="end-right">
                                    <h3>Very Good <span>{formatNumber(data.rating_review && data.rating_review.rating)}</span></h3>
                                    
                                    <span>(821 Ratings)</span>
                                    <br/>
                                   
                                    <span className="dis-price"><del>₹ 4,600</del></span>
                                    
                                    <h2>₹ {data.hotel_rate[0] && data.hotel_rate[0].rate}</h2>
                                   
                                    <p>+ ₹ {calculateTax(data.hotel_rate[0] && data.hotel_rate[0].rate)} taxes & fees <br/>

                                        <span>Per Night</span>
                                    </p>
                                    
                                    
                                    <a href="#">Login to Book Now & Pay Later!</a>

                                </div>

                            </div>
                            
                        </div>
                        <p className="offer-card">Exclusive Offer on City Cards. Get INR 699 OFF</p>
                    </div>
    )
}