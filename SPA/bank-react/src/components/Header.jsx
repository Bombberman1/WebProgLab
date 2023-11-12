import { Logo, searchIcon } from '../images/exporter'
import { 
  HeaderContainer, Navigation, LinkStyle, 
  LogoContainer, EmptyOutfit, CatalogInput,
} from './styled/Header.styled';
import { Route, Routes } from 'react-router-dom';


const Header = ({ catalogSearchChange }) => {
  return (
      <HeaderContainer>
        <LogoContainer>
          <Logo></Logo>
        </LogoContainer>
        <Navigation>
          <LinkStyle to="/">Home</LinkStyle>
          <LinkStyle to="/catalog">Catalog</LinkStyle>
          <LinkStyle to="/cart">Cart</LinkStyle>
        </Navigation>
        <EmptyOutfit>
          <Routes>
            <Route path="/catalog" element={
              <div style={{display: 'flex'}}>
                <CatalogInput type='text' param={searchIcon} onChange={catalogSearchChange} />
              </div>
            } />
          </Routes>
        </EmptyOutfit>
      </HeaderContainer>
  );
};

export default Header;