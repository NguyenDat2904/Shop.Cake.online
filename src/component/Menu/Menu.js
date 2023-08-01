import styles from './Menu.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import Modal from '../Header/Modal/Modal';
import { NavLink } from 'react-router-dom';

const cx = classnames.bind(styles);
function Menu({ text_1, text_2, text_3, text_4, icon, toggle, link_1, link_2, link_3, link_4, handleLoading }) {
    const [hoveredMenu, setHoveredMenu] = useState(null);
    const visibleValue = toggle ? false : undefined;

    const tippyProps = {
        visible: visibleValue,
    };
    const handleMenuMouseOver = (index) => {
        setHoveredMenu(index);
    };

    const handleMenuMouseOut = () => {
        setHoveredMenu(null);
    };
    const handleLogout = () => {
        if (text_4 === 'Đăng xuất') {
            localStorage.clear();
        }
    };
    return (
        <div className={cx('wrapper')}>
            <ul className={cx('list')}>
                <NavLink to={link_1} onClick={handleLoading}>
                    <Tippy
                        {...tippyProps}
                        placement="left-start"
                        interactive
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <Modal>
                                    <ul className={cx('list')}>
                                        <li className={cx('item')}>
                                            <span className={cx('text')}>Thức uống ưa chuộng</span>
                                        </li>
                                        <li className={cx('item')}>
                                            <span className={cx('text')}>Album bánh ngọt nổi tiếng</span>
                                        </li>
                                        <li className={cx('item')}>
                                            <span className={cx('text')}>Mẫu bánh ngọt</span>
                                        </li>
                                    </ul>
                                </Modal>
                            </div>
                        )}
                    >
                        <li
                            className={cx('item')}
                            onMouseOver={() => handleMenuMouseOver(1)}
                            onMouseOut={handleMenuMouseOut}
                        >
                            {icon ? (
                                <>
                                    {hoveredMenu === 1 ? (
                                        <FontAwesomeIcon className={cx('icon')} icon={faAngleLeft} />
                                    ) : (
                                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                                    )}
                                </>
                            ) : (
                                ''
                            )}
                            <span className={cx('text')}>{text_1}</span>
                        </li>
                    </Tippy>
                </NavLink>
                <NavLink to={link_2} onClick={handleLoading}>
                    <Tippy
                        {...tippyProps}
                        placement="left-start"
                        interactive
                        render={(attrs) => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <Modal>
                                    <ul className={cx('list')}>
                                        <li className={cx('item')}>
                                            <span className={cx('text')}>Cửa hàng bánh ngọt</span>
                                        </li>
                                        <li className={cx('item')}>
                                            <span className={cx('text')}>Hướng dẫn làm bánh ngọt</span>
                                        </li>
                                    </ul>
                                </Modal>
                            </div>
                        )}
                    >
                        <li
                            className={cx('item')}
                            onMouseOver={() => handleMenuMouseOver(2)}
                            onMouseOut={handleMenuMouseOut}
                        >
                            {icon ? (
                                <>
                                    {hoveredMenu === 2 ? (
                                        <FontAwesomeIcon className={cx('icon')} icon={faAngleLeft} />
                                    ) : (
                                        <FontAwesomeIcon className={cx('icon')} icon={faAngleRight} />
                                    )}
                                </>
                            ) : (
                                ''
                            )}
                            <span className={cx('text')}>{text_2}</span>
                        </li>
                    </Tippy>
                </NavLink>
                <NavLink to={link_3} onClick={handleLoading}>
                    <li className={cx('item')}>
                        <span className={cx('text')}>{text_3}</span>
                    </li>
                </NavLink>
                <NavLink to={link_4} onClick={handleLoading}>
                    <li className={cx('item')}>
                        <span className={cx('text')} onClick={handleLogout}>
                            {text_4}
                        </span>
                    </li>
                </NavLink>
            </ul>
        </div>
    );
}

export default Menu;
