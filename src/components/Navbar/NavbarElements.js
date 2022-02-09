import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavLink = styled(Link)`
  text-align: center;
  padding: 10px 20px 10px 20px;
  color: rgba(35, 87, 132, 1);
  margin-right: 2px;
  font-size: 18px;
  border: rgba(250, 250, 250, 0) 2px solid;
  border-radius: 60px;
  text-decoration: none;

  &:hover {
    border: #40a8c4 2px solid;
  }
  &.active {
    border: #40a8c4 2px solid;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: rgba(35, 87, 132, 1);

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
