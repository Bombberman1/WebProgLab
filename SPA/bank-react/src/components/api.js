import axios from "axios";

export const getBanks = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/banks');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export const getSortedWithFilter = async (filterParam) => {
    try {
        const response = await axios.get('http://localhost:8080/api/banks/filter', {
            params: {
                filter: filterParam.value
            }
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}