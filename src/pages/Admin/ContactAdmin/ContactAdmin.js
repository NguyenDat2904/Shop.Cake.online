import React, { useContext, useEffect, useState } from 'react';
import styles from './ContactAdmin.module.scss';
import classnames from 'classnames/bind';
import * as postContact from '~/services/registerService';
import { AppContext } from '~/hook/context';
import TableCustomer from '../Component/TableCustomer/TableCustomer';
import TableContact from '../Component/TableContact/TableContact';

const cx = classnames.bind(styles);
function ContactAdmin({ toggle }) {
    const { toggleNavigation } = useContext(AppContext);
    const [contact, getContact] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
            const result = await postContact.getContact();
            getContact(result);
        };
        fetchAPI();
    }, []);
    return (
        <div className={cx('main', toggleNavigation ? 'active' : '')}>
            <div className={cx('wrapper')}>
                <TableContact
                    header={[
                        { title: 'STT' },
                        { title: 'Họ và tên', sort: true },
                        { title: 'Số điện thoại' },
                        { title: 'Email' },
                        { title: 'Nội dung' },
                    ]}
                    contact={contact}
                    customer
                />
            </div>
        </div>
    );
}

export default ContactAdmin;
