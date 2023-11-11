import styled from "styled-components";


const FilterOptions = [
    { value: "clients", text: "Number of Clients" },
    { value: "loans", text: "Number of Loans" },
    { value: "price", text: "Price" },
]

export const FiltersList = (() => (
    <FiltersListStyled>
        {FilterOptions.map((filterOption) => (
            <FiltersItem>
                <Filter>
                    <option>Filter by:</option>
                    <option value={filterOption.value}>{filterOption.text}</option>
                </Filter>
            </FiltersItem>
        ))}
    </FiltersListStyled>
));

const FiltersListStyled = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const FiltersItem = styled.li`
    display: flex;
    margin: 0 auto;

    &:not(:last-child) { 
        margin-right: 30px;  
    }
`;

const Filter = styled.select`
    border: 2px solid #474747;
    border-radius: 10px;
    color: #474747;
    width: 200px;
    padding: 10px;
`;

