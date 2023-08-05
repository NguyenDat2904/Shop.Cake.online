import React, { useEffect } from 'react';
import styles from './Introduce.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import Banner from '~/component/Banner/Banner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const cx = classnames.bind(styles);

function Introduce() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <Banner page="Giới thiệu" title="Giới thiệu" />
            <div className="container">
                <div className={cx('video')}>
                    <div className={cx('videoimg')}>
                        <img
                            className={cx('img')}
                            src="https://demo037126.web30s.vn/image-process/get-image-v3?path=/datafiles/web30s/upload/images/7101-7200/30S-03-7126/about-bg.png&width=0"
                            alt=""
                        />
                        <div className={cx('intro-icon')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faPlay} />
                        </div>
                    </div>
                    <video src="https://www.youtube.com/watch?v=wLtVgLt7dBA&list=TLGG4j29mU-H5_MyNDA3MjAyMw"></video>
                </div>
            </div>
            <section className="container">
                <div className={cx('text')}>
                    <div className={cx('lefttext')}>
                        <h2 className={cx('header')}>Về chúng tôi</h2>
                        <p className={cx('pa1')}>
                            Trong tiềm thức của nhiều người Việt, bánh sinh nhật không chỉ là một loại quà bình thường
                            mà nó còn mang ý nghĩa cho sự đoàn viên; là biểu tượng của sự ấm no, hạnh phúc. Chính vì
                            vậy, trong ngày sinh nhật chiếc bánh kem là không thể thiếu
                        </p>
                        <p className={cx('pa1')}>
                            Bakes mang đến bạn mẫu bánh kem mang hương vị phương Tây nhưng trong chiếc bánh kem đó vẫn
                            tìm về với những nguyên liệu tự nhiên nhất của quê hương đất Việt.
                        </p>
                    </div>
                    <div className={cx('righttext')}>
                        <p className={cx('pa1')}>
                            Không quá cầu kì , bánh được thiết kế theo yêu cầu của khách hàng …Bánh Sinh Nhật Đẹp mang
                            nét mộc mạc, đặc trưng làm say lòng không biết bao thế hệ người thưởng thức.
                        </p>
                        <p className={cx('pa1')}>
                            Với mục tiêu trở thành điểm lựa chọn tin cậy, duy nhất và tốt nhất về dòng bánh kem cao cấp,
                            chúng tôi cam kết mang đến cho khách hàng những dịch vụ gia tăng hoàn hảo với thái dộ phục
                            vụ tốt nhất theo đúng thông điệp mà chúng tôi muốn gửi đến khách hàng. Đến với chúng tôi,
                            bạn không chỉ có được những loại bánh ngọt hạng nhất, mà được nhiều ưu đãi nhất.
                        </p>
                        <p className={cx('pa1')}>Cảm ơn vì đã chọn chúng tôi!</p>
                    </div>
                </div>
            </section>
            <section className={cx('container')}>
                <div className={cx('armorial')}>
                    <div
                        className={cx('img1')}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-offset="100"
                        data-aos-easing="ease"
                    ></div>
                    <div
                        className={cx('img2')}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-offset="100"
                        data-aos-easing="ease"
                    ></div>
                    <div
                        className={cx('img3', 'img5None')}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-offset="100"
                        data-aos-easing="ease"
                    ></div>
                    <div
                        className={cx('img4', 'img4None')}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-offset="100"
                        data-aos-easing="ease"
                    ></div>
                    <div
                        className={cx('img5', 'img4None')}
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-offset="100"
                        data-aos-easing="ease"
                    ></div>
                </div>
            </section>
            <section className={cx('container')}>
                <div className={cx('wrapper')}>
                    <div className={cx('staff-text')}>
                        <h2 className={cx('text1')}>Đội ngũ nhân viên</h2>
                        <p className={cx('text2')}>
                            Không quá cầu kì , bánh được thiết kế theo yêu cầu của khách hàng …Bánh Sinh Nhật Đẹp mang
                            nét mộc mạc, đặc trưng làm say lòng không biết bao thế hệ người thưởng thức.
                        </p>
                    </div>
                    <div
                        className={cx('staff-img')}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-offset="200"
                        data-aos-easing="ease"
                    >
                        <div className={cx('staff')}>
                            <div className={cx('img')}>
                                <img
                                    className={cx('pic')}
                                    src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/team1.png?t=1668591398"
                                    alt=""
                                />
                            </div>
                            <div className={cx('staff-name')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('name')}>KIANNA PHAM</h3>
                                    <h4 className={cx('position')}>Team Member</h4>
                                </div>
                            </div>
                        </div>
                        <div className={cx('staff')}>
                            <div className={cx('img')}>
                                <img
                                    className={cx('pic')}
                                    src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/team2.png?t=1668591398"
                                    alt=""
                                />
                            </div>
                            <div className={cx('staff-name')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('name')}>KIANNA PHAM</h3>
                                    <h4 className={cx('position')}>Team Member</h4>
                                </div>
                            </div>
                        </div>
                        <div className={cx('staff')}>
                            <div className={cx('img')}>
                                <img
                                    className={cx('pic')}
                                    src="https://demo037126.web30s.vn/datafiles/38469/upload/images/home/team3.png?t=1668591399"
                                    alt=""
                                />
                            </div>
                            <div className={cx('staff-name')}>
                                <div className={cx('info')}>
                                    <h3 className={cx('name')}>KIANNA PHAM</h3>
                                    <h4 className={cx('position')}>Team Member</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className={cx('banner2')}>
                <section className="container">
                    <div className={cx('pic-chef')}>
                        <div className={cx('chef')}></div>
                    </div>

                    <div className={cx('review')}>
                        <div className={cx('star')}>
                            <FontAwesomeIcon icon={faStar} style={{ color: '#eac22e' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: '#eac22e' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: '#eac22e' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: '#eac22e' }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: '#eac22e' }} />
                        </div>
                        <div className={cx('customer-name')}>
                            <h3 className={cx('name')}>Kianna Pham</h3>
                        </div>
                        <div className={cx('comment')}>
                            <p>
                                Nhận xét của khách hàng. Mức độ hài lòng cao. Phục vụ tốt. Đáng sử dụng dịch vụ. Yêu
                                dịch vụ.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Introduce;
