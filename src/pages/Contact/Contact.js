import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import Banner from '~/component/Banner/Banner';
import * as cTact from '~/services/registerService';
import styles from './Contact.module.scss';
import classnames from 'classnames/bind';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
function Contact({ toggle }) {
    const { capChaContact, reFeshCapChaContact } = useContext(AppContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');
    const [capcha, setCapcha] = useState('');

    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
    };
    const handleText = (e) => {
        setText(e.target.value);
    };
    const handleCapcha = (e) => {
        setCapcha(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await cTact.postContact(name, email, phone, text);
        setName('');
        setEmail('');
        setPhone('');
        setText('');
        setCapcha('');
        toggle(12);
    };
    return (
        <div className={cx('contact')}>
            <Banner page="Liên hệ" title="Liên hệ" />
            <div className="container">
                <div className={cx('contact-box')}>
                    <div className={cx('contact-left')}>
                        <h3 className={cx('title-contact')}>Thông tin liên hệ</h3>
                        <p className={cx('content-contact')}>
                            Với mục tiêu trở thành điểm lựa chọn tin cậy, duy nhất và tốt nhất về dòng bánh kem cao cấp,
                            chúng tôi cam kết mang đến cho khách hàng những dịch vụ gia tăng hoàn hảo với thái dộ phục
                            vụ tốt nhất theo đúng thông điệp mà chúng tôi muốn gửi đến khách hàng.
                        </p>
                        <p className={cx('contact-body')}>
                            <FontAwesomeIcon icon={faLocationDot} className={cx('icon')} /> 344 Huỳnh Tấn Phát, Phường
                            Bình Thuận, Quận 7, Tp. Hồ Chí Minh
                        </p>
                        <p className={cx('contact-body')}>
                            <FontAwesomeIcon icon={faMobile} className={cx('icon')} /> 1900 9477
                        </p>
                        <p className={cx('contact-body')}>
                            <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                            admin@demo037126.web30s.vn
                        </p>
                    </div>
                    <div className={cx('contact-right')}>
                        <form onSubmit={handleSubmit}>
                            <div className={cx('input-contact')}>
                                <input type="text" placeholder="Họ và tên" value={name} onChange={handleName}></input>
                            </div>
                            <div className={cx('input-contact')}>
                                <input type="text" placeholder="Email" value={email} onChange={handleEmail}></input>
                            </div>
                            <div className={cx('input-contact')}>
                                <input
                                    type="text"
                                    placeholder="Số điện thoại"
                                    value={phone}
                                    onChange={handlePhone}
                                ></input>
                            </div>
                            <div className={cx('textarea-contact')}>
                                <textarea rows="5" placeholder="Nội dung" value={text} onChange={handleText}></textarea>
                            </div>
                            <div className={cx('input-contact')}>
                                <input
                                    type="text"
                                    placeholder="Mã bảo mật"
                                    value={capcha}
                                    onChange={handleCapcha}
                                ></input>
                                <div className={cx('capcha-contact')}>{capChaContact}</div>
                                <div className={cx('btn-contact')} onClick={reFeshCapChaContact}>
                                    <FontAwesomeIcon icon={faRepeat} />
                                </div>
                            </div>
                            <button className={cx('button-contact')} type="submit">
                                GỬI LIÊN HỆ
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
