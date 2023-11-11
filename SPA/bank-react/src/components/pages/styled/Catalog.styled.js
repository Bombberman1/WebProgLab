import styled from "styled-components"


export const FiltersHeader = styled.header`
    padding: 20px 35px;
    display: flex;
    justify-content: space-around;
    border-bottom: 10px solid #dadada;;
`;

export const ItemsHero = styled.div`
    padding: 40px 60px 300px 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ItemContainer = styled.div`
    border: 2px solid #474747;
    border-radius: 10px;
    margin: 15px 15px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.8);
`;

export const ItemDataContainer = styled.div`
    background-color: white;
    padding: 10px 10px 15px 10px;
    border-radius: 0 0 10px 10px;
`;

export const ItemIndexContainer = styled.div`
    background-color: #dadada;
    border-radius: 10px 10px 0 0;
    padding-bottom: 10px;
`;

export const ItemIndex = styled.h2`
    margin: 0;
    color: black;
    font-size: small;
    font-weight: 600;
    padding: 5px 8px;
`;

export const ItemImg = styled.img`
    display: flex;
    margin: 0 auto;
    border-radius: 10px;
    width: 150px;
    height: 100px;
    padding-top: 10px;
`;

export const ItemHeading = styled.h1`
    margin: 0;
    text-align: center;
    padding: 15px 0 10px 0;
    color: #474747;
    font-size: 18px;
`;

export const ItemSubHeading = styled.h2`
    margin: 0;
    text-align: left;
    color: #929292;
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 30px;
`;

export const ItemBankFieldContainer = styled.div`
    padding-right:10px;
    display: flex;
    justify-content: space-between;
`;

export const ItemBankFieldText = styled.h1`
    margin: 0;
    text-align: left;
    color: #474747;
    font-size: 16px;
`;

export const ItemBankField = styled.h2`
    margin: 0;
    text-align: right;
    color: #929292;
    font-size: 16px;
    font-weight: 500;
`;

export const ItemViewMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
`;

export const ItemViewMore = styled.a`
    text-decoration: none;
    padding: 10px 45px;
    background-color: #474747;
    color: white;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    cursor: pointer;
`;

