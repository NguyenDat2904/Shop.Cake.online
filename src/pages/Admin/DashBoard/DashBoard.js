import styles from './DashBoard.module.scss';
import classnames from 'classnames/bind';
import Table from '../Component/Table/Table';
import { NavLink } from 'react-router-dom';
import TableCustomer from '../Component/TableCustomer/TableCustomer';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '~/hook/context';
import * as getUser from '~/services/userService';

const cx = classnames.bind(styles);

function DashBoard() {
    const { toggleNavigation } = useContext(AppContext);
    const [dataUser, setDataUser] = useState([]);
    const [isSorted, setIsSorted] = useState(false);
    const [originalDataUser, setOriginalDataUser] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getUser.getUserAll();
            const filteredUsers = result.data.filter((user) => user.hasOwnProperty('role') && user.role !== 'admin');
            setDataUser(filteredUsers);
            setOriginalDataUser(filteredUsers);
        };
        fetchAPI();
    }, []);
    const handleSortName = () => {
        if (isSorted) {
            setDataUser(originalDataUser);
            setIsSorted(false);
        } else {
            const sortedData = [...dataUser].sort((a, b) => a.name.localeCompare(b.name));
            setDataUser(sortedData);
            setIsSorted(true);
        }
    };
    return (
        <div className={cx('main', toggleNavigation ? 'active' : '')}>
            {/* {/* ======================= Cards ================== */}
            <div className={cx('cardBox')}>
                <div className={cx('card')}>
                    <div>
                        <div className={cx('numbers')}>1,504</div>
                        <div className={cx('cardName')}>Daily Views</div>
                    </div>
                    <div className={cx('iconBx')}>
                        <ion-icon name="eye-outline" />
                    </div>
                </div>
                <div className={cx('card')}>
                    <div>
                        <div className={cx('numbers')}>80</div>
                        <div className={cx('cardName')}>Sales</div>
                    </div>
                    <div className={cx('iconBx')}>
                        <ion-icon name="cart-outline" />
                    </div>
                </div>
                <div className={cx('card')}>
                    <div>
                        <div className={cx('numbers')}>284</div>
                        <div className={cx('cardName')}>Comments</div>
                    </div>
                    <div className={cx('iconBx')}>
                        <ion-icon name="chatbubbles-outline" />
                    </div>
                </div>
                <div className={cx('card')}>
                    <div>
                        <div className={cx('numbers')}>$7,842</div>
                        <div className={cx('cardName')}>Earning</div>
                    </div>
                    <div className={cx('iconBx')}>
                        <ion-icon name="cash-outline" />
                    </div>
                </div>
            </div>
            {/* Order Details List */}
            <div className={cx('details')}>
                <div className={cx('recentOrders')}>
                    <div className={cx('cardHeader')}>
                        <h2>Những đơn đặt hàng</h2>
                        <NavLink href="#" lassName={cx('btn')}>
                            Xem tất cả
                        </NavLink>
                    </div>
                    <Table />
                </div>
                {/* ================= New Customers ================ */}
                <div className={cx('recentCustomers')}>
                    <div className={cx('cardHeader')}>
                        <h2>Khách hàng gần đây</h2>
                    </div>
                    <TableCustomer
                        header={[
                            { title: 'Ảnh' },
                            { title: 'Họ và tên', sort: true, handleSort: handleSortName },
                            { title: 'Số điện thoại' },
                            { title: 'Địa chỉ' },
                        ]}
                        dashboard
                        dataUser={dataUser}
                    />
                </div>
            </div>
        </div>
    );
}

export default DashBoard;
