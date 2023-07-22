import * as httpRequest from '~/ultils/httpRequest';
export const getProduct = async () => {
    try {
        const results = await httpRequest.getProduct(`products`, {});
        return results;
    } catch (error) {
        console.log(error);
    }
};
export const getProductPerPage = async (currentPage, perPage) => {
    try {
        const results = await httpRequest.getProduct(`products?_page=${currentPage}&_limit=${perPage}`, {
            currentPage,
            perPage,
        });
        return results;
    } catch (error) {
        console.log(error);
    }
};
