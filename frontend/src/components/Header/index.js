
import './styles.css'
import { Link } from 'react-router-dom'

function Header() {

    const login = localStorage.getItem('login')

    // alert(login)

    const handlelogout = () =>{
      localStorage.removeItem('login')
      window.location.href = 'http://localhost:3000/'
    }

    return (
      <header className="header-container">
        <div>
          <h1>TripHouse</h1>
          {
            login === 'admin' 
            ?
            <nav>
            <ul>
              <li>
                <Link to="/reservas">Reserva</Link>
              </li>
              <li>
              <Link to="/clientes">Clientes</Link>
              </li>
              <li>
              <Link to="/veiculos">Veiculos</Link>
              </li>
              <li>
              <Link to="/colaboradores">Colaboradores</Link>
              </li>
              <li className='logout'>
               <Link onClick={handlelogout} to='#' >Sair</Link>
              </li>
            </ul>
          </nav>
          :
          <nav>
            <ul>
              <li>
                <Link to="/reservas">Reserva</Link>
              </li>
              <li>
              <Link to="/clientes">Clientes</Link>
              </li>
              <li>
              <Link to="/veiculos">Veiculos</Link>
              </li>
              <li className='logout'>
               <Link onClick={handlelogout} to='#' >Sair</Link>
              </li>
            </ul>
          </nav>
          }
        </div>
      </header>
    );
  }
  
  export default Header;
  