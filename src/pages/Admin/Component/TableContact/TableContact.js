import { Fragment, useEffect, useState } from 'react';
import styles from './TableContact.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faTrash } from '@fortawesome/free-solid-svg-icons';
import { formatCurrencyVND } from '~/component/NumberToPrice/currency';

const cx = classnames.bind(styles);

function TableContact({ contact, header }) {
    const renderUser = contact?.map((user, index) => {
        return (
            <tr key={user.id}>
                {<td>{index + 1}</td>}
                <td>
                    <h4 className={cx('name')}>{user.nameContact}</h4>
                </td>
                <td>
                    <h4 className={cx('phone')}>{user.phoneContact}</h4>
                </td>

                <td>
                    <h4 className={cx('phone')}>{user.emailContact}</h4>
                </td>

                <td>
                    <h4 className={cx('')}>{user.contenContact}</h4>
                </td>
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
        <table className={cx('wrapper')}>
            <thead>
                <tr>{renderHeader}</tr>
            </thead>
            <tbody>{renderUser}</tbody>
        </table>
    );
}

export default TableContact;
