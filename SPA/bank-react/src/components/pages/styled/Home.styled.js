import styled from "styled-components";
import { bankHero } from "../../../images/exporter";


export const Hero = styled.div`
    display: flex;
    justify-content: space-around;
    max-width: 95%;
    margin: 0 auto;
    padding: 200px 0 130px 0;
`;

export const HeroBank = () => {
    return <HeroBankStyled src={bankHero} alt="HeroBank" style={{
        border: '10px solid #dadada',
        borderRadius: '20px'
    }} />;
};

const HeroBankStyled = styled.img`
  width: 400px;
  height: 300px;
  border-radius: 10px;
`;

export const HeroText = styled.div`
    width: 600px;
    padding: 20px;
    border: 10px solid #dadada;
    border-radius: 20px;
    background-color: white;
`;

export const HeroTitle = styled.h1`
  margin: 0;
  color: #474747;
  padding: 0 0 30px 0;
`;

export const HeroSubtitle = styled.h2`
  margin: 0;
  color: #929292;
  font-weight: 400;
`;

export const HomeTilesContainer = styled.div`
    display: flex;
    max-width: 95%;
    margin: 0 auto;
    padding: 130px 0 130px 0;
`;

export const HomeTileImg = styled.img`
    border-radius: 10px;
    width: 250px;
    height: 200px;
    object-fit: cover;
`;

export const HomeTileHeading = styled.p`
    margin: 0;
    text-align: center;
    padding: 10px 0 20px 0;
    color: #474747;
    font-weight: bold;
    font-size: 18px;
`;

export const HomeTileSubHeading = styled.p`
    margin: 0;
    text-align: center;
    color: #929292;
    font-size: 14px;
    font-weight: 500;
`;

export const HomeTileContainer = styled.div`
    width: 250px;
    padding: 20px;
    border: 10px solid #dadada;
    border-radius: 20px;
    background-color: white;
    margin: 0 20px;
`

export const HomeViewMore = styled.a`
    text-decoration: none;
    padding: 15px 45px;
    background-color: #474747;
    color: white;
    font-weight: 700;
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
`;

export const HomeViewMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 250px;
`;

