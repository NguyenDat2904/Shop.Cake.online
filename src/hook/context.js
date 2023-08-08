import React, { createContext, useEffect, useState } from 'react';
import { generateRandomCode } from '~/pages/Register/CapCha/CapCha';
import * as getUser from '~/services/userService';
import * as getProduct from '~/services/productService';
import * as getOrder from '~/services/ordersService';

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
    const [capChaContact, setCapChaContact] = useState(generateRandomCode(5));

    const [toggleNavigation, setToggleNavigation] = useState(false);
    const [dataUser, setDataUser] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);
    const [dataOrders, setDataOrders] = useState([]);
    const [originalDataUser, setOriginalDataUser] = useState([]);

    const [acceptUser, setAcceptUser] = useState(null);
    const [acceptProductAdmin, setAcceptProductAdmin] = useState(null);
    const [classStatus, setClassStatus] = useState(null);

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
    const reFeshCapChaContact = (e) => {
        e.preventDefault();
        setCapChaContact(generateRandomCode(5));
    };
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getOrder.getOrder();
            setDataOrders(result);
        };
        fetchAPI();
    }, []);

    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getProduct.getProduct();
            setDataProduct(result);
            setOriginalDataUser(result);
        };
        fetchAPI();
    }, []);
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
        originalDataUser,
        setAcceptProductAdmin,
        dataOrders,
        setDataOrders,
        classStatus,
        setClassStatus,
        capChaContact,
        reFeshCapChaContact,
    };

    return (
        <AppContext.Provider value={value} {...props}>
            {}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
