import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import Banner from '~/component/Banner/Banner';
import { useState, useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import * as cTact from '~/services/registerService';
import styles from './Contact.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);
function Contact() {
    const navigate = useNavigate();
    //State
    const [nameContact, SetNameContact] = useState('');
    const [nameContactE, SetNameContactE] = useState('');

    const [emailContact, SetEmailContact] = useState('');
    const [emailContactE, SetEmailContactE] = useState('');

    const [phoneContact, SetPhoneContact] = useState('');
    const [phoneContactE, SetPhoneContactE] = useState('');

    const [contenContact, setContenContact] = useState('');
    const [contenContactE, setContenContactE] = useState('');

    const [cipherContact, setCipherContact] = useState('');
    const [cipherContactE, setCipherContactE] = useState('');
    const onChangeName = (e) => {
        SetNameContact(e.target.value);
    };
    const onChangeEmail = (e) => {
        SetEmailContact(e.target.value);
    };
    const onChangePhone = (e) => {
        SetPhoneContact(e.target.value);
    };
    const onChangeConten = (e) => {
        setContenContact(e.target.value);
    };
    const onChangeCipher = (e) => {
        setCipherContact(e.target.value);
    };
    const onSubmitContact = (e) => {
        e.preventDefault();
        const regexName = /^[a-zA-Z ]+$/;
        const regexPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regexName.test(nameContact) || nameContact === '') {
            SetNameContactE('Bạn vui lòng nhập đúng họ tên và tên không dấu ');
        } else {
            SetNameContactE('');
        }
        if (!regexEmail.test(emailContact) || emailContact === '') {
            SetEmailContactE('Bạn vui lòng nhập đúng Email');
        } else {
            SetEmailContactE('');
        }
        if (!regexPhone.test(phoneContact) || phoneContact === '') {
            SetPhoneContactE('Bạn vui lòng nhập đúng số điện thoại ');
        } else {
            SetPhoneContactE('');
        }
        if (contenContact === '') {
            setContenContactE('Bạn vui lòng nhập nội dung liên hệ');
        } else {
            setContenContactE('');
        }
        if (
            regexName.test(nameContact) &&
            nameContact !== '' &&
            regexEmail.test(emailContact) &&
            emailContact !== '' &&
            !regexPhone.test(phoneContact) &&
            phoneContact !== '' &&
            contenContact !== ''
        ) {
            const results = cTact.postContact(nameContact, emailContact, phoneContact, contenContact);
            if (results) {
                navigate('/');
            }
        }
    };
    return (
        <div className={cx('contact')}>
            <Banner page="Liên hệ" title="Liên hệ" />
            <div className={cx('Hop')}>
                <div className={cx('contact-box')}>
                    <div className={cx('contact-left')}>
                        <h3>Thông tin liên hệ</h3>
                        <hr className={cx('line')}></hr>
                        <p>
                            Với mục tiêu trở thành điểm lựa chọn tin cậy, duy nhất và tốt nhất về dòng bánh kem cao cấp,
                            chúng tôi cam kết mang đến cho khách hàng những dịch vụ gia tăng hoàn hảo với thái dộ phục
                            vụ tốt nhất theo đúng thông điệp mà chúng tôi muốn gửi đến khách hàng.
                        </p>
                        <p className="contact-body">
                            {' '}
                            <FontAwesomeIcon icon={faLocationDot} className={cx('icon')} /> 344 Huỳnh Tấn Phát, Phường
                            Bình Thuận, Quận 7, Tp. Hồ Chí Minh
                        </p>
                        <p className="contact-body">
                            {' '}
                            <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} /> 1900 9477
                        </p>
                        <p className="contact-body">
                            {' '}
                            <FontAwesomeIcon icon={faMobile} className={cx('icon')} /> admin@demo037126.web30s.vn
                        </p>
                    </div>
                    <div className={cx('contact-right')}>
                        <form onSubmit={onSubmitContact} className={cx('contactInput')}>
                            <div className={cx('input')}>
                                <p className={cx('errorMessage')}>{nameContactE}</p>
                                <input type="text" placeholder="Họ và tên" onChange={onChangeName}></input>
                            </div>

                            <div className={cx('input')}>
                                <p className={cx('errorMessage')}>{emailContactE}</p>
                                <input type="text" placeholder="Email" onChange={onChangeEmail}></input>
                            </div>
                            <div className={cx('input')}>
                                <p className={cx('errorMessage')}>{phoneContactE}</p>
                                <input type="text" placeholder="Số điện thoại" onChange={onChangePhone}></input>
                            </div>
                            <div className={cx('input')}>
                                <p className={cx('errorMessage2')}>{contenContactE}</p>
                                <textarea rows="5" placeholder="Nội dung" onChange={onChangeConten}></textarea>
                            </div>
                            <div className={cx('input')}>
                                <p className={cx('errorMessage')}>{cipherContactE}</p>
                                <input type="text" placeholder="Mã bảo mật" onChange={onChangeCipher}></input>
                            </div>

                            <button className={cx('button')} type="submit">
                                GỬI LIÊN HỆ
                            </button>

                            <br />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
