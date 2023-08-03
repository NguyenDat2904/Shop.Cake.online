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
