import Profile from './profile/profile';
import classNames from 'classnames/bind';
import styles from './accountManagement.module.scss';
import { useContext, useEffect } from 'react';
import { AppContext } from '~/hook/context';
import Banner from '~/component/Banner/Banner';
import { useNavigate } from 'react-router-dom';
import * as order from '../../services/ordersService';

const cx = classNames.bind(styles);
const AccountManagement = ({ toggle }) => {
    const { userInfos, userDetail, orderUser, setOrderUser } = useContext(AppContext);
    const userInfo = JSON.parse(userInfos);
    useEffect(() => {
        const fetchOrder = async () => {
            const getOrderUser = await order.getOrderUser(userInfo._id, userInfo.refreshToken, userInfo.accessToken);
            setOrderUser(getOrderUser.data);
        };
        fetchOrder();
    }, []);
    useEffect(() => {
        setOrderUser(orderUser);
    }, [orderUser]);
    const navigate = useNavigate();
    if (userInfos === null) {
        navigate('/login');
    } else {
        return (
            <>
                <Banner page="Thông tin cá nhân" title="Thông tin cá nhân" />
                <div className={cx('wrapper')}>
                    <Profile info={userDetail} toggle={toggle} order={orderUser} />
                </div>
            </>
        );
    }
};
export default AccountManagement;
