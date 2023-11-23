import * as httpRequest from '~/ultils/httpRequest';
export const verify = async (username, email, name) => {
    try {
        const result = await httpRequest.post('auth/verify', {
            username,
            email,
            name,
        });
        return result;
    } catch (error) {
        console.log(error);
    }
};

export const register = async (name, username, phone, email, password, address, code) => {
    try {
        const results = await httpRequest.post(`auth/register`, {
            name,
            username,
            phone,
            email,
            password,
            address,
            code,
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
export const postPay = async (
    valueNameBuy,
    valueEmail,
    valuePhoneBuy,
    valueNameReceive,
    valuePhoneReceive,
    valueProvince,
    valueDistrict,
    valueWard,
    valueAddress,
    productDataCart,
    formatted,
    payIn,
    deliveryMethod,
    status = 'Chưa nhận hàng',
    userName,
) => {
    try {
        const results = await httpRequest.post(`orders`, {
            nameBuy: valueNameBuy,
            email: valueEmail,
            phoneBuy: valuePhoneBuy,
            nameReceive: valueNameReceive,
            phoneReceive: valuePhoneReceive,
            province: valueProvince,
            district: valueDistrict,
            ward: valueWard,
            address: valueAddress,
            product: productDataCart,
            formattedTotal: formatted,
            payIn: payIn,
            deliveryMethod: 'Đang đóng hàng',
            status: 'Chưa nhận hàng',
            userName: userName,
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const postSee = async (data, userName) => {
    try {
        const results = await httpRequest.post(`sees`, { dataSee: data, userName: userName });
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const postFavourite = async (data, userName) => {
    try {
        const results = await httpRequest.post(`favourite`, { favouriteData: data, userName: userName });
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const postContact = async (nameContact, emailContact, phoneContact, contenContact) => {
    try {
        const results = await httpRequest.post(`dataContact`, {
            nameContact: nameContact,
            emailContact: emailContact,
            phoneContact: phoneContact,
            contenContact: contenContact,
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const getContact = async () => {
    try {
        const results = await httpRequest.get(`dataContact`, {});
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
