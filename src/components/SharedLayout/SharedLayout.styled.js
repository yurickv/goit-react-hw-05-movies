import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  /* text-align: center; */
  max-width: 1880px;
  margin: 0 auto;
  padding: 0 16px;
  
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  padding: 20px;
  background-color: #edf3fb;
  > nav {
    display: flex;
    gap: 16px;
  }
`;

export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
`;