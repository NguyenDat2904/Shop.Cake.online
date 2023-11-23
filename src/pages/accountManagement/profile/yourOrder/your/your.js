import { formatCurrencyVND } from '~/component/NumberToPrice/currency';
import classNames from 'classnames/bind';
import styles from './your.module.scss';
const cx = classNames.bind(styles);
export const Your = (item) => {
    const formatted = formatCurrencyVND(item.product.formattedTotal);
    return (
        <div className={cx('tableYour')}>
            <div className={cx('table')}>
                <p>Ảnh sản phẩm</p>
                <p>Tên sản phẩm</p>
                <p>Giá thành 1 sản phầm</p>
                <p>Số lượng</p>
                <p>Số điện thoại</p>
                <p>Trạng thái</p>
                <p>Thanh toán</p>
                <p>Tổng tiền sản phầm</p>
            </div>

            <div className={cx('your')}>
                <div className={cx('yourMilk')}>
                    <div className={cx('img')}>
                        {item.product.product.map((product) => {
                            return <img key={product._id} src={product.id.img} alt="" />;
                        })}
                    </div>
                    <div className={cx('p')}>
                        {item.product.product.map((product) => {
                            return <p key={product._id}>{product.id.name}</p>;
                        })}
                    </div>
                    <div className={cx('p')}>
                        <p>
                            {item.product.product.map((product) => {
                                const format = formatCurrencyVND(product.id.price);
                                return <p key={product._id}>{format}</p>;
                            })}
                        </p>
                    </div>
                    <div className={cx('p')}>
                        {item.product.product.map((product) => {
                            return <p key={product._id}>{product.quantity}</p>;
                        })}
                    </div>
                    <div className={cx('p')}>
                        <p>{item.product.phoneReceive}</p>
                    </div>
                    <div className={cx('p')}>
                        <p>{item.product.deliveryMethod}</p>
                    </div>
                    <div className={cx('p2')}>
                        <p>{item.product.payIn}</p>
                    </div>
                    <div className={cx('p', 'total')}>
                        <p>{formatted}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
