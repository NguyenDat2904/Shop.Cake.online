import React from 'react';
import styles from './Banner.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
const cx = classnames.bind(styles);
function Banner({ title, page, detail, toggle }) {
    return (
        <div className={cx('banner')}>
            <section className="container">
                <div className={cx('col')}>
                    <div className={cx('childrens')}>
                        <h1 className={cx('title')}>
                            <span className={cx('content')}>{title}</span>
                        </h1>
                    </div>
                    <div className={cx('breadscrumb')}>
                        <NavLink to="/" className={cx('breadscrumb-item')}>
                            Trang chủ
                        </NavLink>
                        <div className={cx('breadscrumb-icon')}>/</div>
                        <NavLink to="/product" className={cx('breadscrumb-item', 'active')}>
                            {page}
                        </NavLink>
                        {toggle && <div className={cx('breadscrumb-icon')}>/</div>}
                        <NavLink to="/product" className={cx('breadscrumb-item', 'active')}>
                            {detail}
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;
