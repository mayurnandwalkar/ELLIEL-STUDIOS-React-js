import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Payment from './pages/Payment';
import Screening from './pages/Screening';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="payment" element={<Payment />} />
          <Route path="screening" element={<Screening />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
