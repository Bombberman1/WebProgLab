import styled from 'styled-components';
import bank from './bank.png';
import facebook from './icons/facebook.png';
import googlep from './icons/google-plus.png';
import linkedin from './icons/linkedin.png';
import twitter from './icons/twitter.png';
import bankHero from './bank-hero.avif';
import privatBank from './privat-bank.jpeg';
import monoBank from './monobank.jpg';
import oshchadBank from './oshchad-bank.jpg';
import backgroundFull from './backgroundFull.jpg';


const Logo = () => {
    return <StyledLogo src={bank} alt="Bank" />;
  };

const StyledLogo = styled.img`
  width: 41px;
  height: 41px;
`;

const SocialIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-left: 10px;
`;

export {
  Logo, SocialIcon, facebook, googlep, linkedin, twitter, bankHero,
  privatBank, monoBank, oshchadBank, backgroundFull
};