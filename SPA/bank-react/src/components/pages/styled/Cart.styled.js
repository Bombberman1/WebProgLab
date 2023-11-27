import styled from "styled-components";


export const CartPageContainer = styled.div`
    padding: 50px 350px;
`;

export const CartHeader = styled.h1`
    margin: 0;
    text-align: center;
    color: #474747;
    padding: 0 0 30px 0;
`;

export const CartItem = styled.div`
    border: 2px solid #474747;
    border-radius: 10px;
    padding: 0 30px;
    display: flex;
    margin: 20px 0;
`;

export const CartItemImg = styled.img`
    width: 150px;
    height: 100px;
    border-radius: 10px;
    object-fit: cover;
`;

export const CartItemData = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 30px;
    align-items: center;
    width: 100%;
`;

export const CartItemName = styled.h1`
    margin: 0;
    text-align: center;
    color: #474747;
    font-size: 18px;
`;

export const ItemButtonsPriceContainer = styled.div`
    display: flex;
    width: 450px;
    justify-content: space-between;
`;

export const ItemButtonsContainer = styled.div`
    display: flex;
`;

export const ItemButton = styled.button`
    text-decoration: none;
    border: 2px solid #474747;
    border-radius: 10px;
    height: 40px;
    width: 40px;
    margin: 0 10px;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s;
  
    &:hover {
        background-color: #dadada !important;
    }
  
    &:active {
        background-color: #464646 !important;
    }
`;

export const ItemAmount = styled.h2`
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #929292;
    font-size: 20px;
    font-weight: 500;
    width: 30px;
`;

export const ItemPrice = styled.h2`
    margin: 0;
    text-align: center;
    display: flex;
    align-items: center;
    color: #929292;
    font-size: 20px;
    font-weight: 500;
`;

export const TotalPriceContainer = styled.div`
    display: flex;
    justify-content: right;
`;

export const TotalPriceText = styled.h2`
    margin: 0;
    color: #929292;
    font-size: 22px;
    font-weight: 500;
`;

export const TotalPrice = styled.h2`
    margin-top: 4px;
    text-align: right;
    color: #474747;
    font-size: 20px;
    font-weight: 500;
    width: 170px;
    padding-right: 30px;
`;

export const CartButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 200px;
`;

export const BackButton = styled.a`
    text-decoration: none;
    border: 2px solid #474747;
    border-radius: 10px;
    padding: 10px 30px;
    color: black;
    cursor: pointer;
    transition: background-color 0.3s;
  
    &:hover {
        background-color: #dadada !important;
    }
  
    &:active {
        background-color: #464646 !important;
    }
`;

export const ContinueButton = styled.button`
    text-decoration: none;
    border: 2px solid #474747;
    border-radius: 10px;
    color: white;
    padding: 10px 30px;
    background-color: #474747;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    margin-left: 20px;
`;