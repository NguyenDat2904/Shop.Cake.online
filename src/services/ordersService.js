import * as httpRequest from '~/ultils/httpRequest';
export const getOrder = async () => {
    try {
        const results = await httpRequest.get(`orders`, {});
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
