import React, { createContext, useState } from 'react';
const AppContext = createContext();
const AppProvider = (props) => {
    const [selectIcon, setSelectIcon] = useState(true);
    const [checkedItems, setCheckedItems] = useState([]);
    const [productDataTrends, setProductDataTrends] = useState([]);
    const [productData, setProductData] = useState([]);
    const [perPage, setPerPage] = useState(1);
    const [limit, setLimit] = useState(15);

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
    };
    return (
        <AppContext.Provider value={value} {...props}>
            {}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
