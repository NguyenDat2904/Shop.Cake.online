import { useState } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [isShowingNotion, setIsShowingNotion] = useState(false);
    const [isShowingUser, setIsShowingUser] = useState(false);
    const [isShowingProduct, setIsShowingProduct] = useState(false);
    const [isShowingAddCustomer, setIsShowingAddCustomer] = useState(false);
    const [isShowingAddProduct, setIsShowingAddProduct] = useState(false);

    function toggle(number) {
        if (number === 1) {
            setIsShowing(!isShowing);
            if (!isShowing) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        } else if (number === 2) {
            setIsShowingNotion(!isShowingNotion);
            if (!isShowingNotion) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        } else if (number === 3) {
            setIsShowingUser(!isShowingUser);
            if (!isShowingUser) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        } else if (number === 4) {
            setIsShowingProduct(!isShowingProduct);
            if (!isShowingProduct) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        } else if (number === 5) {
            setIsShowingAddCustomer(!isShowingAddCustomer);
            if (!isShowingAddCustomer) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        } else if (number === 6) {
            setIsShowingAddProduct(!isShowingAddProduct);
            if (!isShowingAddProduct) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        }
    }
    return {
        isShowing,
        isShowingNotion,
        isShowingUser,
        isShowingProduct,
        isShowingAddCustomer,
        isShowingAddProduct,
        toggle,
    };
};

export default useModal;
