import React, { Fragment, useContext, useState } from 'react';
import styles from './Table.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { formatCurrencyVND } from '~/component/NumberToPrice/currency';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
function Table({ header, dataOrders, orders }) {
    // const { classStatus, setClassStatus } = useContext(AppContext);

    const renderHeader = header.map((item, index) => {
        return (
            <Fragment key={index}>
                <td className={cx('text-center')}>
                    {item.title}
                    {item.sort && (
                        <div className={cx('sort-icon')} onClick={item.handleSort}>
                            <FontAwesomeIcon icon={faSort} />
                        </div>
                    )}
                </td>
            </Fragment>
        );
    });
    const renderListOrder = dataOrders?.map((order, index) => {
        console.log(order.deliveryMethod);
        const formatPrice = formatCurrencyVND(order.formattedTotal);
        let classStatus;
        if (order.deliveryMethod === 'Đã nhận hàng') {
            classStatus = 'delivered';
        } else if (order.deliveryMethod === 'Đang đóng hàng') {
            classStatus = 'inProgress';
        } else if (order.deliveryMethod === 'Đang vận chuyển') {
            classStatus = 'pending';
        } else if (order.deliveryMethod === 'Hoàn hàng') {
            classStatus = 'return';
        }
        return (
            <tr key={index}>
                {orders && <td>{index + 1}</td>}
                <td className={cx('name-receive')}>{order.nameReceive}</td>
                {
                    <td width="60px">
                        {order.product.map((product, index) => (
                            <div key={index} className={cx('imgBx')}>
                                <img src={product.img} />
                            </div>
                        ))}
                    </td>
                }
                {
                    <td className={cx('text-center')}>
                        {order.product.map((product, index) => (
                            <div key={index} className={cx('name-product')}>
                                {product.name}
                            </div>
                        ))}
                    </td>
                }
                <td className={cx('quantity-product')}>
                    {order.product.map((product, index) => (
                        <div key={index} className={cx('name-product')}>
                            {product.quantity}
                        </div>
                    ))}
                </td>
                {orders && <td className={cx('text-center')}>{order.payIn}</td>}
                {orders && (
                    <td className={cx('text-center')}>
                        <span className={cx(classStatus)}>{order.deliveryMethod}</span>
                    </td>
                )}
                {orders && <td className={cx('text-center')}>{order.phoneReceive}</td>}
                {orders && (
                    <td className={cx('text-center', 'address')}>
                        {order.ward} - {order.district} - {order.province}
                    </td>
                )}
                <td className={cx('money')}>{formatPrice}</td>
            </tr>
        );
    });
    return (
        <table className={cx('wrapper')}>
            <thead>
                <tr>{renderHeader}</tr>
            </thead>
            <tbody>{renderListOrder}</tbody>
        </table>
    );
}

export default Table;
