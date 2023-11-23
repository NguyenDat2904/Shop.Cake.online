import * as httpRequest from '~/ultils/httpRequest';
export const getProduct = async () => {
    try {
        const results = await httpRequest.get(`product?limit=10000`, {});
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const getProductPerPage = async (currentPage, perPage) => {
    const results = await httpRequest.get(`product?page=${currentPage}&limit=${perPage}`, {});
    return results;
};

export const getCart = async (_id, refresh_token, accessToken) => {
    try {
        const results = await httpRequest.get(`cart/user/${_id}?limit=1000`, {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const addCart = async (_id, product, refresh_token, accessToken) => {
    try {
        const results = await httpRequest.post(`cart/post/${_id}`, product, {
            headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCart = async (_id, id, refresh_token, accessToken) => {
    try {
        const results = await httpRequest.remove(
            `cart/delete/${_id}`,
            { id: id },
            {
                headers: { refresh_token: `${refresh_token}`, authorization: `${accessToken}` },
            },
        );
        return results;
    } catch (error) {
        console.log(error);
    }
};

export const getProductLibrary = async (curLibrary, perLibrary) => {
    try {
        const results = await httpRequest.get(`libraryData?_page=${curLibrary}&_limit=${perLibrary}`, {
            curLibrary,
            perLibrary,
        });
        return results.data;
    } catch (error) {
        console.log(error);
    }
};
export const getProductDetails = async (_id) => {
    try {
        const results = await httpRequest.get(`product/${_id}`, {});
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
