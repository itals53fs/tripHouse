import { Routes, Route, Link } from 'react-router-dom'

import './global.css'

import Login from './pages/Login'
import Reservas from './pages/Reservas'
import Colaboradores from './pages/Colaboradores'

const App = () => {
  return (
    <>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/reservas" element={<Reservas />} />
       <Route path="/colaboradores" element={<Colaboradores />} />
     </Routes>
    </>
  );
}

export default App;
