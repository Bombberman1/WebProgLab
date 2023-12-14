import styled from "styled-components";

export const LogInPageContainer = styled.div`
    padding: 100px 200px;
`;

export const LogInHeader = styled.h1`
    margin: 0;
    text-align: center;
    color: #474747;
    padding: 0 0 160px 0;
`;

export const LogInButton = styled.button`
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
    margin-left: 88px;

    &:hover {
        background-color: #5E6666 !important;
    }

    &:active {
        background-color: #7C8181 !important;
    }
`;

export const GoToRegButton = styled.a`
    text-decoration: none;
    padding: 10px 45px;
    border: 2px solid #474747;
    background-color: #474747;
    color: white;
    font-size: 16px;
    font-weight: 500;
    border-radius: 10px;
    display: inline-block;
    text-align: center;
    margin-top: 100px;
    cursor: pointer;

    &:hover {
        background-color: #5E6666 !important;
    }

    &:active {
        background-color: #7C8181 !important;
    }
`;
