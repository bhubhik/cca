import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink exact to='/' onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to='/clearances' onClick={toggle}>
            Clearances
          </SidebarLink>
          <SidebarLink to='/contact-us' onClick={toggle}>
            Contact Us
          </SidebarLink>
          <SidebarLink to='/faq' onClick={toggle}>
            Faq
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
