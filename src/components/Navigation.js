import { Link, NavLink } from 'react-router-dom';
import logo from './images/logo2.png';

const Nav = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <img src={logo} alt='Logo' className='logo' />
      </Link>
      <nav>
        <ul className='nav-links'>
          <NavLink exact activeClassName='active' to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName='active' to='/importClearances'>
            <div className='dropdown'>
              <li activeClassName='active'>Clearances ▼</li>
              <div class='dropdown-content'>
                <NavLink className='clearances' to='/clearances'>
                  <li>Import Clearances</li>
                </NavLink>
                <NavLink className='clearances' to='/clearances'>
                  <li>Export Clearances</li>
                </NavLink>
              </div>
            </div>
          </NavLink>
          <NavLink activeClassName='active' to='/contact-us'>
            <li>Contact Us</li>
          </NavLink>

          <NavLink activeClassName='active' to='/faq'>
            <li>FAQ</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
