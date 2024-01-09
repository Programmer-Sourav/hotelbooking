import { Route, Routes } from 'react-router-dom';
import './App.css';

import PageOne from './page1/PageOne';
import PageFour from './page4/PageFour';
import PageTwo from './page2/PageTwo';
import PageThree from './page3/PageThree';



function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<PageOne/>}/>  
      <Route path='/hotel-search/city/:city/start_date/:startDate/end-date/:endDate/rooms/:roomCount/adult/:adultCount/child/:childAgeCount/night/:perNightCharge/vip/:vipCharge/package/:packageCharge' element={<PageTwo/>}></Route>
      <Route path='/hoteldetails/:id' element={<PageThree/>}></Route>
      <Route path="/hotels/review/:id" element={<PageFour/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
