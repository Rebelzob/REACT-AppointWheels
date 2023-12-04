import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import NewCar from './components/pages/NewCar';
import Rentals from './components/pages/Rentals';
import CarDetail from './components/pages/CarDetail';
import CarDelete from './components/pages/CarDelete';
import RentalNew from './components/pages/RentalNew';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={} />
      <Route path="/" element={} />
      <Route path="/new" element={<NewCar />} />
      <Route path="/delete" element={<CarDelete />} />
      <Route path="/detail" element={<CarDetail />} />
      <Route path="/rentals" element={<Rentals />}>
        <Route path="/rentals/new" element={<RentalNew />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
