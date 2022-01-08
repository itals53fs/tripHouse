import { Routes, Route, Link } from 'react-router-dom'

import './global.css'

import Login from './pages/Login'
import Reservas from './pages/Reservas'
import Colaboradores from './pages/Colaboradores'
import FormPage from './pages/Form'
import FormEdit from './pages/Login'

const App = () => {
  return (
    <>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/reservas" element={<Reservas />} />
       <Route path="/colaboradores"   element={<Colaboradores />} />
       <Route path="/form/:id"  element={<FormPage  />} />
       <Route path="/formedit/:id"  element={<FormEdit  />} />
     </Routes>
    </>
  );
}

export default App;
