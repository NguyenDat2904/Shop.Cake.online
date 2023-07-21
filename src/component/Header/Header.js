import React from 'react';
import Tippy from '@tippyjs/react/headless';

import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import classnames from 'classnames/bind';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal/Modal';
import Menu from '../Menu/Menu';
const cx = classnames.bind(styles);

function Header() {
    const [activeMenu, setActiveMenu] = useState(1);
    const [hoveredMenu, setHoveredMenu] = useState(null);

    const handleMenuClick = (index) => {
        setActiveMenu(index);
    };

    const handleMenuMouseOver = (index) => {
        setHoveredMenu(index);
    };

    const handleMenuMouseOut = () => {
        setHoveredMenu(null);
    };
    const checkNumber = (number) => {
        if (activeMenu === number || (hoveredMenu === number && activeMenu !== null)) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <header>
            <section className={cx('header', 'top')} id="smooth">
                <div className={cx('container')}>
                    <div className={cx('col', 'col-left')}>
                        <span className={cx('desc')}>HỖ TRỢ GIAO HÀNG MIỄN PHÍ TRONG VÒNG 2H</span>
                    </div>
                    <div className={cx('col', 'col-right')}>
                        <div className={cx('children')}>
                            <span className={cx('desc')}>1900 9477</span>
                            <span className={cx('user-email', 'desc')}>admin@demo037126.web30s.vn</span>
                            <Tippy
                                trigger="click"
                                placement="bottom-start"
                                interactive
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <Modal>
                                            <Menu
                                                text_1="Đăng nhập"
                                                text_2="Đăng ký"
                                                text_3="Yêu thích"
                                                text_4="So sánh"
                                                link_1="login"
                                                link_2="register"
                                                link_3="compare"
                                                link_4="like"
                                                toggle
                                            />
                                        </Modal>
                                    </div>
                                )}
                            >
                                <span className={cx('account', 'desc')}>Tài khoản</span>
                            </Tippy>
                            <div className={cx('langue')}>
                                <img src="https://demo037126.web30s.vn/assets/images/language/us.svg" alt="" />
                                <img src="https://demo037126.web30s.vn/assets/images/language/vn.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={cx('header', 'bottom')}>
                <div className={cx('container')}>
                    <div className={cx('logo')}>
                        <NavLink to={'/'} className={cx('img-logo')}></NavLink>
                    </div>
                    <div className={cx('group')}>
                        <div className={cx('menu')}>
                            <ul className={cx('list')}>
                                <li
                                    className={cx('item', checkNumber(1) ? 'active' : '')}
                                    onClick={() => handleMenuClick(1)}
                                    onMouseOver={() => handleMenuMouseOver(1)}
                                    onMouseOut={handleMenuMouseOut}
                                >
                                    <div>
                                        <NavLink to={'/'}>
                                            <span>Trang chủ</span>
                                        </NavLink>
                                    </div>
                                </li>
                                <li
                                    className={cx('item', checkNumber(2) ? 'active' : '')}
                                    onClick={() => handleMenuClick(2)}
                                    onMouseOver={() => handleMenuMouseOver(2)}
                                    onMouseOut={handleMenuMouseOut}
                                >
                                    <div>
                                        <NavLink to={'introduce'}>
                                            <span>Giới thiệu</span>
                                        </NavLink>
                                    </div>
                                </li>
                                <li
                                    className={cx('item', checkNumber(3) ? 'active' : '')}
                                    onClick={() => handleMenuClick(3)}
                                    onMouseOver={() => handleMenuMouseOver(3)}
                                    onMouseOut={handleMenuMouseOut}
                                >
                                    <Tippy
                                        placement="bottom-start"
                                        render={(attrs) => (
                                            <div className="box" tabIndex="-1" {...attrs}>
                                                <Modal>Hello</Modal>
                                            </div>
                                        )}
                                    >
                                        <div>
                                            <NavLink to="product">
                                                <span>Sản phẩm</span>
                                                {checkNumber(3) ? (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleDown} />
                                                ) : (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleUp} />
                                                )}
                                            </NavLink>
                                        </div>
                                    </Tippy>
                                </li>
                                <li
                                    className={cx('item', checkNumber(4) ? 'active' : '')}
                                    onClick={() => handleMenuClick(4)}
                                    onMouseOver={() => handleMenuMouseOver(4)}
                                    onMouseOut={handleMenuMouseOut}
                                >
                                    <Tippy
                                        placement="bottom-start"
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                                <Modal>
                                                    <Menu
                                                        text_1="CHĂM SÓC KHÁCH HÀNG"
                                                        text_2="VẬN CHUYỂN HÀNG HÓA"
                                                        toggle
                                                    />
                                                </Modal>
                                            </div>
                                        )}
                                    >
                                        <div>
                                            <NavLink to="support">
                                                <span>Dịch vụ</span>
                                                {checkNumber(4) ? (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleDown} />
                                                ) : (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleUp} />
                                                )}
                                            </NavLink>
                                        </div>
                                    </Tippy>
                                </li>
                                <li
                                    className={cx('item', checkNumber(5) ? 'active' : '')}
                                    onClick={() => handleMenuClick(5)}
                                    onMouseOver={() => handleMenuMouseOver(5)}
                                    onMouseOut={handleMenuMouseOut}
                                >
                                    <Tippy
                                        // visible
                                        placement="bottom-start"
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                                <Modal>
                                                    <Menu text_1="HÌNH ẢNH" text_2="VIDEO" icon />
                                                </Modal>
                                            </div>
                                        )}
                                    >
                                        <div>
                                            <NavLink to="library">
                                                <span>Thư viện</span>
                                                {checkNumber(5) ? (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleDown} />
                                                ) : (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleUp} />
                                                )}
                                            </NavLink>
                                        </div>
                                    </Tippy>
                                </li>
                                <li
                                    className={cx('item', checkNumber(6) ? 'active' : '')}
                                    onClick={() => handleMenuClick(6)}
                                    onMouseOver={() => handleMenuMouseOver(6)}
                                    onMouseOut={handleMenuMouseOut}
                                >
                                    <Tippy
                                        placement="bottom-start"
                                        interactive
                                        render={(attrs) => (
                                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                                <Modal>
                                                    <Menu text_1="MẪU BÁNH MỚI" text_2="TIN VẮN" toggle />
                                                </Modal>
                                            </div>
                                        )}
                                    >
                                        <div>
                                            <NavLink to="news">
                                                <span>Tin tức</span>
                                                {checkNumber(6) ? (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleDown} />
                                                ) : (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleUp} />
                                                )}
                                            </NavLink>
                                        </div>
                                    </Tippy>
                                </li>
                                <li
                                    className={cx('item', checkNumber(7) ? 'active' : '')}
                                    onClick={() => handleMenuClick(7)}
                                    onMouseOver={() => handleMenuMouseOver(7)}
                                    onMouseOut={handleMenuMouseOut}
                                >
                                    <div>
                                        <NavLink to="contact">
                                            <span>Liên hệ</span>
                                        </NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('cart-icon')}>
                        <div className={cx('children')}>
                            <div className={cx('search')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
                            </div>
                            <div className={cx('search')}>
                                <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                                <div className={cx('count')}>0</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;
