import axios from 'axios';

// Call Product
export const httpRequest = axios.create({
    baseURL: `http://localhost:3000/`,
});
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response;
};
export const post = async (path, data = {}) => {
    const response = await httpRequest.post(path, data);
    return response;
};
export const deleteUser = async (path, data = {}) => {
    const response = await httpRequest.delete(path, data);
    return response;
};
export const patch = async (patch, data = {}) => {
    const reponse = await httpRequest.patch(patch, data);
    return reponse;
};
// Call Address
export const httpRequestAddress = axios.create({
    baseURL: `https://provinces.open-api.vn/api/?depth=3`,
});
export const getAddress = async (path, options = {}) => {
    const response = await httpRequestAddress.get(path, options);
    return response.data;
};
