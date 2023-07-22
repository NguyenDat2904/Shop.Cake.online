import React, { createContext, useState } from 'react';
const AppContext = createContext();
const AppProvider = (props) => {
    const [selectIcon, setSelectIcon] = useState(true);
    const [checkedItems, setCheckedItems] = useState([]);

    const value = { selectIcon, setSelectIcon, checkedItems, setCheckedItems };
    return (
        <AppContext.Provider value={value} {...props}>
            {}
        </AppContext.Provider>
    );
};

export { AppProvider, AppContext };
