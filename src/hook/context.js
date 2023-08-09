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
    const [curLibrary, setCurLibrary] = useState(1);
    const [perLibrary, setPerLibrary] = useState(6);
    const [libraryProduct, setLibraryProduct] = useState([]);
    const [libraryProductVideo, setLibraryProductvideo] = useState([]);
    const [curLibraryVideo, setCurLibraryVideo] = useState(3);
    const [perLibraryVideo, setPerLibraryVideo] = useState(6);

    const [activeLibrary, setActiveLibrary] = useState(1);

    const [filterData, setUserData] = useState([]);
    const [userName, setUserName] = useState('');
    const [userOrder, setUserOder] = useState([]);
    const [getLook, setGetLook] = useState([]);
    const [getLikes, setGetLikes] = useState([]);
    const [getlookAcc, setGetlookAcc] = useState(null);
    const [getLikesAcc, setGetLinksAcc] = useState(null);
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
    const handleAcptRemoveUserSee = async () => {
        await getProduct.deleteSee(getlookAcc);
        setGetLook((prevData) => prevData.filter((user) => user.id !== getlookAcc));
    };
    const handleAcptRemoveUserFavourite = async () => {
        await getProduct.deleteSee(getLikesAcc);
        setGetLikes((prevData) => prevData.filter((user) => user.id !== getLikesAcc));
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
    {
        console.log(getLikes);
    }
    {
        console.log(getLook);
    }
    {
        console.log(libraryProductVideo);
    }

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
