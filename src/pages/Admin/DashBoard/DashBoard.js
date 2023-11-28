import styles from './DashBoard.module.scss';
import classnames from 'classnames/bind';
import Table from '../Component/Table/Table';
import { NavLink } from 'react-router-dom';
import TableCustomer from '../Component/TableCustomer/TableCustomer';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '~/hook/context';
import * as getUser from '~/services/userService';
import * as getOrder from '~/services/ordersService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartShopping, faMoneyBills, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { formatCurrencyVND } from '~/component/NumberToPrice/currency';
import { convertNumberToShortText } from '~/component/NumberToText/NumberToText';

const cx = classnames.bind(styles);

function DashBoard() {
    const { toggleNavigation, dataProduct, setIsLoading, dataUser, setDataUser, userInfos, orderAll, setOrderAll } =
        useContext(AppContext);

    const [isSorted, setIsSorted] = useState(false);
    const [originalDataUser, setOriginalDataUser] = useState([]);
    const userInfo = JSON.parse(userInfos);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await getUser.getUserAll(userInfo.refreshToken, userInfo.accessToken, 1000);
            const order = await getOrder.getOrder(userInfo.refreshToken, userInfo.accessToken, 1000);
            if (result.status === 200) {
                setDataUser(result.data);
                setOriginalDataUser(result.data);
            }
            if (order.status === 200) {
                setOrderAll(order.data);
            }
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

    const totalPrice = orderAll.orders?.reduce((acc, total) => acc + +total.formattedTotal, 0);
    console.log(totalPrice);

    return (
        <div className={cx('main', toggleNavigation ? 'active' : '')}>
            {/* {/* ======================= Cards ================== */}
            <div className={cx('cardBox')}>
                <NavLink to={'/admin/customer'} onClick={() => setIsLoading(true)}>
                    <div className={cx('card')}>
                        <div>
                            <div className={cx('numbers')}>{dataUser.length}</div>
                            <div className={cx('cardName')}>Khách hàng</div>
                        </div>
                        <div className={cx('iconBx')}>
                            <FontAwesomeIcon icon={faUserGroup} />
                        </div>
                    </div>
                </NavLink>
                <NavLink to={'/admin/product'} onClick={() => setIsLoading(true)}>
                    <div className={cx('card')}>
                        <div>
                            <div className={cx('numbers')}>{dataProduct.length}</div>
                            <div className={cx('cardName')}>Đơn hàng</div>
                        </div>
                        <div className={cx('iconBx')}>
                            <FontAwesomeIcon icon={faBoxOpen} />
                        </div>
                    </div>
                </NavLink>
                <NavLink to={'/admin/order'} onClick={() => setIsLoading(true)}>
                    <div className={cx('card')}>
                        <div>
                            <div className={cx('numbers')}>{orderAll?.totalOrder}</div>
                            <div className={cx('cardName')}>Đơn hàng</div>
                        </div>
                        <div className={cx('iconBx')}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </div>
                    </div>
                </NavLink>
                <div className={cx('card', 'cart-total')}>
                    <div>
                        <div className={cx('numbers')}>{convertNumberToShortText(totalPrice)}</div>
                        <div className={cx('cardName')}>Doanh thu</div>
                    </div>
                    <div className={cx('iconBx')}>
                        <FontAwesomeIcon icon={faMoneyBills} />
                    </div>
                </div>
            </div>
            {/* Order Details List */}
            <div className={cx('details')}>
                <div className={cx('recentOrders')}>
                    <div className={cx('cardHeader')}>
                        <h2>Những đơn đặt hàng</h2>
                        <NavLink to="/admin/order" className={cx('btn')} onClick={() => setIsLoading(true)}>
                            Xem tất cả
                        </NavLink>
                    </div>
                    <Table
                        header={[
                            { title: 'Người nhận', sort: true, handleSort: handleSortName },
                            { title: 'Ảnh' },
                            { title: 'Sản phẩm' },
                            { title: 'Số lượng' },
                            { title: 'Thanh toán' },
                        ]}
                    />
                </div>
                {/* ================= New Customers ================ */}
                <div className={cx('recentCustomers')}>
                    <div className={cx('cardHeader')}>
                        <h2>Khách hàng gần đây</h2>
                        <NavLink to="/admin/customer" className={cx('btn')} onClick={() => setIsLoading(true)}>
                            Xem tất cả
                        </NavLink>
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
