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
    const { name, email, phone, address, id, password, img, toggle } = prop;
    const [fullName, setFullName] = useState(name);
    const [fileProfile, setFileProfile] = useState(true);
    const { userOrder, getLook, getLikes, setIsLoading } = useContext(AppContext);
    const compare = fileProfile ? 'Không có thông tin cho loại dữ liệu này ' : '';
    const hendleAccountInformation = () => {
        setFileProfile(false);
    };
    const hendleUserOrder = () => {
        if (userOrder === []) {
            setFileProfile(true);
        } else {
            setFileProfile(false);
        }
    };
    const hendleUserSeeLook = () => {
        if (getLook === []) {
            setFileProfile(true);
        } else {
            setFileProfile(false);
        }
    };
    const hendleUserFavouriteLinks = () => {
        if (getLikes === []) {
            setFileProfile(true);
        } else {
            setFileProfile(false);
        }
    };
    const activeClass = (params) => {
        return params.isActive ? cx('profile-active') : '';
    };
    return (
        <div className={cx('profile')}>
            <div className={cx('leftProfile')}>
                <div className={cx('infor-user')}>
                    <div className={cx('img')}>
                        <img src={img} alt="" />
                    </div>
                    <div className={cx('nameProfile')}>
                        <h4>{fullName}</h4>
                        <p>Chỉnh sửa tài khoản</p>
                    </div>
                </div>
                <h3>QUẢN LÝ GIAO DỊCH</h3>
                <NavLink to={'yourorder'} className={activeClass} onClick={() => setIsLoading(true)}>
                    <div className={cx('profileIcon')} onClick={hendleUserOrder}>
                        <FontAwesomeIcon icon={faFile} />
                        Đơn hàng của bạn
                    </div>
                </NavLink>
                <NavLink to={'yoursees'} className={activeClass} onClick={() => setIsLoading(true)}>
                    <div className={cx('profileIcon')} onClick={hendleUserSeeLook}>
                        <FontAwesomeIcon icon={faEye} />
                        Sản phẩm đã xem
                    </div>
                </NavLink>
                <NavLink to={'yourfavourite'} className={activeClass} onClick={() => setIsLoading(true)}>
                    <div className={cx('profileIcon')} onClick={hendleUserFavouriteLinks}>
                        <FontAwesomeIcon icon={faHeart} />
                        Danh sách yêu thích
                    </div>
                </NavLink>

                <h3>QUẢN LÝ TÀI KHOẢN</h3>
                <NavLink to={'accountInformation'} className={activeClass} onClick={() => setIsLoading(true)}>
                    <div className={cx('profileIcon')} onClick={hendleAccountInformation}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        Thông tin tài khoản
                    </div>
                </NavLink>
                <NavLink to={'hangePassword'} className={activeClass} onClick={() => setIsLoading(true)}>
                    <div className={cx('profileIcon')} onClick={hendleAccountInformation}>
                        <FontAwesomeIcon icon={faKey} />
                        Đổi mật khẩu
                    </div>
                </NavLink>
            </div>
            <div className={cx('rightProfile')}>
                <h5>Quản lý giao dịch</h5>
                {/* <h6>{compare}</h6> */}
                <Routes>
                    <Route
                        path="/accountInformation"
                        element={
                            <AccountInformation
                                name={name}
                                email={email}
                                phone={phone}
                                address={address}
                                id={id}
                                fullName={fullName}
                                setFullName={setFullName}
                            />
                        }
                    />
                    <Route path="/hangePassword" element={<ChangePassword password={password} id={id} />} />
                    <Route path="/yourorder" element={<YourOrder id={id} />} />
                    <Route path="/yoursees" element={<YourSee />} />
                    <Route path="/yourfavourite" element={<YourFavourite toggle={toggle} />} />
                </Routes>
            </div>
        </div>
    );
};
export default Profile;
