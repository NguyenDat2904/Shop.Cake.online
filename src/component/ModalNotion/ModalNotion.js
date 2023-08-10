import React from 'react';
import styles from './ModalNotion.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
const ModalNotion = ({ isShowing, hide }) => {
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
                        <div className={cx('modal-title')}>Thêm vào giỏ hàng thành công</div>
                    </div>
                    <div className={cx('modal-control')}>
                        <button
                            type="button"
                            className={cx('modal-close-button')}
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => hide(2)}
                        >
                            <span aria-hidden="true">Mua thêm</span>
                        </button>
                        <NavLink to="/cart">
                            <button
                                type="button"
                                className={cx('modal-close-button', 'cancel')}
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => {
                                    handleIsLoading();
                                    hide(2);
                                }}
                            >
                                <span aria-hidden="true">Giỏ hàng</span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ) : null;
};

export default ModalNotion;
