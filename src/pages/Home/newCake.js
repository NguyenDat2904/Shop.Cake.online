import classNames from 'classnames/bind';
import styles from './newCake.module.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
const NewCake = (prop) => {
    const { hendless, select } = prop;

    useEffect(() => {
        AOS.init();
    }, []);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const imageUrls = [
        'https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/hero-banner-shape.png',
        'https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/slide-2.png?t=1677033386',
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }, 5000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    useEffect(() => {
        const imgElement = document.querySelector('#banner');
        imgElement.classList.remove(cx('show'));
        setTimeout(() => {
            imgElement.classList.add(cx('show'));
        }, 100);
    }, [currentImageIndex]);
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
                        </div>
                    </div>
                    <div className={cx('img')}>
                        <img id="banner" src={imageUrls[currentImageIndex]} alt="" className={cx('brithdayCakeImg')} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NewCake;
