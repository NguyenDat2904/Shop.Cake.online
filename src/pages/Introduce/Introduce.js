import React from 'react';
import styles from './Introduce.module.scss';
import classnames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlay, faStar} from '@fortawesome/free-solid-svg-icons';

const cx = classnames.bind(styles);

function Introduce() {
    return(
        <>
            <div className={cx('banner')}>
                <section className="container">
                    <div className={cx('col')}>
                        <div className={cx('childrens')}>
                            <h1 className={cx('title')}>
                                <span className={cx('content')}>Sản phẩm</span>
                            </h1>
                        </div>
                        <div className={cx('breadscrumb')}>
                            <NavLink to="/" className={cx('breadscrumb-item')}>
                                Trang chủ
                            </NavLink>
                            <div className={cx('breadscrumb-icon')}>/</div>
                            <NavLink to="/product" className={cx('breadscrumb-item', 'active')}>
                                Giới thiệu
                            </NavLink>
                        </div>
                    </div>
                </section>
            </div>
            <div className={cx('video')}>
                <div className={cx('videoimg')}>
                    <img className={cx('img')} src="https://demo037126.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/7101-7200/30S-03-7126/about-bg.png&width=0" alt="" />
                    <div className={cx('intro-icon')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                    </div>
                </div>
                <video src="https://www.youtube.com/watch?v=wLtVgLt7dBA&list=TLGG4j29mU-H5_MyNDA3MjAyMw"></video>
            </div>
            <section className="container">
            <div className={cx('text')}>
                <div className={cx('lefttext')}>
                    <h2 className={cx('header')}>Về chúng tôi</h2>
                    <p className={cx('pa1')}>Trong tiềm thức của nhiều người Việt, bánh sinh nhật không chỉ là một loại quà bình thường mà nó còn mang ý nghĩa cho sự đoàn viên; là biểu tượng của sự ấm no, hạnh phúc. Chính vì vậy, trong ngày sinh nhật chiếc bánh kem là không thể thiếu</p>
                    <p className={cx('pa1')}>Bakes mang đến bạn mẫu bánh kem mang hương vị phương Tây nhưng trong chiếc bánh kem đó vẫn tìm về với những nguyên liệu tự nhiên nhất của quê hương đất Việt.</p>
                </div>
                <div className={cx('righttext')}>
                    <p className={cx('pa1')}>Không quá cầu kì , bánh được thiết kế theo yêu cầu của khách hàng …Bánh Sinh Nhật Đẹp mang nét mộc mạc, đặc trưng làm say lòng không biết bao thế hệ người thưởng thức.</p>
                    <p className={cx('pa1')}>Với mục tiêu trở thành điểm lựa chọn tin cậy, duy nhất và tốt nhất về dòng bánh kem cao cấp, chúng tôi cam kết mang đến cho khách hàng những dịch vụ gia tăng hoàn hảo với thái dộ phục vụ tốt nhất theo đúng thông điệp mà chúng tôi muốn gửi đến khách hàng. Đến với chúng tôi, bạn không chỉ có được những loại bánh ngọt hạng nhất, mà được nhiều ưu đãi nhất.</p>
                    <p className={cx('pa1')}>Cảm ơn vì đã chọn chúng tôi!</p>
                </div>
            </div>
            </section>
            <section className={cx('container')}>
                <div className={cx('shop-icon')}>
                    <div className={cx('iconbox')}>
                        <img className={cx('icon')} src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/brand1.png?t=1668565945" alt="" />
                    </div>
                    <div className={cx('iconbox')}>
                        <img className={cx('icon')} src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/brand2.png?t=1668565945" alt="" />
                    </div>
                    <div className={cx('iconbox')}>
                        <img className={cx('icon')} src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/brand3.png?t=1668565945" alt="" />
                    </div>
                    <div className={cx('iconbox')}>
                        <img className={cx('icon')} src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/brand4.png?t=1668565945" alt="" />
                    </div>
                    <div className={cx('iconbox')}>
                        <img className={cx('icon')} src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/brand5.png?t=1668565945" alt="" />
                    </div>
                </div>
            </section>
            <section className={cx('container')}>
                <div className={cx('staff-text')}>
                    <h2 className={cx('text1')}>Đội ngũ nhân viên</h2>
                    <p className={cx('text2')}>Không quá cầu kì , bánh được thiết kế theo yêu cầu của khách hàng …Bánh Sinh Nhật Đẹp mang nét mộc mạc, đặc trưng làm say lòng không biết bao thế hệ người thưởng thức.</p>
                </div>
                <div className={cx('staff-img')}>
                    <div className={cx('staff')}>
                        <img className={cx('pic')} src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/team1.png?t=1668591398" alt="" />
                        <div className={cx('staff-name')}>
                            <h3 className={cx('name')}>KIANNA PHAM</h3>
                            <h4 className={cx('position')}>Team Member</h4>
                        </div>
                    </div>
                    <div className={cx('staff')}>
                        <img className={cx('pic')} src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/team2.png?t=1668591398" alt="" />
                        <div className={cx('staff-name')}>
                            <h3 className={cx('name')}>KIANNA PHAM</h3>
                            <h4 className={cx('position')}>Team Member</h4>
                        </div>
                    </div>
                    <div className={cx('staff')}>
                        <img className={cx('pic')} src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/team3.png?t=1668591399" alt="" />
                        <div className={cx('staff-name')}>
                            <h3 className={cx('name')}>KIANNA PHAM</h3>
                            <h4 className={cx('position')}>Team Member</h4>
                        </div>
                    </div>
                </div>
            </section>
            <div className={cx('banner2')}>
                <section className="container">
                    <div className={cx('footer')}>
                        <div className={cx('pic')}>
                            <img className={cx('customer')} src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/testimonial-shap-thumb.png?t=1668650003" alt="" />
                        </div>
                        <div className={cx('review')}>
                            <div className={cx('customer-name')}>
                                <h3 className={cx('name')}>KIANNA PHAM</h3>
                            </div>
                            <div className={cx('comment')}>
                                <FontAwesomeIcon icon={faStar} style={{color: "#eac22e",}} />
                                <FontAwesomeIcon icon={faStar} style={{color: "#eac22e",}} />
                                <FontAwesomeIcon icon={faStar} style={{color: "#eac22e",}} />
                                <FontAwesomeIcon icon={faStar} style={{color: "#eac22e",}} />
                                <FontAwesomeIcon icon={faStar} style={{color: "#eac22e",}} />
                                <p>Nhận xét của khách hàng. Mức độ hài lòng cao. Phục vụ tốt. Đáng sử dụng dịch vụ. Yêu dịch vụ.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>    
    )
}

export default Introduce;
