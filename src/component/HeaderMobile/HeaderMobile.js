import React, { useContext } from 'react';
import styles from './HeaderMobile.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
function HeaderMobile() {
    const { handleIsLoading, toggleMobile, setToggleMobile } = useContext(AppContext);
    const classToggle = toggleMobile ? 'active' : '';
    return (
        <div className={cx('wrapper', classToggle)}>
            <div className="childrens">
                <div className={cx('delete')} onClick={() => setToggleMobile(!toggleMobile)}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className={cx('list-menu')}>
                    <ul className={cx('list')}>
                        <NavLink
                            to={'/'}
                            onClick={() => {
                                handleIsLoading();
                                setToggleMobile(!toggleMobile);
                            }}
                        >
                            <li className={cx('item')}>
                                <span>Trang chủ</span>
                            </li>
                        </NavLink>
                        <NavLink
                            to="/introduce"
                            onClick={() => {
                                handleIsLoading();
                                setToggleMobile(!toggleMobile);
                            }}
                        >
                            <li className={cx('item')}>
                                <span>Giới thiệu</span>
                            </li>
                        </NavLink>
                        <NavLink to="/product">
                            <li className={cx('item')}>
                                <span>Sản phẩm</span>
                            </li>
                        </NavLink>
                        <NavLink
                            to="/support/support-customerCare"
                            onClick={() => {
                                handleIsLoading();
                                setToggleMobile(!toggleMobile);
                            }}
                        >
                            <li className={cx('item')}>
                                <span>Dịch vụ</span>
                            </li>
                        </NavLink>
                        <NavLink
                            to="/library/libraryimg"
                            onClick={() => {
                                handleIsLoading();
                                setToggleMobile(!toggleMobile);
                            }}
                        >
                            <li className={cx('item')}>
                                <span>Thư viện</span>
                            </li>
                        </NavLink>
                        <NavLink
                            to="/news"
                            onClick={() => {
                                handleIsLoading();
                                setToggleMobile(!toggleMobile);
                            }}
                        >
                            <li className={cx('item')}>
                                <span>Tin tức</span>
                            </li>
                        </NavLink>
                        <NavLink
                            to="/contact"
                            onClick={() => {
                                handleIsLoading();
                                setToggleMobile(!toggleMobile);
                            }}
                        >
                            <li className={cx('item')}>
                                <span>Liên hệ</span>
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default HeaderMobile;
