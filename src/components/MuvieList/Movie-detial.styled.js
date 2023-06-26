import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieTitle = styled.h1`
  font-family: ${({ theme }) => theme.fonts.roboto};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const MovieUserScore = styled.p`
  font-family: ${({ theme }) => theme.fonts.monospace};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const MovieOverviewTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.roboto};
  margin-bottom: ${({ theme }) => theme.space[2]}px;
`;
export const MovievOverview = styled.p`
  font-family: ${({ theme }) => theme.fonts.monospace};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const Genres = styled.h3`
  margin-bottom: 8px;
  font-size: 22px;
  font-weight: 700;
  color: black;
`;
export const DataText = styled.p`
  margin-bottom: 20px;
  color: black;
`;

export const Link = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.monospace};
  margin-left: ${({ theme }) => theme.space[2]}px;

  font-size: ${({ theme }) => theme.fontSizes.m};
  &.active {
    color: white;
    background-color: orangered;}
`;

export const GoBackLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 0;
  color: black;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;

  :hover {
    color: orangered;
  }
`;