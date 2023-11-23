import * as httpRequest from '~/ultils/httpRequest';

export const detail = async (_id, refresh_token, accessToken) => {
    try {
        const detailUser = await httpRequest.get(`user/${_id}`,  {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return detailUser;
    } catch (error) {
        console.log(error);
    }
};

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
