import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaArrowRight } from 'react-icons/fa';

function Header() {
  return (
    <header className="topbar">
      <div className="nav">
        <NavLink className="brand" to="/">
           <img src={logo} style={{ width: '80%', height: '80%' }} className='pl-8'/>
        </NavLink>
        <nav>
          <NavLink to="/" className="nav-options">Home</NavLink>
          <NavLink to="/about" className="nav-options">About</NavLink>
          {/* <NavLink to="/projects">Projects</NavLink> */}
          <div className="relative group nav-options">
            <NavLink to="/projects" className="uppercase">
              Projects
            </NavLink>

            {/* Dropdown */}
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-[#FFF8D5] shadow-lg rounded-md p-4 min-w-[200px] z-50">
              <NavLink to="/projects/residential" className="block px-3 py-2">
                Residential
              </NavLink>
              <NavLink to="/projects/commercial" className="block px-3 py-2">
                Commercial
              </NavLink>
              <NavLink to="/projects/villas" className="block px-3 py-2">
                Villas
              </NavLink>
            </div>
          </div>  
          <NavLink to="/projects" className="nav-options">Our Solutions</NavLink>
          <NavLink to="/projects" className="nav-options">Partner With Us</NavLink>
          <NavLink to="/contact"className="nav-options">Contact Us</NavLink>
          <button className='flex gap-1 uppercase'>
          Sales Enquiry
          <FaArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        </nav>
        
      </div>
    </header>
  )
}

export default Header
