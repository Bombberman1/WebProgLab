import { Logo } from '../images/exporter'
import { HeaderContainer, Navigation, LinkStyle, LogoContainer, EmptyOutfit } from './styled/Header.styled';


const Header = () => {
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
        <EmptyOutfit></EmptyOutfit>
      </HeaderContainer>
  );
};

export default Header;