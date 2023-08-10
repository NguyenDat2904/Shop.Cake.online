import { useState } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [isShowingNotion, setIsShowingNotion] = useState(false);
    const [isShowingUser, setIsShowingUser] = useState(false);
    const [isShowingProduct, setIsShowingProduct] = useState(false);
    const [isShowingAddCustomer, setIsShowingAddCustomer] = useState(false);
    const [isShowingAddProduct, setIsShowingAddProduct] = useState(false);
    const [isShowingPayment, setIsShowingPayment] = useState(false);
    const [isShowingCompare, setIsShowingCompare] = useState(false);
    const [isShowingNotionCompare, setIsShowingNotionCompare] = useState(false);
    const [isShowingHeart, setIsShowingHeart] = useState(false);
    const [isShowingNotionHeart, setIsShowingNotionHeart] = useState(false);

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
        } else if (number === 7) {
            setIsShowingPayment(!isShowingPayment);
            if (!isShowingPayment) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        } else if (number === 8) {
            setIsShowingCompare(!isShowingCompare);
            if (!isShowingCompare) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        } else if (number === 9) {
            setIsShowingNotionCompare(!isShowingNotionCompare);
            if (!isShowingNotionCompare) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        } else if (number === 10) {
            setIsShowingHeart(!isShowingHeart);
            if (!isShowingHeart) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        } else if (number === 11) {
            setIsShowingNotionHeart(!isShowingNotionHeart);
            if (!isShowingNotionHeart) {
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
        isShowingPayment,
        isShowingCompare,
        isShowingNotionCompare,
        isShowingHeart,
        isShowingNotionHeart,
        toggle,
    };
};

export default useModal;
