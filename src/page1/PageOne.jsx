import React, { useContext, useEffect, useState } from 'react';

import "./css/index.css";
import "./css/bootstrap.min.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import  FirstIcon from "./images/icon/3125713.png"
import  HotelIcon from "./images/icon/hotel.png"
import VillaIcon from "./images/icon/villa.png"
import HolidayIcon from "./images/icon/holiday.png"
import TrainIcon from "./images/icon/train.png"
import BusIcon from "./images/icon/bus.png"
import CabIcon from "./images/icon/cab.png"
import ForexIcon from "./images/icon/forex.png"
import TravelIcon from "./images/icon/travel.png"
import { AppContext } from '../contexts/AppContext';
import PlacesAutoComplete from '../Places/PlacesAutoComplete';
import { format } from 'date-fns';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function PageOne() {
    const {onChangeInput, placePredictions, inputSearch, roomCount, setRoomCount, childAgeCount, setChildAgeCount, 
        adultCount, setAdultCount, setAdultCountChange, onRoomCountChange, onChildAgeCountChange,
        roomCountHolder, setRoomCountHolder, onRoomCountHolderChange, searchOnButtonClick, selectedDate, 
        setSelectedDate, finalDate, setFinalDate, onSetPerNightCharge, onVipCharge, onPackageCharge, perNightCharge,
         vipCharge, packageCharge, updateDeal
        } = useContext(AppContext)

    const ageOptions = []
      const getAgeArray = () =>{
        
        for(let i =0; i< 45; i++){
            ageOptions.push(i)
        }
        return ageOptions;
      }
     getAgeArray();

     const adultsNumber = []

     const getAdultArray = () =>{
        for(let i=0; i<40; i++){
            adultsNumber.push(i)
        }
        return adultsNumber;
     }
    
    getAdultArray()

    const CustomDatePickerInput = ({ value, onClick }) => (
        <div className="custom-date-picker-input" onClick={onClick}>
             <p className="date-check-in">
             <span>{format(value, 'd')}</span> {format(value, 'MMM, yyyy')}
              </p>
              <span>{format(value, 'EEEE')}</span>
        </div>
         );

    const CustomFinalDatePickerInput = ({ value, onClick }) => (
        <div className="custom-date-picker-input" onClick={onClick}>
              <p className="date-check-in">
                <span>{format(value, 'd')}</span> {format(value, 'MMM, yyyy')}
              </p>
              <span>{format(value, 'EEEE')}</span>
        </div>
          );  
          
          

    return (
        <div>
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>make more trip</title>
                {/* <link rel="stylesheet" href="./css/index.css" /> */}
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                    crossorigin="anonymous"
                    referrerpolicy="no-referrer"
                />
                {/* <link rel="stylesheet" href="css/bootstrap.min.css" /> */}
            </head>

            <body>
                <header className="header">
                    <div>
                        <h4 className="header-name">
                            make<span className="my"><i>more</i></span>trip
                        </h4>
                    </div>
                    <nav>
                        <div className="nav-icon">
                            <ul className="header-icon">
                            {/* <li>
                        <a href="#">
                            <img className="header-img" src= {FirstIcon} alt=""/><br/>
                            Flights
                        </a>
                    </li> */}
                    <li>
                        <a href="#">
                            <img className="header-img" src={HotelIcon} alt=""/><br/>
                            Hotels
                        </a>
                    </li>
                    {/* <li>
                        <a href="#">
                            <span className="icon-center">
                                <img className="header-img" src={VillaIcon} alt=""/> </span><br/>
                            Homestays<br/>& Villas
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="header-img" src={HolidayIcon} alt=""/><br/>
                            Holiday <br/> Packages
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="header-img" src={TrainIcon} alt=""/><br/>
                            Trains
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="header-img" src={BusIcon} alt=""/><br/>
                            Buses
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="header-img" src={CabIcon} alt=""/><br/>
                            Cabs
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon-center"><img className="header-img" src={ForexIcon}
                                    alt=""/></span><br/>
                            Forex Card<br/>& Currency
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img className="header-img" src={TravelIcon} alt=""/><br/>
                            Travel <br/> Insurance
                        </a>
                    </li> */}
                            </ul>
                        </div>
                    </nav>
                    <div className="login-section">
                        <div>
                            <h6 className="log-my"><i>my</i></h6>
                        </div>
                        <div>
                            <button className="btn-login">Login or <br /> Create Account</button>
                        </div>
                        <div className="country">
                            <span className="coun-lan">Country</span><br />
                            <select className="select-country">
                            <option value="IN">India</option>
                            <option value="JP"><span>Japan</span></option>
                            <option value="SP">Spain</option>
                            <option value="UAE">UAE</option>
                            <option value="QATAR">Qatar</option>
                        </select>
                        </div>
                        <div className="country">
                            <span className="coun-lan">Language</span>
                        <select className="select-country" name="" id="">
                            <option value="IN">India</option>
                            <option value="JP"><span>Japan</span></option>
                            <option value="SP">Spain</option>
                            <option value="UAE">UAE</option>
                            <option value="QATAR">Qatar</option>
                        </select>
                        </div>
                    </div>
                </header>

                <main>
                <div className="main-detail-body">

        

<div className="main-body">
    {/* <!--  --> */}
    <div className="main-body-header">
        <div className="radio-form">
            <form action="">
                <input type="radio"  value="noDeal" checked={roomCountHolder==="noDeal"} onChange={(e)=>{onRoomCountHolderChange(e.target.value)}}/>
                <label className="upto-group" for="">Upto 4 Rooms</label>
                <input type="radio"  value="Deal" checked={roomCountHolder==="Deal"} onChange={(e)=>{onRoomCountHolderChange(e.target.value)}}/>
                <label className="upto-group" for="">Group Deals</label>
            </form>
        </div>
        {/* <!--  --> */}
        <div>
            <b className="new">NEW</b>

        </div>
        {/* <!--  --> */}
        <div className="book-property">
            <p>Book Domestic and International Property Online. To list your property <a href="#">Click Here</a>
            </p>
        </div>


    </div>
    {/* <!-- main main section --> */}
    <section>
        {/* <!-- parent div --> */}
        <div className="parent-flex">

            <div className="flexbox">
                <b>City Property Name or
                    Location</b>
                    <br/>
                    <input className="location-field" type="text" placeholder="Agartala" value={inputSearch} onChange={onChangeInput}/><br/>
                    <PlacesAutoComplete placePredictions = {placePredictions}/>
                    <span>India</span>
            </div>
            {/* <!--  --> */}
            <div className="flexbox">
                {/* <!--  --> */}
                <div>


                    {/* <!-- modal -->
                    <!-- Button trigger modal --> */}
                    <button type="button" className="btn btn-check-in" 
                        data-bs-target="#staticBackdrop">
                        Check-In <i className="fa-solid fa-angle-down"></i> <br/>
                        {/* <p className="date-check-in"><span>26</span> Dec,2023</p>
                        <span>Monday</span> */}
                         <DatePicker
                selected= {selectedDate}
                dateFormat= "d MMM yyyy"
                onChange={(date) => setSelectedDate(date)}
                customInput={<CustomDatePickerInput />}
              />
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel"> </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* <!-- modal body calendar --> */}


                                </div>

                            </div>
                        </div>
                    </div>



                </div>

            </div>
            {/* <!--  --> */}
            <div className="flexbox">
                {/* <!--  --> */}
                <div>


                    {/* <!-- modal -->
                    <!-- Button trigger modal --> */}
                    {/* <button type="button" className="btn btn-check-in" data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop">
                        Check-Out <i className="fa-solid fa-angle-down"></i> <br/> */}
                        <button type="button" className="btn btn-check-in" 
                        data-bs-target="#staticBackdrop">
                        Check-Out <i className="fa-solid fa-angle-down"></i> <br/> 
                <DatePicker
                selected= {finalDate}
                dateFormat= "d MMM yyyy"
                onChange={(date) => setFinalDate(date)}
                customInput={<CustomFinalDatePickerInput />}/>
                    </button>

                    {/* <!-- Modal --> */}
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static"
                        data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel"
                        aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel"> </h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    {/* <!-- modal body calendar --> */}


                                </div>



                            </div>
                        </div>
                    </div>



                </div>

            </div>
            {/* <!--  --> */}
            <div className="flexbox">
                {/* <!--  --> */}
                {/* <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-check-in" data-bs-toggle="modal"
                    data-bs-target="#exampleModal">
                    <p>Rooms & Guests <i className="fa-solid fa-angle-down"></i></p><br/>
                    <p className="roomcountdiv"><span>{roomCount} Rooms</span>, {adultCount} Adults</p>
                    <p className="roomcountdiv"><span>& {childAgeCount} Child</span></p>
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* <!--  -->
                                <!-- Rooms --> */}
                                <div className="modal-rooms">
                                    <div>

                                        <b>Rooms</b>
                                    </div>
                                    <div>


                                        <select value={roomCount} name="rooms" id="rooms_id" onChange={onRoomCountChange}>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </div>

                                </div>
                                {/* <!-- adults --> */}
                                <div className="modal-rooms">
                                    <div>

                                        <b>Adults</b>
                                    </div>
                                    <div>


                                        <select value={adultCount} name="adultcount" id="adult-count" onChange={setAdultCountChange}>
                                            
                                            {adultsNumber.map((adult, index)=>(
                                                <option value={adult}>{adult}</option>
                                            ))}
                                        </select>
                                    </div>

                                </div>

                                {/* <!-- Childrens --> */}
                                <div className="modal-rooms">
                                    <div>

                                        <b>Children</b>
                                        <p>0-17 Years Old</p>
                                    </div>
                                    <div>


                                        <select value={childAgeCount} name="childage" id="child-age" onChange={onChildAgeCountChange}>
                                            
                                            
                                                {ageOptions.map((age, index)=>(
                                                    <option value={age} key={index}>{age}</option>
                                                ))}
                                                
                                        
                                
                                        </select>
                                    </div>

                                </div>

                            </div>
                            <div className="modal-footer">
                                {/* <button type="button" className="btn btn-secondary"
                                    data-bs-dismiss="modal">Close</button> */}
                                <button type="button" onClick={updateDeal} data-bs-dismiss="modal" className="btn btn-primary">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            {/* <!--  --> */}
            <div className="flexbox">
                {/* <!--  -->
                <!--  -->
                <!-- Button trigger modal --> */}
                <button type="button" className="btn btn-check-in" data-bs-toggle="modal"
                    data-bs-target="#priceFilterModal">
                    <p>Price Per Night <i className="fa-solid fa-angle-down"></i></p><br/>
                    <p className=""><span>₹0-₹1500</span>,₹1500-₹2500...</p>
                </button>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="priceFilterModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                {/* <!--  -->
                                <!-- per night --> */}
                                <div className="modal-rooms">
                                    <div>

                                        <b>Per Night</b>
                                    </div>
                                    <div>


                                        <select name="pernightcharge" id="pernightcharge" value={perNightCharge} onChange={onSetPerNightCharge}>
                                            <option value="0">Select</option>
                                            <option value="1">₹0 - ₹1500</option>
                                            <option value="2">₹1500 - ₹2500</option>
                                            <option value="3">₹2000 - ₹3000</option>
                                            <option value="4">₹3000 - ₹4500</option>
                                            <option value="5">₹4500 - ₹5500</option>
                                        </select>
                                    </div>

                                </div>
                                {/* <!-- adults --> */}
                                <div className="modal-rooms">
                                    <div>

                                        <b>VIP</b>
                                    </div>
                                    <div>


                                        <select name="vipcharge" id="vipcharge" value={vipCharge} onChange={onVipCharge}>
                                            <option value="0">Select</option>
                                            <option value="1">₹6500 - ₹7500</option>
                                            <option value="2">₹7500 - ₹8500</option>
                                            <option value="3">₹8500 - ₹10000</option>
                                        </select>
                                    </div>

                                </div>

                                {/* <!-- Childrens --> */}
                                <div className="modal-rooms">
                                    <div>

                                        <b>Packages</b>
                                        <p>1-3 weeks</p>
                                    </div>
                                    <div>


                                        <select name="packageselect" id="packageselect" value={packageCharge} onChange={onPackageCharge}>
                                            <option value="0">Select</option>
                                            <option value="1">₹7000</option>
                                            <option value="2">₹10000</option>
                                            <option value="3">₹15000</option>
                                            <option value="4">₹35000</option>

                                        </select>
                                    </div>

                                </div>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>


    {/* <!-- main body footer --> */}
    <section>
        <div className="body-footer">
            <p className="trending-destination">Trending Searches: <span>Delhi <i
                        className="fa-solid fa-arrow-right"></i> Dubai</span>
                <span>Dubai <i className="fa-solid fa-arrow-right"></i> Delhi</span>
            </p>
        </div>
        <button onClick={searchOnButtonClick} className='searchbtn'>Search</button>
    </section>




</div>

</div>
{/* <!-- main body footer section --> */}

<section className="footer-all-main">
    <div className="main-footer">
        <div className="footer-box">
            {/* <!--  --> */}
            <div className="introducing-box">
                <span>INTRODUCING</span>
                <h2>MMT Luxe<br/>Selections</h2>
                <p>Escape to the epitome of luxury, packed with signature amenities and services</p>
                <button>Select</button>
            </div>

        </div>
        {/* <!--  --> */}
        <div className="footer-luxe-box">

            <div className="luxe-box">
                <img src="/images/luxe-property.jpg" alt=""/>
                <br/>

                <b>Luxe Property in India</b>
                <p>Lorem ipsum dolor sit amet consectet.</p>
            </div>


        </div>
        {/* <!--  --> */}
        <div className="footer-luxe-box">

            <div className="luxe-box">
                <img src="/images/villas-luxe.jpg" alt=""/>
                <br/>
                <b>Luxe Villas</b>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

        </div>

        {/* <!--  --> */}
        <div className="footer-luxe-box">

            <div className="luxe-box">
                <img src="/images/internationl.jpg" alt=""/>
                <br/>
                <b>Luxe International</b>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>

        </div>



    </div>
</section>

                </main>

                <footer>
                    {/* ... Your existing code ... */}
                </footer>

                <script src="js/bootstrap.min.js"></script>
            </body>
        </div>
    );
}

