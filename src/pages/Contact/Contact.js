import React from 'react';
import "./Contact.css";
function Contact() {
    return <div className="contact">
    <div className="Hop">
        <div className="contact-box">
            <div className="contact-left">
                <h3>Thông tin liên hệ</h3>
                <hr className="line"></hr>
                <p>Với mục tiêu trở thành điểm lựa chọn tin cậy, duy nhất và tốt nhất về dòng bánh kem cao cấp, chúng tôi cam kết mang đến cho khách hàng những dịch vụ gia tăng hoàn hảo với thái dộ phục vụ tốt nhất theo đúng thông điệp mà chúng tôi muốn gửi đến khách hàng.</p>
            <p>344 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, Tp. Hồ Chí Minh</p>
            <p>1900 9477</p>
            <p>admin@demo037126.web30s.vn</p>
            </div>
            <div class="contact-right">
                <input type="text" placeholder="Họ và tên"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Số điện thoại"></input>
                <textarea placeholder="Nội dung"></textarea>
                <input type="text" placeholder="Mã bảo mật"></input>
                <input className="button" type="button" Value="Gửi liên hệ"></input>
            </div>
        </div>
        </div>







    </div>;
}

export default Contact;
