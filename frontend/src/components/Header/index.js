
import './styles.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
      <header className="header-container">
        <div>
          <h1>TripHouse</h1>
          <nav>
            <ul>
              <li>
                <Link to="/reservas">Reserva</Link>
              </li>
              <li>
              <Link to="/">Clientes</Link>
              </li>
              <li>
              <Link to="/form">Veiculos</Link>
              </li>
              <li>
              <Link to="/colaboradores">Colaboradores</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  