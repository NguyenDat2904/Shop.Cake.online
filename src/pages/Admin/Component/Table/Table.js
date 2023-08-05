import React from 'react';
import styles from './Table.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function Table() {
    return (
        <table>
            <thead>
                <tr>
                    <td>Tên sản phẩm</td>
                    <td>Tổng tiền</td>
                    <td>Phương thức thanh toán</td>
                    <td>Trạng thái</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                        <span className={cx('status delivered')}>Delivered</span>
                    </td>
                </tr>
                <tr>
                    <td>Dell Laptop</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>
                        <span className={cx('status pending')}>Pending</span>
                    </td>
                </tr>
                <tr>
                    <td>Apple Watch</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                        <span className={cx('status return')}>Return</span>
                    </td>
                </tr>
                <tr>
                    <td>Addidas Shoes</td>
                    <td>$620</td>
                    <td>Due</td>
                    <td>
                        <span className={cx('status inProgress')}>In Progress</span>
                    </td>
                </tr>
                <tr>
                    <td>Star Refrigerator</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                        <span className={cx('status delivered')}>Delivered</span>
                    </td>
                </tr>
                <tr>
                    <td>Dell Laptop</td>
                    <td>$110</td>
                    <td>Due</td>
                    <td>
                        <span className={cx('status pending')}>Pending</span>
                    </td>
                </tr>
                <tr>
                    <td>Apple Watch</td>
                    <td>$1200</td>
                    <td>Paid</td>
                    <td>
                        <span className={cx('status return')}>Return</span>
                    </td>
                </tr>
                <tr>
                    <td>Addidas Shoes</td>
                    <td>$620</td>
                    <td>Due</td>
                    <td>
                        <span className={cx('status inProgress')}>In Progress</span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;
