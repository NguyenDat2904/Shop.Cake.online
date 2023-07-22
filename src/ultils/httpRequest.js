import axios from 'axios';

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
