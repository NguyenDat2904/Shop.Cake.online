import Profile from './profile/profile';
import classNames from 'classnames/bind';
import styles from './accountManagement.module.scss';
import { useContext, useEffect } from 'react';
import { AppContext } from '~/hook/context';
import Banner from '~/component/Banner/Banner';

const cx = classNames.bind(styles);
const AccountManagement = ({ toggle }) => {
    const { filterData, setUserData } = useContext(AppContext);
    useEffect(() => {
        localStorage.setItem('profile', JSON.stringify(filterData));
    }, [filterData]);
    useEffect(() => {
        // Lấy dữ liệu từ localStorage khi component được tải
        const storedData = JSON.parse(localStorage.getItem('profile'));
        if (storedData) {
            setUserData(storedData);
        }
    }, []);
    return (
        <>
            <Banner page="Thông tin cá nhân" title="Thông tin cá nhân" />
            {filterData.map((product) => {
                return (
                    <div key={product.id} className={cx('wrapper')}>
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
                            toggle={toggle}
                        />
                    </div>
                );
            })}
        </>
    );
};
export default AccountManagement;
