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
export const postPay = async (
    valueNameBuy,
    valueEmail,
    valuePhoneBuy,
    valueNameReceive,
    valuePhoneReceive,
    valueProvince,
    valueDistrict,
    valueWard,
    productDataCart,
    formatted,
    payIn,
    deliveryMethod,
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
            product: productDataCart,
            formattedTotal: formatted,
            payIn: payIn,
            deliveryMethod: deliveryMethod,
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const postPay2 = async (
    valueNameBuy,
    valueEmail,
    valuePhoneBuy,
    valueNameReceive,
    valuePhoneReceive,
    productDataCart,
    formattedTotal,
    payIn,
    deliveryMethod,
) => {
    try {
        const results = await httpRequest.post(`orders`, {
            nameBuy: valueNameBuy,
            email: valueEmail,
            phoneBuy: valuePhoneBuy,
            nameReceive: valueNameReceive,
            phoneReceive: valuePhoneReceive,
            product: productDataCart,
            formattedTotal: formattedTotal,
            payIn: payIn,
            deliveryMethod: deliveryMethod,
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};