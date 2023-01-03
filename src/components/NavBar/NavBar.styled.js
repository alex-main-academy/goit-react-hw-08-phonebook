import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  transition-duration: 400ms;
  display: block;
  padding: 9px 15px;
  border-radius: 10px;

  &.active {
    background-color: #e38400;
    color: white;
  }

  &:hover:not(.active) {
    color: #e38400;
  }
`;
