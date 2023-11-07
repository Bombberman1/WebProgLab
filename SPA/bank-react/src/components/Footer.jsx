import { Logo, SocialIcon } from '../images/exporter'
import { 
  FooterUpper, Left, Center, Right, Title, 
  Subtitle, FooterTextConteiner, Line, FooterContainer,
  BottomText
} from './styled/Footer.styled'
import { facebook, googlep, linkedin, twitter } from '../images/exporter';


function Footer() {
  return (
    <FooterContainer>
      <FooterUpper>
        <Left>
          <FooterTextConteiner>
            <Title>
              Branding stuff
            </Title>
            <Subtitle>
              Lorem bla bla bla bal asdasdsad adsasdsa asdsad
            </Subtitle>
          </FooterTextConteiner>
        </Left>
        <Center>
        <Logo></Logo>
        </Center>
        <Right>
          <SocialIcon src={facebook}></SocialIcon>
          <SocialIcon src={googlep}></SocialIcon>
          <SocialIcon src={linkedin}></SocialIcon>
          <SocialIcon src={twitter}></SocialIcon>
        </Right>
      </FooterUpper>
      <Line></Line>
      <BottomText></BottomText>
    </FooterContainer>
  );
}

export default Footer;
