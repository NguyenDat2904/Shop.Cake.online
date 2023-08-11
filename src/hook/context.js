import React, { createContext, useEffect, useState } from 'react';
import { generateRandomCode } from '~/pages/Register/CapCha/CapCha';
import * as getUser from '~/services/userService';
import * as getProduct from '~/services/productService';
import * as getOrder from '~/services/ordersService';
import { useLocation } from 'react-router-dom';

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
    const [arrayCompare, setArrayCompare] = useState(JSON.parse(localStorage.getItem('compare')) || []);
    const [arrayHeart, setArrayHeart] = useState(JSON.parse(localStorage.getItem('heart')) || []);
    const [perPage, setPerPage] = useState(1);
    const [limit, setLimit] = useState(15);
    const [sortedProductData, setSortedProductData] = useState(null);

    const [acceptProduct, setAcceptProduct] = useState(null);
    const [acceptCompare, setAcceptCompare] = useState(null);
    const [acceptHeart, setAcceptHeart] = useState(null);

    const [slider, setSlider] = useState([]);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [capCha, setCapCha] = useState(generateRandomCode(5));
    const [capChaContact, setCapChaContact] = useState(generateRandomCode(5));
    const [dataSort, setDataSort] = useState([]);
    const [toggleNavigation, setToggleNavigation] = useState(false);
    const [dataUser, setDataUser] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);
    const [dataOrders, setDataOrders] = useState([]);
    const [originalDataUser, setOriginalDataUser] = useState([]);
    const [dataSortSave, setDataSortSave] = useState([]);
    const [curLibrary, setCurLibrary] = useState(1);
    const [perLibrary, setPerLibrary] = useState(6);
    const [libraryProduct, setLibraryProduct] = useState([]);
    const [libraryProductVideo, setLibraryProductvideo] = useState([]);
    const [curLibraryVideo, setCurLibraryVideo] = useState(3);
    const [perLibraryVideo, setPerLibraryVideo] = useState(6);

    const [activeLibrary, setActiveLibrary] = useState(1);

    const [filterData, setUserData] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem('profile'));
        return storedData || [];
    });
    const [userName, setUserName] = useState('');
    const [userOrder, setUserOder] = useState(() => {
        const storedData = JSON.parse(localStorage.getItem('orders'));
        return storedData || [];
    });
    const [getLook, setGetLook] = useState([]);
    const [getLikes, setGetLikes] = useState([]);
    const [getlookAcc, setGetlookAcc] = useState(null);
    const [getLikesAcc, setGetLinksAcc] = useState(null);
    const [acceptUser, setAcceptUser] = useState(null);
    const [acceptProductAdmin, setAcceptProductAdmin] = useState(null);
    const [classStatus, setClassStatus] = useState(null);
    const location = useLocation();
    useEffect(() => {
        if (location.pathname === window.location.pathname) {
            setIsLoading(true);
            document.body.style.overflow = 'hidden';
            const timer = setTimeout(() => {
                setIsLoading(false);
                document.body.style.overflow = 'auto';
            }, 1500);
            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = 'auto';
            setIsLoading(false);
        }
    }, []);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = 'auto';
        }, 1500);
    }, [location]);
    const handleConfirmRemove = () => {
        const updatedItems = productDataCart.filter((item) => item.id !== acceptProduct.id);
        setProductDataCart(updatedItems);
        localStorage.setItem('cart', JSON.stringify(updatedItems));
    };

    const handleConfirmRemoveCompare = () => {
        const updatedItems = arrayCompare.filter((item) => item.id !== acceptCompare.id);
        setArrayCompare(updatedItems);
        localStorage.setItem('compare', JSON.stringify(updatedItems));
    };

    const handleConfirmRemoveHeart = () => {
        const updatedItems = arrayHeart.filter((item) => item.id !== acceptHeart.id);
        setArrayHeart(updatedItems);
        localStorage.setItem('heart', JSON.stringify(updatedItems));
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
            setDataSort(result);
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
        handleConfirmRemoveCompare,
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
        setUserData,
        filterData,
        setUserName,
        userName,
        setUserOder,
        userOrder,
        setGetLook,
        setGetLikes,
        getLook,
        getLikes,
        setGetlookAcc,
        setGetLinksAcc,
        sortedProductData,
        setSortedProductData,
        dataSort,
        setDataSort,
        dataSortSave,
        setDataSortSave,
        acceptCompare,
        setAcceptCompare,
        acceptHeart,
        setAcceptHeart,
        handleConfirmRemoveHeart,
        arrayHeart,
        setArrayHeart,
        curLibrary,
        perLibrary,
        libraryProduct,
        setLibraryProduct,
        setCurLibrary,
        setPerLibrary,
        activeLibrary,
        setActiveLibrary,
        libraryProductVideo,
        curLibraryVideo,
        setCurLibraryVideo,
        setLibraryProductvideo,
        perLibraryVideo,
        setPerLibraryVideo,
    };

    return (
        <AppContext.Provider value={value} {...props}>
            {}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
