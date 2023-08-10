import * as httpRequest from '~/ultils/httpRequest';
export const getProduct = async () => {
    try {
        const results = await httpRequest.get(`products`, {});
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
export const getProductPerPage = async (currentPage, perPage) => {
    try {
        const results = await httpRequest.get(`products?_page=${currentPage}&_limit=${perPage}`, {
            currentPage,
            perPage,
        });
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
export const getProductDetails = async (id) => {
    try {
        const results = await httpRequest.get(`products/${id}`, {
            id,
        });
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteProduct = async (id) => {
    try {
        const results = await httpRequest.deleteUser(`products/${id}`, {
            id,
        });
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteSee = async (id) => {
    try {
        const results = await httpRequest.deleteUser(`products/${id}`, {
            id,
        });
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
export const deleteFavourite = async (id) => {
    try {
        const results = await httpRequest.deleteUser(`products/${id}`, {
            id,
        });
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
export const postProduct = async (name, size, type, color, cost, price, topic, img) => {
    try {
        const results = await httpRequest.post(`products`, {
            name,
            size,
            type,
            color,
            cost,
            price,
            topic,
            img,
        });
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
