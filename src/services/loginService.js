import * as httpRequest from '~/ultils/httpRequest';

export const getUser = async (user, password) => {
    try {
        const results = await httpRequest.get(`users`, {
            params: { user: user, password: password },
        });
        return results;
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
