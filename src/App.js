import { Route, Routes } from 'react-router-dom';
import './App.css';

import PageOne from './page1/PageOne';
import HotelSearch from './HotelSearch';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<PageOne/>}/>  
      <Route path='/hotel-search/city/:city/start_date/:startDate/end-date/:endDate/rooms/:roomCount/adult/:adultCount/child/:childAgeCount/night/:perNightCharge/vip/:vipCharge/package/:packageCharge' element={<HotelSearch/>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
