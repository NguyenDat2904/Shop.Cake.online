import { useState } from 'react';

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);
    const [isShowingNotion, setIsShowingNotion] = useState(false);

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
        }
    }
    return {
        isShowing,
        isShowingNotion,
        toggle,
    };
};

export default useModal;
