import React from 'react';
import styles from './ModalNotionCompare.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
const ModalNotionCompare = ({ isShowing, hide }) => {
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
                        <div className={cx('modal-title')}>Thêm vào danh sách so sánh thành công</div>
                    </div>
                    <div className={cx('modal-control')}>
                        <button
                            type="button"
                            className={cx('modal-close-button')}
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => hide(9)}
                        >
                            <span aria-hidden="true">Thêm sản phẩm</span>
                        </button>
                        <NavLink to="/compare">
                            <button
                                type="button"
                                className={cx('modal-close-button', 'cancel')}
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => {
                                    handleIsLoading();
                                    hide(9);
                                }}
                            >
                                <span aria-hidden="true">So sánh</span>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ) : null;
};

export default ModalNotionCompare;
