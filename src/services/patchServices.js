import * as httpRequest from '~/ultils/httpRequest';
export const patchService = async (name, phone, address, id) => {
    try {
        const results = await httpRequest.patch(`users/${id}`, {
            name: name,
            phone: phone,
            address: address,
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const changePassword = async (_id, password, newPassword) => {
    try {
        const results = await httpRequest.patch(`auth/${_id}/change-password`, {
            password,
            newPassword,
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const changeUser = async (_id, data, refresh_token, accessToken) => {
    try {
        const result = await httpRequest.put(`user/put/${_id}`, data, {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};
