import styled from "styled-components";


export const Apply = styled.button`
    text-decoration: none;
    border: 2px solid #474747;
    border-radius: 10px;
    padding: 10px 45px;
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

export const applyFilters = (banks, selectedFilters, catalogSearch) => {
    let sortedBanks = [...banks];
    if (catalogSearch) {
        sortedBanks = sortedBanks.filter((bank) => {
            return bank.name.toLowerCase().includes(catalogSearch.toLowerCase());
        });
    }
    if (selectedFilters[0].value === "clients") {
        sortedBanks.sort((bankL, bankR) => {
            return bankR.clients - bankL.clients;
        });
    }
    if (selectedFilters[1].value === "loans") {
        sortedBanks.sort((bankL, bankR) => {
            return bankR.loans - bankL.loans;
        });
    }
    if (selectedFilters[2].value === "price") {
        sortedBanks.sort((bankL, bankR) => {
            return bankR.price - bankL.price;
        });
    }
    return sortedBanks;
};
