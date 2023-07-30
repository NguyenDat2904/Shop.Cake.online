import axios from 'axios';

// Call Product
export const httpRequestProduct = axios.create({
    baseURL: `http://localhost:3000/`,
});

export const getProduct = async (path, options = {}) => {
    const response = await httpRequestProduct.get(path, options);
    return response.data;
};
export const post = async (path, data = {}) => {
    const response = await httpRequestProduct.post(path, data);
    return response.data;
};

// Call Address
export const httpRequestAddress = axios.create({
    baseURL: `https://provinces.open-api.vn/api/?depth=3`,
});
export const getAddress = async (path, options = {}) => {
    const response = await httpRequestAddress.get(path, options);
    return response.data;
};
