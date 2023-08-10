import React from 'react';
import styles from './ModalNotionHeart.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
const ModalNotionHeart = ({ isShowing, hide }) => {
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
                        <div className={cx('modal-title')}>Thêm vào danh sách yêu thích thành công</div>
                    </div>
                    <div className={cx('modal-control')}>
                        <button
                            type="button"
                            className={cx('modal-close-button')}
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => hide(11)}
                        >
                            <span aria-hidden="true">Thêm sản phẩm</span>
                        </button>
                        <NavLink to="/profile/yourfavourite">
                            <button
                                type="button"
                                className={cx('modal-close-button', 'cancel')}
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => {
                                    hide(11);
                                    handleIsLoading()
                                }}
                            >
                                <span aria-hidden="true">Yêu Thích</span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ) : null;
};

export default ModalNotionHeart;
