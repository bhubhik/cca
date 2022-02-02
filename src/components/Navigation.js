import { Link, NavLink } from 'react-router-dom';
import logo from './images/logo2.png';

const Nav = () => {
  const toggleMobileMenu = (e) => {
    console.log(e);
    // e.classList.toggle('open');
  };
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
          <NavLink activeClassName='active' to='/clearances'>
            <div className='dropdown'>
              <li activeClassName='active'>Clearances &#9660;</li>
              <div class='dropdown-content'>
                <NavLink className='clearances' to='/import-clearances'>
                  <li activeClassName='dropdown-active'>Import Clearances</li>
                </NavLink>
                <NavLink className='clearances' to='/export-clearances'>
                  <li activeClassName='dropdown-active'>Export Clearances</li>
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
      <div
        id='hamburger-icon'
        className='closed'
        onclick={toggleMobileMenu(this)}
      >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
        <ul className='mobile-menu'>
          <NavLink exact activeClassName='active' to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName='active' to='/clearances'>
            <div className='dropdown'>
              <li activeClassName='active'>Clearances &#9660;</li>
              <div className='dropdown-content'>
                <NavLink className='clearances' to='/import-clearances'>
                  <li activeClassName='dropdown-active'>Import Clearances</li>
                </NavLink>
                <NavLink className='clearances' to='/export-clearances'>
                  <li activeClassName='dropdown-active'>Export Clearances</li>
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
      </div>
    </div>
  );
};

export default Nav;
