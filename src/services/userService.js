import * as httpRequest from '~/ultils/httpRequest';

export const getUserAll = async () => {
    try {
        const results = await httpRequest.get(`users`, {});
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const deleteUser = async (id) => {
    try {
        const results = await httpRequest.deleteUser(`users/${id}`, {});
        return results;
    } catch (error) {
        console.log(error);
    }
};
