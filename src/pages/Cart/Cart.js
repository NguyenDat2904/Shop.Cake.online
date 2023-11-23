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
    const { handleIsLoading, cartData } = useContext(AppContext);

    // 3. Functions
    const total = cartData[0]?.product.reduce((accumulator, item) => {
        const price = parseInt(item.id.price);
        const quantity = item.quantity;
        const subtotal = price * quantity;
        return accumulator + subtotal;
    }, 0);
    const formattedTotal = formatCurrencyVND(total || 0);
    // 4. Render

    const renderListItem = cartData[0]?.product.map((product) => (
        <CartItem toggle={toggle} product={product} key={product.id} />
    ));
    return (
        <>
            <Banner page="Giỏ hàng" />
            <section className={cx('wrapper')}>
                <div className={cx('container ', 'flex-column', 'cart-mobile')}>
                    <div className={cx('container ', 'header-pc')}>
                        <div className={cx('table')}>Sản phẩm</div>
                        <div className={cx('table', 'table-small')}>Đơn giá</div>
                        <div className={cx('table', 'table-small')}>Số lượng</div>
                        <div className={cx('table', 'table-end')}>Thành tiền</div>
                    </div>
                    {cartData[0]?.product.length === 0 ? (
                        <div className={cx('context')}>Bạn chưa có sản phẩm nào trong giỏ hàng</div>
                    ) : (
                        <div className={cx('repeat-box')}>{renderListItem}</div>
                    )}
                    <div className={cx('pay')}>
                        <div className={cx('pay-total')}>
                            <h3 className={cx('title')}>
                                <span>Tổng tiền: </span>
                            </h3>
                            <p className={cx('price')}>{formattedTotal}</p>
                        </div>
                        <div className={cx('pay-btn')}>
                            <NavLink to="/product" onClick={handleIsLoading}>
                                <span className={cx('btn')}>Xem thêm sản phẩm</span>
                            </NavLink>
                            <NavLink
                                to="/pay"
                                className={cx(cartData[0]?.product.length === 0 && 'disabled')}
                                onClick={handleIsLoading}
                            >
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
