import * as httpRequest from '~/ultils/httpRequest';
export const getAddress = async () => {
    try {
        const results = await httpRequest.getAddress(``, {});
        return results;
    } catch (error) {
        console.log(error);
    }
};
