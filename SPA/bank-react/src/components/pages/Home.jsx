import { 
  Hero, HeroBank, HeroText, HeroTitle, HeroSubtitle,
  HomeTilesContainer, HomeTileImg, HomeTileHeading, HomeTileSubHeading,
  HomeTileContainer, HomeViewMore, HomeViewMoreContainer
} from "./styled/Home.styled";
import { privatBank, monoBank, oshchadBank, backgroundFull } from "../../images/exporter";


function HomePage() {
  return (
    <div style={{
      backgroundImage: `url(${backgroundFull})`,
      backgroundSize: '500px 400px',
      backgroundRepeat: 'repeat',
    }}>
      <Hero>
        <HeroBank></HeroBank>
        <HeroText>
          <HeroTitle>Bank Home</HeroTitle>
          <HeroSubtitle>Lorem impsum IoT 2023 ids asdas uqwe nzxnc qwie kaj. Adasd iwqej amcm qwie. Aoad qjiwe zxnc asdk. Qksoa oasd qwe</HeroSubtitle>
        </HeroText>
      </Hero>
      <HomeTilesContainer>
        <div style={{display: 'flex', margin: '0 auto'}}>
          <HomeTileContainer>
            <HomeTileImg src={privatBank}></HomeTileImg>
            <HomeTileHeading>Privat Bank</HomeTileHeading>
            <HomeTileSubHeading>
              PrivatBank is the largest Ukrainian bank in terms of assets and the leader 
              of Ukrainian retail banking market. It was registered on 19 March 1992. 
              PrivatBank was one of the first to introduce modern digital banking and 
              unique technological solutions in Ukraine, allowing customers to use most 
              services remotely by means of Privat24.
            </HomeTileSubHeading>
          </HomeTileContainer>
          <HomeTileContainer>
            <HomeTileImg src={monoBank}></HomeTileImg>
            <HomeTileHeading>Mono Bank</HomeTileHeading>
            <HomeTileSubHeading>
              Monobank is a Ukrainian online bank. Operating since 2017, 
              serving more than 7 million customers in Ukraine. 
              It is the first online bank without traditional branches in Ukraine. 
              It was the second most downloaded app on the App Store and third most 
              download app on Google Play among the most popular fintech apps in Ukraine.
            </HomeTileSubHeading>
          </HomeTileContainer>
          <HomeTileContainer>
            <HomeTileImg src={oshchadBank}></HomeTileImg>
            <HomeTileHeading>Oschad Bank</HomeTileHeading>
            <HomeTileSubHeading>
              The State Savings Bank of Ukraine, or Oschadbank, 
              is a major bank in Ukraine. The bank is one of the largest financial 
              institutions of Ukraine and one of three systemically important banks 
              nominated by National Bank of Ukraine every year since 2015 when classification 
              requirement came into force.
            </HomeTileSubHeading>
          </HomeTileContainer>
        </div>
      </HomeTilesContainer>
      <HomeViewMoreContainer>
        <HomeViewMore href="#">View more</HomeViewMore>
      </HomeViewMoreContainer>
    </div>
  );
}
  
export default HomePage;