import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.roboto};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;