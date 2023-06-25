import styled from 'styled-components';

export const SearchFormStyled = styled.form`
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${({ theme }) => theme.space[3]}px;
  
`;

export const BtnSearch = styled.button`
  font-family: ${({ theme }) => theme.fonts.monospace};
  margin-left: ${({ theme }) => theme.space[3]}px;
  padding: ${({ theme }) => theme.space[2]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: rgb(4, 170, 109);
  color: white;

  :hover,
  :focus {
    background-color: #059862;
    cursor: pointer;
  }
`;
export const SearchField = styled.input`
  padding: ${({ theme }) => theme.space[3]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
`;
