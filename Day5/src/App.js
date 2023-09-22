import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Assets/Loginform/Navbar';
import Register from './Components/Assets/Loginform/Register';
import Login from './Components/Assets/Loginform/Login';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar/>} />
          <Route path='/reg' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );

}
export default App;