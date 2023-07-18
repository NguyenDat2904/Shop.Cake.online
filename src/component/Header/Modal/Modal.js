import React from 'react';
import styles from './Modal.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function Modal({ children }) {
    return <div className={cx('modal')}>{children}</div>;
}

export default Modal;
