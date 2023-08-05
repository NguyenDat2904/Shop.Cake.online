import React, { createContext, useState } from 'react';
import { generateRandomCode } from '~/pages/Register/CapCha/CapCha';
import * as getUser from '~/services/userService';
import * as getProduct from '~/services/productService';

const AppContext = createContext();
const AppProvider = (props) => {
    const [selectIcon, setSelectIcon] = useState(true);
    const [checkedItems, setCheckedItems] = useState([]);
    const [productDataTrends, setProductDataTrends] = useState([]);
    const [productData, setProductData] = useState([]);
    const [productDataDetail, setProductDataDetail] = useState([]);
    const [addressData, setAddressData] = useState([]);
    const [toggleCart, setToggleCart] = useState(false);
    const [productDataCart, setProductDataCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    const [arrayCompare, setArrayCompare] = useState([]);
    const [perPage, setPerPage] = useState(1);
    const [limit, setLimit] = useState(15);
    const [acceptProduct, setAcceptProduct] = useState(null);
    const [slider, setSlider] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [capCha, setCapCha] = useState(generateRandomCode(5));
    const [toggleNavigation, setToggleNavigation] = useState(false);
    const [dataUser, setDataUser] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);

    const [acceptUser, setAcceptUser] = useState(null);
    const [acceptProductAdmin, setAcceptProductAdmin] = useState(null);

    const handleConfirmRemove = () => {
        const updatedItems = productDataCart.filter((item) => item.id !== acceptProduct.id);
        setProductDataCart(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };
    const handleAcptRemoveUser = async () => {
        await getUser.deleteUser(acceptUser);
        setDataUser((prevData) => prevData.filter((user) => user.id !== acceptUser));
    };

    const handleAcptRemoveProduct = async () => {
        await getProduct.deleteProduct(acceptProductAdmin);
        setDataProduct((prevData) => prevData.filter((user) => user.id !== acceptProductAdmin));
    };

    const handleIsLoading = () => {
        setIsLoading(true);
    };
    const reFeshCapCha = (e) => {
        e.preventDefault();
        setCapCha(generateRandomCode(5));
    };
    const value = {
        selectIcon,
        setSelectIcon,
        checkedItems,
        setCheckedItems,
        productDataTrends,
        setProductDataTrends,
        productData,
        setProductData,
        perPage,
        setPerPage,
        limit,
        setLimit,
        productDataDetail,
        setProductDataDetail,
        toggleCart,
        setToggleCart,
        productDataCart,
        setProductDataCart,
        addressData,
        setAddressData,
        arrayCompare,
        setArrayCompare,
        setAcceptProduct,
        handleConfirmRemove,
        slider,
        setSlider,
        relatedProducts,
        setRelatedProducts,
        isLoading,
        setIsLoading,
        handleIsLoading,
        capCha,
        setCapCha,
        reFeshCapCha,
        toggleNavigation,
        setToggleNavigation,
        dataUser,
        setDataUser,
        handleAcptRemoveUser,
        acceptUser,
        setAcceptUser,
        handleAcptRemoveProduct,
        dataProduct,
        setDataProduct,
        setAcceptProductAdmin,
    };

    return (
        <AppContext.Provider value={value} {...props}>
            {}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
