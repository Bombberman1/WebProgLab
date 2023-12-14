import { ExitIcon, Logo, exitIcon, searchIcon } from '../images/exporter'
import { 
  HeaderContainer, Navigation, LinkStyle, 
  LogoContainer, EmptyOutfit, CatalogInput, UserDataText, ExitButton, UserDataContainer,
} from './styled/Header.styled';
import { Route, Routes, useNavigate } from 'react-router-dom';


const Header = ({ catalogSearchChange, user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

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
            <Route path="/" element={
              <UserDataContainer>
                <UserDataText>{user.email}</UserDataText>
                <ExitButton onClick={handleLogout}><ExitIcon /></ExitButton>
              </UserDataContainer>
            } />
          </Routes>
        </EmptyOutfit>
      </HeaderContainer>
  );
};

export default Header;