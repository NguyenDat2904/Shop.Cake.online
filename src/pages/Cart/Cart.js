import React, { useContext } from 'react';
import styles from './Cart.module.scss';
import classnames from 'classnames/bind';
import Banner from '~/component/Banner/Banner';
import CartItem from './CartItem/CartItem';
import { AppContext } from '~/hook/context';
import { formatCurrencyVND } from '~/component/NumberToPrice/currency';
import { NavLink } from 'react-router-dom';

const cx = classnames.bind(styles);
function Cart({ toggle }) {
    // 1. State
    const { productDataCart } = useContext(AppContext);

    // 3. Functions
    const total = productDataCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formattedTotal = formatCurrencyVND(total);

    // 4. Render

    const renderListItem = productDataCart?.map((product) => (
        <CartItem toggle={toggle} product={product} key={product.id} />
    ));
    return (
        <>
            <Banner page="Giỏ hàng" />
            <section className={cx('wrapper')}>
                <div className="container flex-column">
                    <div className="childrens flex-item">
                        <div className={cx('table')}>Sản phẩm</div>
                        <div className={cx('table', 'table-small')}>Đơn giá</div>
                        <div className={cx('table', 'table-small')}>Số lượng</div>
                        <div className={cx('table', 'table-end')}>Thành tiền</div>
                    </div>
                    <div className={cx('repeat-box')}>{renderListItem}</div>
                    <div className={cx('pay')}>
                        <div className={cx('pay-total')}>
                            <h3 className={cx('title')}>
                                <span>Tổng tiền: </span>
                            </h3>
                            <p className={cx('price')}>{formattedTotal}</p>
                        </div>
                        <div className={cx('pay-btn')}>
                            <NavLink to="/product">
                                <span className={cx('btn')}>Thêm sản phẩm</span>
                            </NavLink>
                            <NavLink to="/pay">
                                <span className={cx('btn')}>Thanh toán</span>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
