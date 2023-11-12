import { 
    HomeTileImg, HomeTileHeading, HomeTileSubHeading,
    HomeTileContainer,
} from "../styled/Home.styled";
import { privatBank, monoBank, oshchadBank, ukrGasBank, creditAgricoleBank, pumbBank } from "../../../images/exporter";


export const HomeTiles = (elementsOnScreen) => {
    const banks = [
      { img: privatBank, heading: "Privat Bank", subHeading: "PrivatBank is the largest Ukrainian bank in terms of assets and the leader \
      of Ukrainian retail banking market. It was registered on 19 March 1992. \
      PrivatBank was one of the first to introduce modern digital banking and \
      unique technological solutions in Ukraine, allowing customers to use most \
      services remotely by means of Privat24." },
      { img: monoBank, heading: "Mono Bank", subHeading: "Monobank is a Ukrainian online bank. Operating since 2017, \
      serving more than 7 million customers in Ukraine. \
      It is the first online bank without traditional branches in Ukraine. \
      It was the second most downloaded app on the App Store and third most \
      download app on Google Play among the most popular fintech apps in Ukraine." },
      { img: oshchadBank, heading: "Oschad Bank", subHeading: "The State Savings Bank of Ukraine, or Oschadbank, \
      is a major bank in Ukraine. The bank is one of the largest financial \
      institutions of Ukraine and one of three systemically important banks \
      nominated by National Bank of Ukraine every year since 2015 when classification \
      requirement came into force." },
      { img: ukrGasBank, heading: "Ukrgasbank", subHeading: "PJSC joint-stock bank UKRGASBANK  is a Ukrainian commercial \
      bank with a state share in the capital of 94.94% of shares (represented by the government of Ukraine ), which came under \
      state control in 2009 after the onset of the economic crisis of 2008 , now the fourth largest bank in the country . Almost initially, \
      the state intends to sell its shares." },
      { img: creditAgricoleBank, heading: "Credit Agricole", subHeading: "Crédit Agricole Bank ( fr. Crédit Agricole Bank ), full name Credit Agricole \
      Bank Joint Stock Company (JSC Credit Agricole Bank) is the oldest foreign bank in Ukraine, which has been operating on the market since 1993 \
      and provides a full range of banking services, is a leader in auto lending \
      and a strategic partner for agribusiness." },
      { img: pumbBank, heading: "PUMB", subHeading: "The First Ukrainian International Bank, also known as, is one of the leading \
      Ukrainian banks, primarily owned by the oligarch Rinat Akhmetov, who is associated with SCM Holdings.Established in 1991, the bank \
      is headquartered in Kyiv, Ukraine." },
    ];
  
    return banks.slice(0, elementsOnScreen).map((bank, index) => (
      <HomeTileContainer key={index}>
        <HomeTileImg src={bank.img}></HomeTileImg>
        <HomeTileHeading>{bank.heading}</HomeTileHeading>
        <HomeTileSubHeading>{bank.subHeading}</HomeTileSubHeading>
      </HomeTileContainer>
    ));
};