import { Routes, Route, Link } from 'react-router-dom'

import './global.css'

import Login from './pages/Login'
import Reservas from './pages/Reservas'

const App = () => {
  return (
    <>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/reservas" element={<Reservas />} />
     </Routes>
    </>
  );
}

export default App;
