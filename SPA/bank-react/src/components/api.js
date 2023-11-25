import axios from "axios";

export const getBanks = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/banks');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getSortedWithFilter = async (filterParam, searchParam) => {
    try {
        const response = await axios.get('http://localhost:8080/api/banks/filter', {
            params: {
                filter: filterParam.value,
                search: searchParam
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}