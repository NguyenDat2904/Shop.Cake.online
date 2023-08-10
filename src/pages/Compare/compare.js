import { useContext } from 'react';
import { CartCompare } from './cartCompare/cartCompare';
import { AppContext } from '~/hook/context';
import classNames from 'classnames/bind';
import styles from './compare.module.scss';
import Banner from '~/component/Banner/Banner';
const cx = classNames.bind(styles);
export const Compare = (prop) => {
    const { toggle } = prop;
    const { arrayCompare } = useContext(AppContext);

    const test = arrayCompare.length === 0 ? true : false;

    return (
        <>
            <Banner page="So sánh sản phẩm" title="So sánh sản phẩm" />
            <div className={cx('test')}>
                {test ? (
                    <p className={cx('no-data')}>Không có thông tin cho loại dữ liệu này</p>
                ) : (
                    <CartCompare toggle={toggle} />
                )}
            </div>
        </>
    );
};
