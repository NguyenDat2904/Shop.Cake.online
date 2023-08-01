import classNames from 'classnames/bind';
import styles from './newCake.module.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const cx = classNames.bind(styles);
const NewCake = (prop) => {
    const { hendless, select } = prop;

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className={cx('birthdayCake')}>
            <div className="container">
                <div className={cx('brithday')}>
                    <div className={cx('discount')}>
                        <h3 data-aos="fade-up" data-aos-duration="800" data-aos-offset="100">
                            Giảm giá 30%
                        </h3>
                        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
                            Tất cả các loại bánh kem mới
                        </h2>
                        <div className={cx('although')}>
                            <Link to={'/product'}>
                                <button>SẢN PHẨM</button>
                            </Link>
                            <button className={cx('button')} onClick={() => hendless(!select)}>
                                Bánh sinh nhật
                            </button>
                        </div>
                    </div>
                    <div className={cx('img')}>
                        <div className={cx('brithdayCakeImg')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewCake;
