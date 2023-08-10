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
import IsLoading from '../IsLoading/IsLoading';
import NavBarProduct from './NavBarProduct/NavBarProduct';
const cx = classnames.bind(styles);

function Header({ setIsLoggedIn }) {
    // 1. State
    const [icon] = useState(false);
    const { setToggleCart, productDataCart, isLoading, handleIsLoading } = useContext(AppContext);
    const email = localStorage.getItem('email');
    const img = localStorage.getItem('img');
    // 3. Functions
    const activeClass = (params) => {
        return params.isActive ? cx('active') : '';
    };
    // 4. Render
    return (
        <header>
            <IsLoading isLoading={isLoading} />
            <section className={cx('header', 'top')} id="smooth">
                <div className={cx('container')}>
                    <div className={cx('col', 'col-left')}>
                        <span className={cx('desc')}>HỖ TRỢ GIAO HÀNG MIỄN PHÍ TRONG VÒNG 2H</span>
                    </div>
                    <div className={cx('col', 'col-right')}>
                        <div className={cx('children')}>
                            <span className={cx('desc')}>1900 9477</span>
                            <span className={cx('user-email', 'desc')}>
                                {email ? email : 'Shopcake.online@gmail.com'}
                            </span>
                            <Tippy
                                trigger="click"
                                placement="bottom-start"
                                interactive
                                render={(attrs) => (
                                    <div className="box" tabIndex="-1" {...attrs}>
                                        <Modal>
                                            {!email ? (
                                                <Menu
                                                    handleLoading={handleIsLoading}
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
                                            ) : (
                                                <Menu
                                                    handleLoading={handleIsLoading}
                                                    text_1="Quản lý tài khoản"
                                                    text_2="So Sánh"
                                                    text_3="Yêu thích"
                                                    text_4="Đăng xuất"
                                                    link_1="profile"
                                                    link_2="compare"
                                                    link_3="like"
                                                    toggle
                                                    setIsLoggedIn={setIsLoggedIn}
                                                />
                                            )}
                                        </Modal>
                                    </div>
                                )}
                            >
                                {!email ? (
                                    <span className={cx('account', 'desc')}>Đăng nhập</span>
                                ) : (
                                    <div className={cx('account', 'desc')}>
                                        <img
                                            className={cx('img')}
                                            src={
                                                img !== 'undefined'
                                                    ? img
                                                    : 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg'
                                            }
                                            alt=""
                                        />
                                    </div>
                                )}
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
                        <NavLink to={'/'} className={cx('img-logo')} onClick={handleIsLoading}></NavLink>
                    </div>
                    <div className={cx('group')}>
                        <div className={cx('menu')}>
                            <ul className={cx('list')}>
                                <li className={cx('item')}>
                                    <div>
                                        <NavLink to={'/'} className={activeClass} onClick={handleIsLoading}>
                                            <span>Trang chủ</span>
                                        </NavLink>
                                    </div>
                                </li>
                                <li className={cx('item', activeClass)}>
                                    <div>
                                        <NavLink to={'introduce'} className={activeClass} onClick={handleIsLoading}>
                                            <span>Giới thiệu</span>
                                        </NavLink>
                                    </div>
                                </li>
                                <li className={cx('item', activeClass)}>
                                    <Tippy
                                        interactive
                                        placement="bottom"
                                        render={(attrs) => (
                                            <div className="box" tabIndex="-1" {...attrs}>
                                                <Modal>
                                                    <NavBarProduct />
                                                </Modal>
                                            </div>
                                        )}
                                    >
                                        <div>
                                            <NavLink to="product" className={activeClass} onClick={handleIsLoading}>
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
                                                        link_5="support/customerCare"
                                                        link_6="support/freight"
                                                        toggle
                                                    />
                                                </Modal>
                                            </div>
                                        )}
                                    >
                                        <div>
                                            <NavLink
                                                to="support/support-customerCare"
                                                className={activeClass}
                                                onClick={handleIsLoading}
                                            >
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
                                                    <Menu
                                                        link_5="library/libraryimg"
                                                        link_6="library/libraryvideo"
                                                        text_1="HÌNH ẢNH"
                                                        text_2="VIDEO"
                                                        icon
                                                    />
                                                </Modal>
                                            </div>
                                        )}
                                    >
                                        <div>
                                            <NavLink
                                                to="library/libraryimg"
                                                className={activeClass}
                                                onClick={handleIsLoading}
                                            >
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
                                            <NavLink to="news" className={activeClass} onClick={handleIsLoading}>
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
                                        <NavLink to="contact" className={activeClass} onClick={handleIsLoading}>
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
