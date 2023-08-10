import React, { useContext } from 'react';
import styles from './ModalProductCompare.module.scss';
import classnames from 'classnames/bind';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
const ModalProductCompare = ({ isShowing, hide }) => {
    const { setAcceptCompare, handleConfirmRemoveCompare } = useContext(AppContext);
    const handleAccept = () => {
        setAcceptCompare(true);
        handleConfirmRemoveCompare();
        hide(8);
    };
    const handleCancel = () => {
        setAcceptCompare(false);
        hide(8);
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

export default ModalProductCompare;
