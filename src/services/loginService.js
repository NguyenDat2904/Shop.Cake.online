import * as httpRequest from '~/ultils/httpRequest';

export const login = async (username, password) => {
    try {
        const results = await httpRequest.post(`auth/login`, {
            username,
            password,
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const logout = async (_id) => {
    try {
        const result = await httpRequest.patch(`auth/logout/${_id}`);
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const getOrder = async () => {
    try {
        const results = await httpRequest.get(`orders`, {});
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const getSee = async () => {
    try {
        const results = await httpRequest.get(`sees`);
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
export const getFavourite = async () => {
    try {
        const results = await httpRequest.get(`favourite`);
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
