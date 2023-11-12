import styled from "styled-components";


const FilterOptions = [
    { id: 1, value: "clients", text: "Number of Clients" },
    { id: 2, value: "loans", text: "Number of Loans" },
    { id: 3, value: "price", text: "Price" },
]

const filterChange = (event, setSelectedFilters) => {
    const selectedOption = event.target;
    const findedOptionByVal = FilterOptions.find((opt) => opt.value == selectedOption.value);
    const findedOptionById = FilterOptions.find((opt) => opt.id == selectedOption.value);
    if (findedOptionByVal) {
      setSelectedFilters((prevFilters) => {
        const newFilters = [...prevFilters];
        newFilters[findedOptionByVal.id - 1] = { value: selectedOption.value };
        return newFilters;
      });
    } else if (findedOptionById) {
      setSelectedFilters((prevFilters) => {
        const newFilters = [...prevFilters];
        newFilters[findedOptionById.id - 1] = { value: "" };
        return newFilters;
      });
    }
  };

export const FiltersList = (({ setSelectedFilters }) => (
    <FiltersListStyled>
        {FilterOptions.map((filterOption) => (
            <FiltersItem>
                <Filter onChange={(event) => filterChange(event, setSelectedFilters)}>
                    <option value={filterOption.id}>Filter by:</option>
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

