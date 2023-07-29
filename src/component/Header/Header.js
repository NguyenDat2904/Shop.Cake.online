import React, { useContext, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faBagShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal/Modal';
import Menu from '../Menu/Menu';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);

function Header() {
    // 1. State
    const [icon, setIcon] = useState(false);
    const { setToggleCart, productDataCart } = useContext(AppContext);

    // 3. Functions
    const activeClass = (params) => {
        return params.isActive ? cx('active') : '';
    };
    // 4. Render
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
                                                link_3="like"
                                                link_4="compare"
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
                                <li className={cx('item')}>
                                    <div>
                                        <NavLink to={'/'} className={activeClass}>
                                            <span>Trang chủ</span>
                                        </NavLink>
                                    </div>
                                </li>
                                <li className={cx('item', activeClass)}>
                                    <div>
                                        <NavLink to={'introduce'} className={activeClass}>
                                            <span>Giới thiệu</span>
                                        </NavLink>
                                    </div>
                                </li>
                                <li className={cx('item', activeClass)}>
                                    <Tippy
                                        placement="bottom-start"
                                        render={(attrs) => (
                                            <div className="box" tabIndex="-1" {...attrs}>
                                                <Modal>Hello</Modal>
                                            </div>
                                        )}
                                    >
                                        <div>
                                            <NavLink to="product" className={activeClass}>
                                                <span>Sản phẩm</span>
                                                {icon ? (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleDown} />
                                                ) : (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleUp} />
                                                )}
                                            </NavLink>
                                        </div>
                                    </Tippy>
                                </li>
                                <li className={cx('item')}>
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
                                            <NavLink to="support" className={activeClass}>
                                                <span>Dịch vụ</span>
                                                {icon ? (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleDown} />
                                                ) : (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleUp} />
                                                )}
                                            </NavLink>
                                        </div>
                                    </Tippy>
                                </li>
                                <li className={cx('item')}>
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
                                            <NavLink to="library" className={activeClass}>
                                                <span>Thư viện</span>
                                                {icon ? (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleDown} />
                                                ) : (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleUp} />
                                                )}
                                            </NavLink>
                                        </div>
                                    </Tippy>
                                </li>
                                <li className={cx('item')}>
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
                                            <NavLink to="news" className={activeClass}>
                                                <span>Tin tức</span>
                                                {icon ? (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleDown} />
                                                ) : (
                                                    <FontAwesomeIcon className={cx('down-icon')} icon={faAngleUp} />
                                                )}
                                            </NavLink>
                                        </div>
                                    </Tippy>
                                </li>
                                <li className={cx('item')}>
                                    <div>
                                        <NavLink to="contact" className={activeClass}>
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
                            <div className={cx('search')} onClick={() => setToggleCart(true)}>
                                <FontAwesomeIcon className={cx('icon')} icon={faBagShopping} />
                                <div className={cx('count')}>{productDataCart.length}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;
