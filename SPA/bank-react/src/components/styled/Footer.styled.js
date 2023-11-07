import styled from 'styled-components';


export const FooterContainer = styled.footer`
  align-items: center;
  border-top: 10px solid #dadada;
`;

export const FooterUpper = styled.div`
  display: flex;
  
  align-items: center;
  padding: 50px 60px 20px 60px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  width: 40%;
`;

export const Title = styled.h1`
  margin: 0;
  color: #474747;
  font-size: larger;
  padding-bottom: 10px;
`;

export const Subtitle = styled.h2`
  margin: 0;
  color: #929292;
  font-size: small;
  font-weight: 600;
`;

export const FooterTextConteiner = styled.div`
  width: 250px;
`;

export const Icon = styled.div`
  margin: 0 10px;
`;

export const Line = styled.div`
  height: 2px;
  width: 95%;
  background-color: #474747;
  margin: 0 auto;
`;

const BottomTextStyled = styled.div`
  padding: 30px 0;
  text-align: center;
  font-weight: lighter;
`;

export const BottomText = () => {
  return <BottomTextStyled><Subtitle style={{fontWeight: 400}}>2020 IoT © Copyright all rights reserved, bla bla</Subtitle></BottomTextStyled>
};
