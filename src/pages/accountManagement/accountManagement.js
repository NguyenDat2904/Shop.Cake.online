import Profile from './profile/profile';
import classNames from 'classnames/bind';
import styles from './accountManagement.module.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';

const cx = classNames.bind(styles);
const AccountManagement = () => {
    const { filterData } = useContext(AppContext);

    return (
        <>
            <div className={cx('accountManagement')}>
                <div className={cx('textAccountManagement')}>
                    <h2>THÔNG TIN CÁ NHÂN</h2>
                    <div className={cx('linkAccountManagement')}>
                        <Link to={'/'}>
                            <h4>Trang chủ</h4>{' '}
                        </Link>
                        <h5>/thông tin cá nhân</h5>
                    </div>
                </div>
            </div>
            {filterData.map((product) => {
                return (
                    <div key={product.id}>
                        <Profile
                            img={product.img}
                            user={product.user}
                            password={product.password}
                            role={product.role}
                            id={product.id}
                            name={product.name}
                            email={product.email}
                            phone={product.phone}
                            address={product.address}
                        />
                    </div>
                );
            })}
        </>
    );
};
export default AccountManagement;
