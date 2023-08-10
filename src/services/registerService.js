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
