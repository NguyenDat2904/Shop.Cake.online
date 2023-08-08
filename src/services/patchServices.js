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
export const patchServicePassword = async (password, id) => {
    try {
        const results = await httpRequest.patch(`users/${id}`, {
            password: password,
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const hendleDelete = async () => {};
