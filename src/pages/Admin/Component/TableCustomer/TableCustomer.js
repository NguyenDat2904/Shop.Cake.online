import { Fragment, useEffect, useState } from 'react';
import styles from './TableCustomer.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faTrash } from '@fortawesome/free-solid-svg-icons';
import { formatCurrencyVND } from '~/component/NumberToPrice/currency';

const cx = classnames.bind(styles);

function TableCustomer({ header, customer, product, dashboard, dataUser, handleRemoveUser, handleRemoveProduct }) {
    const renderUser = dataUser?.map((user, index) => {
        const totalPrice = formatCurrencyVND(user.price);
        const totalDiscount = formatCurrencyVND(user.cost);
        return (
            <tr key={user.id}>
                {(customer || product) && <td>{index + 1}</td>}
                <td width="60px">
                    <div className={cx('imgBx')}>
                        <img
                            src={
                                user.img === undefined
                                    ? 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/9-anh-dai-dien-trang-inkythuatso-03-15-27-03.jpg'
                                    : user.img
                            }
                        />
                    </div>
                </td>
                <td>
                    <h4 className={cx('name')}>{user.name}</h4>
                </td>
                {(customer || dashboard) && (
                    <td>
                        <h4 className={cx('phone')}>{user.phone}</h4>
                    </td>
                )}
                {product && (
                    <td>
                        <h4 className={cx('')}>{user.size}</h4>
                    </td>
                )}
                {product && (
                    <td>
                        <h4 className={cx('')}>{user.type}</h4>
                    </td>
                )}
                {product && (
                    <td>
                        <h4 className={cx('')}>{user.color}</h4>
                    </td>
                )}
                {product && (
                    <td>
                        <h4 className={cx('')}>{totalDiscount}</h4>
                    </td>
                )}
                {product && (
                    <td className={cx('address-text')}>
                        <h4 className={cx('address', 'price')}>{totalPrice}</h4>
                    </td>
                )}
                {customer && (
                    <td>
                        <h4 className={cx('email')}>{user.email}</h4>
                    </td>
                )}
                {(customer || dashboard) && (
                    <td className={cx('address-text')}>
                        <h4 className={cx('address')}>{user.address}</h4>
                    </td>
                )}
                {customer && (
                    <td className={cx('delete-icon')} onClick={() => handleRemoveUser(user.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </td>
                )}
                {product && (
                    <td className={cx('delete-icon')} onClick={() => handleRemoveProduct(user.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </td>
                )}
            </tr>
        );
    });
    const renderHeader = header.map((item, index) => {
        return (
            <Fragment key={index}>
                <td>
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
    return (
        <table>
            <thead>
                <tr>{renderHeader}</tr>
            </thead>
            <tbody>{renderUser}</tbody>
        </table>
    );
}

export default TableCustomer;
