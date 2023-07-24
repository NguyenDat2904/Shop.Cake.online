import React from 'react';
import { Form } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function Contact() {
    return <div className={cx('contact')}>
    <div className={cx('Hop')}>
        <div className={cx('contact-box')}>
            <div className={cx('contact-left')}>
                <h3>Thông tin liên hệ</h3>
                <hr className={cx('line')}></hr>
                <p>Với mục tiêu trở thành điểm lựa chọn tin cậy, duy nhất và tốt nhất về dòng bánh kem cao cấp, chúng tôi cam kết mang đến cho khách hàng những dịch vụ gia tăng hoàn hảo với thái dộ phục vụ tốt nhất theo đúng thông điệp mà chúng tôi muốn gửi đến khách hàng.</p>
            <p className="contact-body"> <FontAwesomeIcon icon={faLocationDot} classname="icon"/>  344 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, Tp. Hồ Chí Minh</p>
            <p  className="contact-body"> <FontAwesomeIcon icon={faEnvelope} classname="icon"/>  1900 9477</p>
             <p  className="contact-body"> <FontAwesomeIcon icon={faMobile} classname="icon"/>  admin@demo037126.web30s.vn</p>
            </div>
            <div className={cx('contact-right')}>
                <form>
                <input type="text" placeholder="Họ và tên"></input><br/>
                <input className="required"  type="text" placeholder="Email"></input><br/>
                <input className="required" type="text" placeholder="Số điện thoại"></input><br/>
                <textarea placeholder="Nội dung"></textarea>
                <input type="text" placeholder="Mã bảo mật"></input><br/>
                <input className={cx('button')} type="button" Value="Gửi liên hệ"></input><br/>
                </form>
            </div>
        </div>
        </div>







    </div>;
}

export default Contact;
