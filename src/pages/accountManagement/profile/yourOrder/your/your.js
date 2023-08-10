import { formatCurrencyVND } from '~/component/NumberToPrice/currency';
import classNames from 'classnames/bind';
import styles from './your.module.scss';
const cx = classNames.bind(styles);
export const Your = (props) => {
    const { product, formattedTotal, payIn, deliveryMethod, phone } = props;
    const formatted = formatCurrencyVND(formattedTotal);

    return (
        <div className={cx('tableYour')}>
            <div className={cx('table')}>
                <p>Ảnh sản phẩm</p>
                <p>Tên sản phẩm</p>
                <p>Giá thành 1 sản phầm</p>
                <p>Số lượng</p>
                <p>Số điện thoại</p>
                <p>Hình thức thanh toán & Trạng thái</p>
                <p>Tổng tiền sản phầm</p>
            </div>
            {product.map((item, index) => {
                const formattedOne = formatCurrencyVND(item.price);
                return (
                    <div key={index} className={cx('your')}>
                        <div className={cx('yourMilk')}>
                            <div className={cx('img')}>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={cx('p')}>
                                <p>{item.name}</p>
                            </div>
                            <div className={cx('p')}>
                                <p>{formattedOne}</p>
                            </div>
                            <div className={cx('p')}>
                                <p>{item.quantity}</p>
                            </div>
                            <div className={cx('p')}>
                                <p>{phone}</p>
                            </div>
                            <div className={cx('p2')}>
                                <p>
                                    {payIn} <br />
                                    <br />
                                    {deliveryMethod}
                                </p>
                            </div>
                            <div className={cx('p', 'total')}>
                                <p>{formatted}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
