import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 50px;
  border-bottom: 10px solid #dadada;;
`;

export const LogoContainer = styled.div`
  align-items: center;
  width: 30%;
`;

export const EmptyOutfit = styled.div`
  width: 30%;
  height: 45px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  width: 40%;
`;

export const LinkStyle = styled(Link)`
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

export const CatalogInput = styled.input`
  margin: 0 auto;
  border: 2px solid #dadada;
  border-radius: 20px;
  padding: 10px;
  background: no-repeat left center;
  background-image: url(${({ param }) => param});
  background-size: 20px 20px;
  background-position-x: 5%;
  padding-left: 40px;
  background-color: transparent;
  filter: invert(1);
`;

export const UserDataContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
`;

export const UserDataText = styled.h2`
  margin-top: auto;
  margin-bottom: auto;
  color: #929292;
  font-size: 14px;
  font-weight: 500;
  padding-right: 30px;
`;

export const ExitButton = styled.button`
  text-decoration: none;
  border: none;
  border-radius: 12px;
  background-color: transparent;
  cursor: pointer;
`;
