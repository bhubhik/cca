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
          <NavLink activeClassName='active' to='/our-services'>
            <li>Our Services</li>
          </NavLink>
          <NavLink activeClassName='active' to='/clearances'>
            <li>Clearances</li>
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
