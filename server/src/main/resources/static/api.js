const baseRequest = async ({path = "", method = "GET", body = null}) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": 'application/json'
            },
        };
        
        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(path, reqParams);
    } catch (error) {
        console.log(error);
    }
}

export const getAllBanks = async () => {
    const rawResp = await baseRequest({path: "/banks"});
    return rawResp.json();
}

export const postBank = (body) => baseRequest({path: "/banks", method: "POST", body});

export const editBank = (id, body) => baseRequest({path: `/banks/${id}`, method: "PUT", body});

export const deleteBank = (id) => baseRequest({path: `/banks/${id}`, method: "DELETE"});

export const getBankById = async (id) => {
    const rawResp = await baseRequest({path: `/banks/${id}`, method: "GET"});
    return rawResp.json();
}
