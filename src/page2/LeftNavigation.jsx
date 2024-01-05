import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export default function LeftNavigation(){

    const { priceRangeArrayForCheckbox, onPriceStateChange, priceState, onBudgetRangeChange, budgetState, 
      onBudgetMinChange, onBudgetMaxChange, searchByBudgetState, starState, ratingState, onStarStateChange, onRatingStateChange, propertyState,
       onPropertyStateChange, mmtValueState, onMMTStateChange} = useContext(AppContext)

    return(
        <div>
        <h4 className="select-filters">Select Filters</h4>

        {/* <!-- start checkbox --> */}
        <h5>Suggested For You</h5>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Last Minute Deals
                </p>
            </div>
            <div>

            </div>

         
        </div>
       
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox" checked={starState.includes("fiveStar")} onChange={(e)=>{onStarStateChange("fiveStar")}} /> 5 Star
                </p>
            </div>
            <div>
                <span>(177)</span>
            </div>

       
        </div>
   
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> North Goa
                </p>
            </div>
            <div>

            </div>

           
        </div>
       
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/>
                    Resorts
                </p>
            </div>
            <div>
                <span>(234)</span>
            </div>

        </div>
     
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Unmarried Couples Allowed
                </p>
            </div>
            <div>
                <span>(1526)</span>
            </div>

     
        </div>
 
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Free Cancellation
                </p>
            </div>
            <div>
                <span>(277)</span>

            </div>

        </div>
  
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Calangute
                </p>
            </div>
            <div>

            </div>

      
        </div>
  
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Candolim
                </p>
            </div>
            <div>

            </div>

      
        </div>
    
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Baga
                </p>
            </div>
            <div>

            </div>

            
        </div>
      
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Anjuna
                </p>
            </div>
            <div>

            </div>

         
        </div>
     
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Panjim
                </p>
            </div>
            <div>

            </div>

          
        </div>
    
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> South Goa
                </p>
            </div>
            <div>

            </div>

           
        </div>

  
        <h5>Per Night Price</h5>
        {priceRangeArrayForCheckbox.map((priceRange)=>(
        <div className="checkbox-display">
            
              
            <div>
                <p>
                    <input type="checkbox" checked={priceState.includes(priceRange.id)} onChange={(e)=>{onPriceStateChange(priceRange.id)}}/> ₹ {priceRange.min} - ₹ {priceRange.max}
                </p>
            </div>
            <div>
                <span>(231)</span>

            </div>
        
            
        </div>
         ))}
      
        {/* <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> ₹ 3000 - ₹ 5500
                </p>
            </div>
            <div>
                <span>(347)</span>
            </div>

           
        </div>
        
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> ₹ 5500 - ₹ 7500
                </p>
            </div>
            <div>
                <span>(450)</span>

            </div>

           
        </div>
     
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> ₹ 7500 - ₹ 9500
                </p>
            </div>
            <div>
                <span>(239)</span>
            </div>

         
        </div>
        
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> ₹ 9500 - ₹ 15000
                </p>
            </div>
            <div>
                <span>(526)</span>
            </div>

        </div>
       
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> ₹ 15000 - ₹ 30000
                </p>
            </div>
            <div>
                <span>(277)</span>

            </div>

         
        </div>
     
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> ₹ 30000+
                </p>
            </div>
            <div>
                <span>(147)</span>

            </div>

            
        </div> */}

        {/* <!-- your budget section --> */}
        <div>
            <div className="min-max-budget">
                <label for="">Your Budget</label>
                  <div>
                    <input type="number" placeholder="Min" value= {budgetState.min} onChange={(e)=>{onBudgetMinChange(e.target.value)}}/> to
                    <input type="number" placeholder="Max" value={budgetState.max} onChange={(e)=>{onBudgetMaxChange(e.target.value)}}/> <button onClick={()=>onBudgetRangeChange(budgetState.min, budgetState.max)}><i
                            className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </div>

        {/* <!-- toggle switch --> */}
        <div className="toggle-switch">
            <div>
                <p>MMT ValueStays <span>(28)</span></p>
            </div>
            <div>
                <label className="switch">
                    <input type="checkbox"  checked={mmtValueState} onChange={(e)=>{onMMTStateChange(e.target.checked)}}/>
                    <span className="slider round"></span>
                </label>
            </div>


        </div>

      
        <h5>Star Category</h5>
        <div className="checkbox-display">
            <div>
                <p>
                <input type="checkbox" checked={starState.includes("threeStar")} onChange={(e)=>{onStarStateChange("threeStar", e.target.checked)}} /> 3 Star
                </p>
            </div>
            <div>
                <span>(351)</span>

            </div>

            
        </div>
        <div className="checkbox-display">
            <div>
                <p>
                <input type="checkbox" checked={starState.includes("fourStar")} onChange={(e)=>{onStarStateChange("fourStar")}} /> 4 Star
                </p>
            </div>
            <div>
                <span>(561)</span>

            </div>

        </div>
        <div className="checkbox-display">
            <div>
                <p>
                <input type="checkbox" checked={starState.includes("fiveStar")} onChange={(e)=>{onStarStateChange("fiveStar")}} /> 5 Star
                </p>
            </div>
            <div>
                <span>(1142)</span>

            </div>

           
        </div>

   
        <h5>User Rating</h5>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox" checked={ratingState.includes("4.2")} onChange={()=>{onRatingStateChange("4.2")}} /> Excellent: 4.2+
                </p>
            </div>
            <div>
                <span>(351)</span>

            </div>

           
        </div>
        <div className="checkbox-display">
            <div>
                <p>
                <input type="checkbox" checked={ratingState.includes("3.5")} onChange={()=>{onRatingStateChange("3.5")}} /> Very Good: 3.5+
                </p>
            </div>
            <div>
                <span>(561)</span>

            </div>

           
        </div>
        <div className="checkbox-display">
            <div>
                <p>
                <input type="checkbox" checked={ratingState.includes("3")} onChange={()=>{onRatingStateChange("3")}} /> Good: 3+
                </p>
            </div>
            <div>
                <span>(1142)</span>

            </div>

          
        </div>

     
        <h5>Property Type</h5>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox" checked={propertyState.includes("hotel")} onChange={()=>{onPropertyStateChange("hotel")}}/> Hotel
                </p>
            </div>
            <div>
                <span>(351)</span>

            </div>

           
        </div>
        <div className="checkbox-display">
            <div>
                <p>
                <input type="checkbox" checked={propertyState.includes("resort")} onChange={()=>{onPropertyStateChange("resort")}}/> Resorts
                </p>
            </div>
            <div>
                <span>(341)</span>

            </div>

        </div>
        <div className="checkbox-display">
            <div>
                <p>
                <input type="checkbox" checked={propertyState.includes("homestay")} onChange={()=>{onPropertyStateChange("homestay")}}/> Homestays
                </p>
            </div>
            <div>
                <span>(1142)</span>

            </div>

            
        </div>
        <div className="checkbox-display">
            <div>
                <p>

                </p>
            </div>
            <div>
                <a href="#">Show 7 more</a>

            </div>
            
        </div>
       
        <b className="locality">Locality</b> <br/>
        <span>Preferred By Tourists</span>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> North Goa
                </p>
            </div>
            <div>
                <span></span>

            </div>

           
        </div>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> South Goa
                </p>
            </div>
            <div>
                <span></span>

            </div>

         
        </div>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Calangute
                </p>
            </div>
            <div>
                <span></span>

            </div>



            
        </div>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Baga
                </p>
            </div>
            <div>
                <span></span>

            </div>
        </div>
        
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Anjuna
                </p>
            </div>
            <div>
                <span></span>

            </div>



           
        </div>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Condolin
                </p>
            </div>
            <div>
                <span></span>

            </div>



        </div>
    
        {/* <span>Other Areas</span>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Margao
                </p>
            </div>
            <div>
                <span></span>

            </div>

            
        </div>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Vasco Da Gama
                </p>
            </div>
            <div>
                <span></span>

            </div>

        </div>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Agonda
                </p>
            </div>
            <div>
                <span></span>

            </div>







            
        </div>
        <div className="checkbox-display">
            <div>
                <p>
                    <input type="checkbox"/> Varca
                </p>
            </div>
            <div>
                <span></span>

            </div>



            
        </div> */}
      
{/* <h5>MMT Luxe Selections</h5>
<div className="checkbox-display">
    <div>
        <p>
                <input type="checkbox"/> MMT Luxe Selections
            </p>
        </div>
        <div>
            <span>(2)</span>

        </div>

  
</div> */}

<h5>Amenities</h5>
<input className="search-aminities" type="text" placeholder="&#xf002 Search Aminities" style={{fontFamily: "Arial, FontAwesome"}}/>
 <br/>

<b>Guests Love</b>
<div className="checkbox-display">
    <div>
        <p>
            <input type="checkbox"/> <i className="fa-solid fa-bolt"></i>  Swimming Pool
        </p>
    </div>
    <div>
        <span>(251)</span>

    </div>

  
</div>
<div className="checkbox-display">
    <div>
        <p>
            <input type="checkbox"/> <i className="fa-solid fa-bolt"></i> WIFI
        </p>
    </div>
    <div>
        <span>(3341)</span>

    </div>

   
</div>
<div className="checkbox-display">
    <div>
        <p>
            <input type="checkbox"/> <i className="fa-solid fa-bolt"></i> Spa
        </p>
    </div>
    <div>
        <span>(114)</span>

    </div>

   
</div>
<div className="checkbox-display">
    <div>
        <p>

        </p>
    </div>
    <div>
        <a href="#">Show 18 more</a>

    </div>
   
</div>

<button className="btn-homestay"><i className="fa-solid fa-house"></i> Homestays</button>

<h5>Booking Preference</h5>
<div className="checkbox-display">
    <div>
        <p>
            <input type="checkbox"/> Entire Property
        </p>
    </div>
    <div>
        <span>(1)</span>

    </div>

  
</div>
<div className="checkbox-display">
    <div>
        <p>
            <input type="checkbox"/>  Caretaker
        </p>
    </div>
    <div>
        <span>(1)</span>

    </div>

    
</div>
<div className="checkbox-display">
    <div>
        <p>
            <input type="checkbox"/> Instant Book
        </p>
    </div>
    <div>
        <span>(114)</span>

    </div>

   
</div>
<div className="checkbox-display">
    <div>
        <p>
            <input type="checkbox"/>  Homestay
        </p>
    </div>
    <div>
        <span>(1)</span>

    </div>

   
</div>

<div className="back-top-btn">
    <button className="btn-btt">BACK TO TOP</button>

</div>
    
</div>
    )
}