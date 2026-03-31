import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="topbar">
      <div className="container nav">
        <NavLink className="brand" to="/">
           Promoters
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
