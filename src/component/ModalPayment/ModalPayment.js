import React from 'react';
import styles from './ModalPayment.module.scss';
import classnames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
const ModalPayment = ({ isShowing, hide }) => {
    const navigate = useNavigate();
    const { handleIsLoading } = useContext(AppContext);

    return isShowing ? (
        <React.Fragment>
            <div className={cx('modal-overlay')} />
            <div className={cx('modal-wrapper')} aria-modal aria-hidden tabIndex={-1} role="dialog">
                <div className={cx('modal')}>
                    <div className={cx('custom-icon-add')}>
                        <span className={cx('success-line-tip')}></span>
                        <span className={cx('success-line-long')}></span>
                    </div>
                    <div className={cx('modal-header')}>
                        <div className={cx('modal-title')}>Đặt hàng thành công</div>
                    </div>
                    <div className={cx('modal-control')}>
                        <button
                            type="button"
                            className={cx('modal-close-button')}
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => {
                                navigate('/');
                                hide(7);
                                handleIsLoading();
                            }}
                        >
                            <span aria-hidden="true">Quay về trang chủ</span>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ) : null;
};

export default ModalPayment;
