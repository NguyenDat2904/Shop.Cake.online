import React, { useContext } from 'react';
import styles from './ModalProductHeart.module.scss';
import classnames from 'classnames/bind';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
const ModalProductHeart = ({ isShowing, hide }) => {
    const { setAcceptHeart, handleConfirmRemoveHeart } = useContext(AppContext);
    const handleAccept = () => {
        setAcceptHeart(true);
        handleConfirmRemoveHeart();
        hide(10);
    };
    const handleCancel = () => {
        setAcceptHeart(false);
        hide(10);
    };
    return isShowing ? (
        <React.Fragment>
            <div className={cx('modal-overlay')} />
            <div className={cx('modal-wrapper')} aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className={cx('modal')}>
                    <div className={cx('modal-header')}>
                        <div className={cx('modal-title')}>Bạn chắc chắn muốn xóa sản phẩm này không?</div>
                    </div>
                    <div className={cx('modal-control')}>
                        <button
                            type="button"
                            className={cx('modal-close-button')}
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={handleAccept}
                        >
                            <span aria-hidden="true">Đồng ý</span>
                        </button>
                        <button
                            type="button"
                            className={cx('modal-close-button', 'cancel')}
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={handleCancel}
                        >
                            <span aria-hidden="true">Hủy</span>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ) : null;
};

export default ModalProductHeart;
