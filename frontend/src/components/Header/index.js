
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
                <Link to="/">Reserva</Link>
              </li>
              <li>
              <Link to="/">Clientes</Link>
              </li>
              <li>
              <Link to="/">Veiculos</Link>
              </li>
              <li>
              <Link to="/">Colaboradores</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
  
  export default Header;
  