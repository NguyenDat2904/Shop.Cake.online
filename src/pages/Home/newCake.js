import classNames from 'classnames/bind';
import styles from './newCake.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
const NewCake = (prop) => {
    const { hendless, select } = prop;
    return (
        <div className={cx('birthdayCake')}>
            <div className={cx('brithday')}>
                <div className={cx('discount')}>
                    <h3>Giảm giá 30%</h3>
                    <h2>Tất cả các loại bánh kem mới</h2>
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
                    <img
                        src="https://demo037126.web30s.vn/datafiles/38469/upload/images/banner/slide-2.png"
                        alt=""
                        className={cx('brithdayCakeImg')}
                    />
                </div>
            </div>
        </div>
    );
};
export default NewCake;
