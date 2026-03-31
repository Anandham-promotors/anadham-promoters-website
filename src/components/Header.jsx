import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="topbar">
      <div className="container nav">
        <NavLink className="brand" to="/">
           <img src={logo} style={{ width: '70%', height: '70%' }}/>
        </NavLink>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
