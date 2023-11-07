import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 50px;
  border-bottom: 10px solid #dadada;;
`;

export const LogoContainer = styled.div`
  align-items: center;
  width: 15%;
`;

export const EmptyOutfit = styled.div`
  width: 15%;
  height: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  width: 70%;
`;

const LinkStyle = styled(Link)`
  margin: 0 10px;
  text-decoration: none;
  border: 2px solid #dadada;
  border-radius: 20px;
  padding: 10px 45px;
  color: black;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #dadada;
  }
  
  &:active {
    background-color: #464646;
  }
`;

export { HeaderContainer, Navigation, LinkStyle };