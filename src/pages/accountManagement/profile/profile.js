import { Routes, Route, NavLink } from 'react-router-dom';
import { AccountInformation } from './accountInformation/accountInformation';
import { ChangePassword } from './changePassword/changePassword';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { faFile, faEye, faHeart, faPenToSquare, faKey } from '@fortawesome/free-solid-svg-icons';
import YourOrder from './yourOrder/yourOrder';
import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { YourFavourite } from './yourFavourite/yourFavourite';
import { YourSee } from './yourSee/yourSee';
import { AppContext } from '~/hook/context';

const cx = classNames.bind(styles);
const Profile = (prop) => {
    const { info, toggle, order } = prop;
    const { setIsLoading } = useContext(AppContext);

    const hendleUserOrder = () => {};
    const hendleUserSeeLook = () => {};
    const hendleUserFavouriteLinks = () => {};
    const activeClass = (params) => {
        return params.isActive ? cx('profile-active') : '';
    };
    return (
        <div className={cx('profile')}>
            <div className={cx('leftProfile')}>
                <div className={cx('infor-user')}>
                    <div className={cx('img')}>
                        <img
                            src={
                                info?.img === undefined
                                    ? 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg'
                                    : info?.img
                            }
                            alt=""
                        />
                    </div>
                    <div className={cx('nameProfile')}>
                        <h4>{info?.name}</h4>
                        <p>Chỉnh sửa tài khoản</p>
                    </div>
                </div>
                <h3>QUẢN LÝ GIAO DỊCH</h3>
                <NavLink to={'/profile'} className={activeClass} onClick={() => setIsLoading(true)}>
                    <div className={cx('profileIcon')} onClick={hendleUserOrder}>
                        <FontAwesomeIcon icon={faFile} />
                        Đơn hàng của bạn
                    </div>
                </NavLink>
                <NavLink to={'/profile/yoursees'} className={activeClass} onClick={() => setIsLoading(true)}>
                    <div className={cx('profileIcon')} onClick={hendleUserSeeLook}>
                        <FontAwesomeIcon icon={faEye} />
                        Sản phẩm đã xem
                    </div>
                </NavLink>
                <NavLink to={'/profile/yourfavourite'} className={activeClass} onClick={() => setIsLoading(true)}>
                    <div className={cx('profileIcon')} onClick={hendleUserFavouriteLinks}>
                        <FontAwesomeIcon icon={faHeart} />
                        Danh sách yêu thích
                    </div>
                </NavLink>

                <h3>QUẢN LÝ TÀI KHOẢN</h3>
                <NavLink to={'/profile/accountInformation'} className={activeClass} onClick={() => setIsLoading(true)}>
                    <div className={cx('profileIcon')}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        Thông tin tài khoản
                    </div>
                </NavLink>
                <NavLink to={'/profile/hangePassword'} className={activeClass} onClick={() => setIsLoading(true)}>
                    <div className={cx('profileIcon')}>
                        <FontAwesomeIcon icon={faKey} />
                        Đổi mật khẩu
                    </div>
                </NavLink>
            </div>
            <div className={cx('rightProfile')}>
                <h5>Quản lý giao dịch</h5>
                <Routes>
                    <Route path="/accountInformation" element={<AccountInformation info={info} />} />
                    <Route path="/hangePassword" element={<ChangePassword info={info} />} />
                    <Route path="/" element={<YourOrder order={order} />} />
                    <Route path="/yoursees" element={<YourSee />} />
                    <Route path="/yourfavourite" element={<YourFavourite toggle={toggle} />} />
                </Routes>
            </div>
        </div>
    );
};
export default Profile;
