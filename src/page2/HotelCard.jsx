import { calculateTax } from "../Utility/utility"

export default function HotelCard({data}){

    console.log(1234, data)

    return(
        <div className="parent-card">
                        <div className="card-section">
                         
                            <div className="img-detail">
                               
                                <div>
                                    <img className="hotel-img" src="./images/hotel-ar.jpg" alt=""/>
                                    <div className="view-all-img">
                                        <div>

                                            <img className="view-hotel" src="./images/hotel-ar.jpg" alt=""/>
                                        </div>
                                        <div>

                                            <img className="view-hotel" src="./images/view.jpg" alt=""/>
                                        </div>
                                        <div>

                                            <img className="view-hotel" src="./images/hotel-ar.jpg" alt=""/>
                                        </div>
                                        <div className="detail-view">
                                            <a href="#">View All</a>
                                        </div>
                                    </div>

                                </div>
                                
                                <div>
                                <div className="rat-name-hotel">
                                    <div>
                                        <h4>{data.name}</h4>

                                    </div>
                                    <div>
                                        <ul className="rat-star">
                                           <li><i className="fa-solid fa-star"></i></li>
                                           <li><i className="fa-solid fa-star"></i></li>
                                           <li><i className="fa-solid fa-star"></i></li>
                                           <li><i className="fa-regular fa-star"></i></li>
                                           <li><i className="fa-regular fa-star"></i></li>
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
                                    <h3>Very Good <span>3.9</span></h3>
                                    
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