import * as httpRequest from '~/ultils/httpRequest';
export const getOrder = async () => {
    try {
        const results = await httpRequest.get(`orders`, {});
        return results.data;
    } catch (error) {
        console.log(error);
    }
};

export const getOrderUser = async (_id, refresh_token, accessToken) => {
    try {
        const result = await httpRequest.get(`order/user/${_id}`, {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};
