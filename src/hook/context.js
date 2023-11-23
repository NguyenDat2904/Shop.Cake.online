import React, { createContext, useEffect, useState } from 'react';
import { generateRandomCode } from '~/pages/Register/CapCha/CapCha';
import * as getUser from '~/services/userService';
import * as getProduct from '~/services/productService';
import * as getOrder from '~/services/ordersService';
import { useLocation } from 'react-router-dom';

const AppContext = createContext();
const AppProvider = (props) => {
    const [selectIcon, setSelectIcon] = useState(true);
    const [productDataTrends, setProductDataTrends] = useState([]);
    const [productData, setProductData] = useState([]);
    const [filterProduct, setFilterProduct] = useState([]);

    const [productDataDetail, setProductDataDetail] = useState([]);
    const [addressData, setAddressData] = useState([]);
    const [toggleCart, setToggleCart] = useState(false);
    const [productDataCart, setProductDataCart] = useState([]);
    const [arrayCompare, setArrayCompare] = useState(JSON.parse(localStorage.getItem('compare')) || []);
    const [arrayHeart, setArrayHeart] = useState(JSON.parse(localStorage.getItem('heart')) || []);
    const [perPage, setPerPage] = useState(1);
    const [limit, setLimit] = useState(15);

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
    const [toggleMobile, setToggleMobile] = useState(false);

    // test
    const [checkedOptions, setCheckedOptions] = useState({
        color: [],
        type: [],
        size: [],
    });
    const [userInfos, setUserInfos] = useState(localStorage.getItem('user'));
    const [userDetail, setUserDetail] = useState(null);
    const [cartData, setCartData] = useState([]);
    const [orderUser, setOrderUser] = useState([])

    const location = useLocation();
    const userInfo = JSON.parse(userInfos);
    useEffect(() => {
        if (userInfo) {
            const detailUser = async () => {
                const userDetail = await getUser.detail(userInfo._id, userInfo.refreshToken, userInfo.accessToken);
                if (userDetail.status === 200) {
                    setUserDetail(userDetail.data);
                }
            };
            detailUser();
        }
    }, [userInfos]);
    useEffect(() => {
        const cart = async () => {
            if (userInfo) {
                const dataCart = await getProduct.getCart(userInfo._id, userInfo.refreshToken, userInfo.accessToken);
                if (dataCart.status === 200) {
                    setCartData(dataCart.data.carts);
                }
                if (dataCart.status === 400) {
                    setCartData([]);
                }
            }
        };
        cart();
    }, []);
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
    const handleConfirmRemove = async () => {
        const deleteCart = getProduct.deleteCart(
            userInfo._id,
            acceptProduct._id,
            userInfo.refreshToken,
            userInfo.accessToken,
        );
        console.log(deleteCart);
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
            setDataProduct(result.data);
            setOriginalDataUser(result.data);
            setDataSort(result.data);
        };
        fetchAPI();
    }, []);

    const value = {
        selectIcon,
        setSelectIcon,
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
        toggleMobile,
        setToggleMobile,
        checkedOptions,
        setCheckedOptions,
        filterProduct,
        setFilterProduct,
        userDetail,
        setUserDetail,
        userInfos,
        setUserInfos,
        cartData,
        setCartData,
        orderUser,
        setOrderUser,
    };

    return (
        <AppContext.Provider value={value} {...props}>
            {}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
