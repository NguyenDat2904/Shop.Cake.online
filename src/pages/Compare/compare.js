import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartCompare } from './cartCompare/cartCompare';
import { AppContext } from '~/hook/context';
import classNames from 'classnames/bind';
import styles from './compare.module.scss';
const cx = classNames.bind(styles);
export const Compare = (prop) => {
    const { toggle } = prop;
    const { arrayCompare } = useContext(AppContext);
    {
        console.log(arrayCompare);
    }
    const test = arrayCompare.length === 0 ? 'Không có thông tin cho loại dữ liệu này' : '';

    return (
        <>
            <div className={cx('compare')}>
                <div className={cx('textCompare')}>
                    <h2>SO SÁNH SẢN PHẨM</h2>
                    <div className={cx('linkCompare')}>
                        <Link to={'/'}>
                            <h4>Trang chủ</h4>{' '}
                        </Link>
                        <h5>/So sánh sản phẩm</h5>
                    </div>
                </div>
            </div>
            <div className={cx('test')}>
                <p>{test}</p>

                <CartCompare toggle={toggle} />
            </div>
        </>
    );
};
