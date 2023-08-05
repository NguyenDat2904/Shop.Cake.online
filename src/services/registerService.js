import * as httpRequest from '~/ultils/httpRequest';
export const postUser = async (name, phone, address, email, user, password, img, role) => {
    try {
        const results = await httpRequest.post(`users`, {
            name: name,
            phone: phone,
            address: address,
            email: email,
            user: user,
            img: img,
            password: password,
            role: 'regular',
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const getUser = async (user) => {
    try {
        const results = await httpRequest.get(`users`, {
            user: user,
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};
