
import HotelIcon from "./images/icon/hotel.png"
import VillaIcon from "./images/icon/villa.png"
import HolidayIcon from "./images/icon/holiday.png"

export default function Header(){


    return(
      
            <header className="header">
       
       <div className="">
           <h4 className="header-name">make<span className="my"><i>more</i></span>trip</h4>
       </div>
      
       <nav>
           <div className="nav-icon">

               <ul className="header-icon">
                   <li>
                       <a href="#">
                           <img className="header-img" src={HotelIcon} alt=""/><br/>
                           Hotels
                       </a>
                   </li>
                   <li>
                       <a href="#">
                           <span className="icon-center">
                               <img className="header-img" src={VillaIcon} alt=""/> </span><br/>
                           Homestays<br/>& Villas
                       </a>
                   </li>
                   {/* <li>
                       <a href="#">
                           <img className="header-img" src={HolidayIcon} alt=""/><br/>
                           Holidya <br/> Packages
                       </a>
                   </li> */}
                  
               </ul>
           </div>
       </nav>

   
       <div className="login-section">
       
           <div className="country">
               <select className="select-country">
                   <option value="IN">INR</option>
                   <option value="JP"><span>DOLLAR</span></option>
                   <option value="SP">EURO</option>
                   <option value="UAE">DIRHAM</option>
                   <option value="QATAR">DINHAR</option>
               </select>
           </div>
           <div>
               <h6 className="log-my"><i>my</i></h6>
           </div>
           <div>
               <button className="btn-login">Login or Create Account</button>
           </div>

       </div>



   </header>

    
    )
}