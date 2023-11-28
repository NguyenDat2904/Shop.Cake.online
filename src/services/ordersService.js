import * as httpRequest from '~/ultils/httpRequest';
export const getOrder = async (refresh_token, accessToken, limit) => {
    try {
        const results = await httpRequest.get(`order?limit=${limit}`, {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return results;
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

export const createOrder = async (data, refresh_token, accessToken) => {
    try {
        const result = await httpRequest.post(`order/post`, data, {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const orderPaypal = async (data, refresh_token, accessToken) => {
    try {
        const result = await httpRequest.post(`payment/paypal`, data, {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};
