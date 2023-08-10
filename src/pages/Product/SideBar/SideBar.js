import React from 'react';
import styles from './SideBar.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);

function SideBar({ children, title, className }) {
    return (
        <div className={cx('group', className)}>
            <div className="children">
                <h2 className={cx('title')}>
                    {title}
                </h2>
                {children}
            </div>
        </div>
    );
}

export default SideBar;
