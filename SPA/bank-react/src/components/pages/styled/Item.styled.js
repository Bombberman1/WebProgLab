import styled from "styled-components";

export const ItemInfoWrapper = styled.div`
    padding: 60px 0 200px 0;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1100px;
`;

export const ItemImage = styled.img`
    width: 500px;
    height: 398px;
    object-fit: cover;
    border-radius: 20px;
    border: 10px solid #dadada;
`;

export const ItemButtonsContainer = styled.div`
    padding-left: 10px;
    display: flex;
`;

export const DescriptionButton = styled.button`
    text-decoration: none;
    border: 2px solid #474747;
    border-radius: 10px;
    padding: 2px 30px;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  
    &:hover {
        background-color: #0e4c67 !important;
    }
`;

export const ItemInfoContainer = styled.div`
    padding-left: 10px;
`;

export const ItemName = styled.h1`
    padding: 30px 0;
    margin: 0;
    color: #474747;
    font-size: 40px;
    font-weight: 500;
`;

export const ItemDescription = styled.h2`
    padding-bottom: 20px;
    width: 400px;
    height: 130px;
    margin: 0;
    color: #929292;
    font-size: 20px;
    font-weight: 500;
`;

export const FieldsContainer = styled.div`
    display: flex;
`;

export const FieldContainer = styled.div`
`;

export const FieldText = styled.p`
    padding: 0 0 10px 10px;
    margin: 0;
    color: #474747;
    font-size: 16px;
    font-weight: 600;
`;

export const FieldInput = styled.input`
    border: 2px solid #474747;
    border-radius: 10px;
    color: #474747;
    width: 176px;
    height: 17px;
    padding: 10px;
`;

export const FieldSelect = styled.select`
    border: 2px solid #474747;
    border-radius: 10px;
    color: #474747;
    width: 200px;
    padding: 10px;
`;

export const PriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1100px;
    padding: 20px;
    border: 10px solid #dadada;
    border-radius: 20px;
    background-color: white;
`;

export const Price = styled.p`
    padding: 10px 0;
    margin: 0;
    color: #474747;
    font-size: 30px;
    font-weight: 600;
`;

export const PriceButtonsContainer = styled.div`
    display: flex;
    align-items: center;
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

export const AddToCartButton = styled.button`
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

    &:hover {
        background-color: #5E6666 !important;
    }
  
    &:active {
        background-color: #7C8181 !important;
    }
`;
