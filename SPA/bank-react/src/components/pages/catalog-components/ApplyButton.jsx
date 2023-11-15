import styled from "styled-components";
import { getSortedWithFilter } from "../../api";


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

export const applyFilters = async (banks, selectedFilters, catalogSearch) => {
    let sortedBanks = [];
    let filter = "";
    for (let i = selectedFilters.length; i > 0; i--) {
        if (selectedFilters[i - 1].value !== "") {
            filter = selectedFilters[i - 1];
            break;
        }
    }
    if (filter) {
        const data = await getSortedWithFilter(filter);
        sortedBanks.push(...data)
    } else {
        sortedBanks = [...banks];
    }
    if (catalogSearch) {
        sortedBanks = sortedBanks.filter((bank) => {
            return bank.name.toLowerCase().includes(catalogSearch.toLowerCase());
        });
    }
    return sortedBanks;
};
