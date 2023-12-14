import { ExitIcon, Logo, exitIcon, searchIcon } from '../images/exporter'
import { 
  HeaderContainer, Navigation, LinkStyle, 
  LogoContainer, EmptyOutfit, CatalogInput, UserDataText, ExitButton, UserDataContainer,
} from './styled/Header.styled';
import { Route, Routes, useNavigate } from 'react-router-dom';


const Header = ({ catalogSearchChange, user, setUser }) => {
  const navigate = useNavigate();

  const findUserId = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users'));
    if (users) {
      return users.findIndex((user) => user[0].email === email && user[0].password === password);
    }
  };

  const handleLogout = () => {
    const currentId = findUserId(user[0].email, user[0].password);
    const storageStored = JSON.parse(localStorage.getItem('persist:root'));
    const users = JSON.parse(localStorage.getItem('users'));
    if (storageStored && storageStored.cart.length) {
      const changed = [...users];
      changed[currentId][1] = JSON.parse(storageStored.cart);
      localStorage.setItem('users', JSON.stringify(changed));
    }
    localStorage.removeItem('user');
    localStorage.removeItem('persist:root');
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
                <UserDataText>{user[0].email}</UserDataText>
                <ExitButton onClick={handleLogout}><ExitIcon /></ExitButton>
              </UserDataContainer>
            } />
          </Routes>
        </EmptyOutfit>
      </HeaderContainer>
  );
};

export default Header;