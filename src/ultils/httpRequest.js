import axios from 'axios';

// Call Product
export const httpRequest = axios.create({
    baseURL: `https://bucker-shop.onrender.com/`,
});
export const get = async (path, options = {}, header) => {
    try {
        const response = await httpRequest.get(path, options, header);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.status);
            console.error('Error info:', error.response.data);
        } else if (error.request) {
            console.error('No response received from the server.');
        } else {
            console.error('Error:', error.message);
        }
        return error.response;
    }
};
export const post = async (path, data = {}, header) => {
    try {
        const response = await httpRequest.post(path, data, header);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.status);
            console.error('Error info:', error.response.data);
        } else if (error.request) {
            console.error('No response received from the server.');
        } else {
            console.error('Error:', error.message);
        }
        return error.response;
    }
};
export const deleteUser = async (path, data = {}, header) => {
    try {
        const response = await httpRequest.delete(path, data, header);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.status);
            console.error('Error info:', error.response.data);
        } else if (error.request) {
            console.error('No response received from the server.');
        } else {
            console.error('Error:', error.message);
        }
        return error.response;
    }
};
export const patch = async (patch, data = {}, header) => {
    try {
        const response = await httpRequest.patch(patch, data, header);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.status);
            console.error('Error info:', error.response.data);
        } else if (error.request) {
            console.error('No response received from the server.');
        } else {
            console.error('Error:', error.message);
        }
        return error.response;
    }
};

export const put = async (patch, data, header) => {
    try {
        const response = await httpRequest.put(patch, data, header);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.status);
            console.error('Error info:', error.response.data);
        } else if (error.request) {
            console.error('No response received from the server.');
        } else {
            console.error('Error:', error.message);
        }
        return error.response;
    }
};

export const remove = async (patch, data, header) => {
    try {
        const response = await httpRequest.post(patch, data, header);
        return response;
    } catch (error) {
        if (error.response) {
            console.error('Error:', error.response.status);
            console.error('Error info:', error.response.data);
        } else if (error.request) {
            console.error('No response received from the server.');
        } else {
            console.error('Error:', error.message);
        }
        return error.response;
    }
};

// Call Address
export const httpRequestAddress = axios.create({
    baseURL: `https://provinces.open-api.vn/api/?depth=3`,
});
export const getAddress = async (path, options = {}) => {
    const response = await httpRequestAddress.get(path, options);
    return response.data;
};
