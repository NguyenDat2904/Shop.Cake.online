import * as httpRequest from '~/ultils/httpRequest';
export const postUser = async (name, phone, address, email, user, password, role) => {
    try {
        const results = await httpRequest.post(`users`, {
            name: name,
            phone: phone,
            address: address,
            email: email,
            user: user,
            password: password,
            role: 'regular',
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};
