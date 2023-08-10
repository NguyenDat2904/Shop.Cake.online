import styles from './Navigation.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartPlus,
    faCartShopping,
    faGear,
    faHouse,
    faLock,
    faRightToBracket,
    faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';

const cx = classnames.bind(styles);
function Navigation({ setIsLoggedIn, setIsAdmin }) {
    const { toggleNavigation, setIsLoading } = useContext(AppContext);
    const handleLogout = () => {
        setIsLoading(true);
        setIsLoggedIn(false);
        setIsAdmin(true);
        localStorage.clear();
    };
    const activeClass = (params) => {
        return params.isActive ? cx('active-click') : '';
    };
    return (
        <div className={cx('navigation', toggleNavigation ? 'active' : '')}>
            <ul>
                <li>
                    <NavLink to="/admin/dashboard" className={cx('link-logo')} onClick={() => setIsLoading(true)}>
                        <div className={cx('a-logo', toggleNavigation ? 'active' : '')}>
                            <img
                                src={'https://demo037126.web30s.vn/datafiles/38469/upload/files/logo.png?t=1668483951'}
                                alt=""
                            />
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/dashboard" className={activeClass} onClick={() => setIsLoading(true)}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faHouse} />
                        </span>
                        <span className={cx('title')}>Tổng quan</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/customer" className={activeClass} onClick={() => setIsLoading(true)}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faUserGroup} />
                        </span>
                        <span className={cx('title')}>Khách hàng</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/product" className={activeClass} onClick={() => setIsLoading(true)}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </span>
                        <span className={cx('title')}>Sản phẩm</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/order" className={activeClass} onClick={() => setIsLoading(true)}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faCartPlus} />
                        </span>
                        <span className={cx('title')}>Đơn hàng</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/setting" className={activeClass} onClick={() => setIsLoading(true)}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faGear} />
                        </span>
                        <span className={cx('title')}>Cài đặt</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/password" className={activeClass} onClick={() => setIsLoading(true)}>
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faLock} />
                        </span>
                        <span className={cx('title')}>Mật khẩu</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink onClick={handleLogout} to="/login">
                        <span className={cx('icon')}>
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </span>
                        <span className={cx('title')}>Đăng xuất</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;
