import { 
  Hero, HeroBank, HeroText, HeroTitle, HeroSubtitle,
  HomeTilesContainer, HomeViewMore, HomeViewMoreContainer
} from "./styled/Home.styled";
import { backgroundFull } from "../../images/exporter";
import { useState } from "react";
import { HomeTiles } from "./home-components/HomeTiles";


function HomePage() {
  const [elementsOnScreen, setElementsOnScreen] = useState(3);

  const viewMore = () => {
    setElementsOnScreen(elementsOnScreen + 3);
  };

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
        <div style={{ display: 'flex', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1100px' }}>
          {HomeTiles(elementsOnScreen)}
        </div>
      </HomeTilesContainer>
      { elementsOnScreen < 6 && (
        <HomeViewMoreContainer>
          <HomeViewMore onClick={viewMore}>View more</HomeViewMore>
        </HomeViewMoreContainer>
      )}
    </div>
  );
}
  
export default HomePage;