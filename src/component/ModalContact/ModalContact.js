import React from 'react';
import styles from './ModalContact.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
const ModalContact = ({ isShowing, hide }) => {

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
                        <div className={cx('modal-title')}>Chúng tôi đã nhận được thông tin từ bạn!!</div>
                    </div>
                    <div className={cx('modal-control')}>
                        <button
                            type="button"
                            className={cx('modal-close-button')}
                            data-dismiss="modal"
                            aria-label="Close"
                            onClick={() => hide(12)}
                        >
                            <span aria-hidden="true">Đóng</span>
                        </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ) : null;
};

export default ModalContact;
