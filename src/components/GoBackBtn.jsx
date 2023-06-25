import { GoBackButton } from '../styled-component/GoBackBtn.styled'


export const GoBackBtn = ({ path, children }) => {
  return <GoBackButton to={path}>{children}</GoBackButton>;
};



