import { Routes, Route } from 'react-router-dom';
import { AccountInformation } from './accountInformation/accountInformation';
import { ChangePassword } from './changePassword/changePassword';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { faFile, faEye, faHeart, faPenToSquare, faKey } from '@fortawesome/free-solid-svg-icons';
import YourOrder from './yourOrder/yourOrder';
import classNames from 'classnames/bind';
import styles from './profile.module.scss';
import { YourFavourite } from './yourFavourite/yourFavourite';
import { YourSee } from './yourSee/yourSee';
import { AppContext } from '~/hook/context';

const cx = classNames.bind(styles);
const Profile = (prop) => {
    const { name, email, phone, address, id, password } = prop;
    const [fullName, setFullName] = useState(name);
    const [fileProfile, setFileProfile] = useState(true);
    const { userOrder, getLook, getLikes } = useContext(AppContext);

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

    return (
        <div className={cx('profile')}>
            <div className={cx('leftProfile')}>
                <div className={cx('nameProfile')}>
                    <h4>{fullName}</h4>
                    <p>Chỉnh sửa tài khoản</p>
                </div>

                <h3>QUẢN LÝ GIAO DỊCH</h3>
                <Link to={'yourorder'}>
                    <div className={cx('profileIcon')}>
                        <FontAwesomeIcon icon={faFile} />
                        <h4 onClick={hendleUserOrder}>Đơn hàng của bạn</h4>
                    </div>
                </Link>
                <Link to={'yoursees'}>
                    <div className={cx('profileIcon')}>
                        <FontAwesomeIcon icon={faEye} />
                        <h4 onClick={hendleUserSeeLook}>Sản phẩm đã xem </h4>
                    </div>
                </Link>
                <Link to={'yourfavourite'}>
                    <div className={cx('profileIcon')}>
                        <FontAwesomeIcon icon={faHeart} />
                        <h4 onClick={hendleUserFavouriteLinks}>Danh sách yêu thích</h4>
                    </div>
                </Link>

                <h3>QUẢN LÝ TÀI KHOẢN</h3>
                <Link to={'accountInformation'}>
                    <div className={cx('profileIcon')}>
                        <FontAwesomeIcon icon={faPenToSquare} />
                        <h4 onClick={hendleAccountInformation}>Thông tin tài khoản</h4>
                    </div>
                </Link>
                <Link to={'hangePassword'}>
                    <div className={cx('profileIcon')}>
                        <FontAwesomeIcon icon={faKey} />
                        <h4 onClick={hendleAccountInformation}>Đổi mật khẩu</h4>
                    </div>
                </Link>
            </div>
            <div className={cx('rightProfile')}>
                <h5>Quản lý giao dịch</h5>
                <h6>{compare}</h6>
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
                    <Route path="/yourfavourite" element={<YourFavourite />} />
                </Routes>
            </div>
        </div>
    );
};
export default Profile;
