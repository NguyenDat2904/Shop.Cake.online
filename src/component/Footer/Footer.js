import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faMobile, faEnvelope, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('foorterService')}>
                <div className={cx('servicePartial')}>
                    <div className={cx('servicePartialImg')}>
                        <img
                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/icon-1-01.png"
                            alt=""
                        />
                    </div>

                    <div>
                        <h2>Miễn phí giao hàng </h2>
                        <h4>Với đơn hàng từ 500k</h4>
                    </div>
                </div>

                <div className={cx('servicePartial')}>
                    <div className={cx('servicePartialImg')}>
                        <img
                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/icon-2-01-01.png"
                            alt=""
                        />
                    </div>

                    <div>
                        <h2>Thanh toán đa dạng </h2>
                        <h4>Ví Momo, ZaloPay, MasterCard...</h4>
                    </div>
                </div>
                <div className={cx('servicePartial')}>
                    <div className={cx('servicePartialImg')}>
                        <img
                            src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/icon-4-01.png"
                            alt=""
                        />
                    </div>

                    <div>
                        <h2>Đổi trả dễ dàng </h2>
                        <h4>Trong vòng 12h</h4>
                    </div>
                </div>
            </div>
            <div className={cx('Information')}>
                <div className={cx('contactInfo')}>
                    <h2>THÔNG TIN LIÊN HỆ</h2>
                    <div className={cx('contact')}>
                        <span>
                            <FontAwesomeIcon icon={faLocationDot} className={cx('icon')} />
                        </span>

                        <p>344 Huỳnh Tấn Phát, Phường Bình Thuận, Quận 7, Tp. Hồ Chí Minh </p>
                    </div>
                    <div className={cx('contact')}>
                        <span>
                            <FontAwesomeIcon icon={faMobile} className={cx('icon')} />
                        </span>

                        <p> 1900 9477</p>
                    </div>
                    <div className={cx('contact')}>
                        <span>
                            <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                        </span>

                        <p>admin@demo037126.web30s.vn</p>
                    </div>
                </div>
                <div className={cx('informationProducts')}>
                    <div className={cx('products')}>
                        <h2>SẢN PHẨM</h2>
                        <h5>Bánh theo chủ đề</h5>
                        <h5>Bánh sinh nhận tạo hình</h5>
                        <h5>Bánh kem theo sự kiện</h5>
                        <h5>Bánh gato fresh garden</h5>
                    </div>
                    <div className={cx('products')}>
                        <h2>THÔNG TIN</h2>
                        <NavLink to={'/'}>
                            <h5>Trang chủ</h5>
                        </NavLink>
                        <NavLink to={'introduce'}>
                            <h5>Giới thiệu</h5>
                        </NavLink>
                        <NavLink to={'product'}>
                            <h5>Sản phẩm</h5>
                        </NavLink>
                        <NavLink to={'support'}>
                            <h5> Dịch vụ</h5>
                        </NavLink>
                        <NavLink to={'news'}>
                            <h5>Tin tức</h5>
                        </NavLink>
                        <NavLink to={'contact'}>
                            <h5>Liên hệ</h5>
                        </NavLink>
                    </div>
                </div>
                <div className={cx('signUpFor')}>
                    <h2>ĐĂNG KÝ NHẬN TIN</h2>

                    <div className={cx('RegisterInformation')}>
                        <h5>Đăng ký để nhận thông tin về sản phẩm và phiếu giảm giá</h5>
                        <div className={cx('search')}>
                            <input type="email" placeholder="Địa chỉ email..." />
                            <div className={cx('buttonIcon')}>
                                <FontAwesomeIcon icon={faPaperPlane} className={cx('icon')} />
                            </div>
                        </div>
                        <div className={cx('registerOnMultipleApps')}>
                            <div className={cx('img')} style={{ padding: 5 }}>
                                <img
                                    src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/kisspng-credit-card-visa-logo-mastercard-visa-logo-svg-vector-amp-png-transparent-vecto-5b6e4791bac489_845100331533953937765.jpg"
                                    alt=""
                                />
                            </div>
                            <div className={cx('img')}>
                                <img
                                    src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/zalopay-1.png"
                                    alt=""
                                />
                            </div>
                            <div className={cx('img')}>
                                <img
                                    src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/Vnpay-1.png"
                                    alt=""
                                />
                            </div>
                            <div className={cx('img')}>
                                <img
                                    src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/paypal-1.png"
                                    alt=""
                                />
                            </div>
                            <div className={cx('img')}>
                                <img
                                    src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/onepay-1.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('providers')}>
                <p>Sản phẩm của</p>
                <img
                    src="https://demo037126.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/1101-1200/30S-03-1102/web30s.png&width=0"
                    alt=""
                />
                <p>Cung cấp bởi P.A Việt Nam</p>
            </div>
        </div>
    );
}

export default Footer;
