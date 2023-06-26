import styled from 'styled-components';

export const ReviewItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[5]}px;
  }
`;
export const AuthorName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.roboto};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const Review = styled.p`
  font-family: ${({ theme }) => theme.fonts.monospace};
`;
export const ReviewsList = styled.ul`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  list-style: none;
  li {
    box-shadow: 0px 10px 10px rgba(46, 47, 66, 0.08),
      0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
    padding: 10px;
    border-radius: 5px;
    background-color: #edf3fb;
  }
`;