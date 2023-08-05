import classnames from 'classnames/bind';
import styles from './onCake.module.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const cx = classnames.bind(styles);
const OneCake = (prop) => {
    const { hendless, select } = prop;

     useEffect(() => {
         AOS.init();
     }, []);

    return (
        <div className={cx('birthdayCake')}>
            <div className={cx('brithday')}>
                <div className={cx('discount')}>
                    <h3>Giảm giá 30%</h3>
                    <h2 data-aos="fade-up">Tất cả các loại bánh sinh nhật</h2>
                    <div className={cx('although')}>
                        <Link to={'/product'}>
                            <button>SẢN PHẨM</button>
                        </Link>

                        <button className={cx('button')} onClick={() => hendless(select)}>
                            Bánh kem mới
                        </button>
                    </div>
                </div>
                <div className={cx('img')}>
                    <img
                        src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/hero-banner-shape.png"
                        alt=""
                        className={cx('brithdayCakeImg')}
                    />
                </div>
            </div>
        </div>
    );
};
export default OneCake;
