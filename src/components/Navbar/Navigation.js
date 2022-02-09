import logo from '../images/logo2.png';
import { Nav, NavLink, Bars, NavMenu } from './NavbarElements';
import { NavLink as Link } from 'react-router-dom';

const NavBar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <Link to='/'>
          <img src={logo} alt='Logo' className='logo' />
        </Link>
        <Bars onClick={toggle} />
        <NavMenu>
          <NavLink exact activeStyle to='/'>
            Home
          </NavLink>
          <NavLink activeStyle to='/clearances'>
            <div className='dropdown'>
              <li activeStyle>Clearances &#9660;</li>
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
          <NavLink activeStyle to='/contact-us'>
            Contact Us
          </NavLink>
          <NavLink activeStyle to='/faq'>
            FAQ
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar;
