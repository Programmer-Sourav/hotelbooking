export default function SecondaryHeader(){

    return(
        <section>
                        
                        <div className="parent-flex-p2">

                            <div className="flexbox-ptwo">
                                <p className="city-property">City, Area or Property</p>
                                <input className="location-field-ptwo" type="text" placeholder="GOA"/>

                            </div>
                      
                            <div className="flexbox-ptwo">
                              
                                <div>

                                    <button type="button" className="btn pt-btn-check-in" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                        <p><span>
                                                Check-In <i className="fa-solid fa-angle-down"></i> </span> <br/>
                                            Mon,1 jan,2024</p>

                                    </button>

                                   
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
                                                 
                                                </div>

                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>
                         
                            <div className="flexbox-ptwo">
                            
                                <div>

                                    <button type="button" className="btn pt-btn-check-in" data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop">
                                        <p>
                                            <span>
                                                Check-Out <i className="fa-solid fa-angle-down"></i></span> <br/>
                                            Tue,28 jan,2024
                                        </p>
                                    </button>

                                  
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


                                                </div>



                                            </div>
                                        </div>
                                    </div>



                                </div>

                            </div>
                       
                            <div className="flexbox-ptwo">
                               
                                <button type="button" className="btn pt-btn-check-in" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">
                                    <p><span>Rooms & Guests <i className="fa-solid fa-angle-down"></i></span><br/>
                                        1 Rooms, 2Adults</p>
                                </button>

                          
                                <div className="modal fade" id="exampleModal" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalLabel"></h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                              
                                                <div className="modal-rooms">
                                                    <div>

                                                        <b>Rooms</b>
                                                    </div>
                                                    <div>


                                                        <select name="" id="">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                    </div>

                                                </div>
                                           
                                                <div className="modal-rooms">
                                                    <div>

                                                        <b>Adults</b>
                                                    </div>
                                                    <div>


                                                        <select name="" id="">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                        </select>
                                                    </div>

                                                </div>

                                                <div className="modal-rooms">
                                                    <div>

                                                        <b>Children</b>
                                                        <p>0-17 Years Old</p>
                                                    </div>
                                                    <div>


                                                        <select name="" id="">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                            <option value="8">8</option>
                                                            <option value="9">9</option>
                                                            <option value="10">10</option>
                                                            <option value="11">11</option>
                                                            <option value="12">12</option>
                                                            <option value="13">13</option>
                                                            <option value="14">14</option>
                                                            <option value="15">15</option>
                                                            <option value="16">16</option>
                                                            <option value="17">17</option>
                                                        </select>
                                                    </div>

                                                </div>

                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Apply</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            
                            <div className="btn-search-parent">
                                <button className="btn-search">Search</button>

                            </div>
                        </div>
                    </section>
    )
}