import React, { useContext, useEffect } from 'react';
import styles from './CartRight.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faXmark } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '~/hook/context';
import { NavLink } from 'react-router-dom';
import { formatCurrencyVND } from '../NumberToPrice/currency';
const cx = classnames.bind(styles);
function CartRight({ toggle }) {
    // 1. useState
    const { toggleCart, setToggleCart, setAcceptProduct, handleIsLoading, cartData } = useContext(AppContext);

    // 3. Function
    const total = cartData[0]?.product.reduce((accumulator, item) => {
        const price = parseInt(item.id.price);
        const quantity = item.quantity;
        const subtotal = price * quantity;
        return accumulator + subtotal;
    }, 0);
    const formattedTotal = formatCurrencyVND(total || 0);
    // 4. Render
    const renderCartItem = cartData[0]?.product.map((product) => {
        const formattedPrice = formatCurrencyVND(product.id.price);
        const handleRemove = (product) => {
            setAcceptProduct(product);
            toggle(1);
        };
        return (
            <article className={cx('repeat-item')} key={product.id._id}>
                <div className="childrens flex-start">
                    <div className={cx('img')}>
                        <img className={cx('img-full')} src={product.id.img} alt="" />
                    </div>
                    <div className={cx('infor')}>
                        <h3 className={cx('name')}>{product.id.name}</h3>
                        <p className={cx('props')}>
                            {product.id.color} - {product.id.type} - {product.id.size}"
                        </p>
                        <div className={cx('price')}>
                            <div className={cx('count')}>{product.quantity}</div>
                            <div className={cx('tick')}>x</div>
                            <div className={cx('sold')}>{formattedPrice}</div>
                        </div>
                    </div>
                    <div className={cx('btn-delete')} onClick={() => handleRemove(product.id)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </div>
                </div>
            </article>
        );
    });
    const handleToggle = () => {
        setToggleCart(false);
    };
    return (
        <section className={cx('wrapper', toggleCart ? 'active' : '')}>
            <div className="childrens">
                <header className={cx('header')}>
                    <h4 className={cx('title')}>
                        <span>Giỏ hàng của bạn</span>
                    </h4>
                    <div className={cx('btn')} onClick={handleToggle}>
                        <FontAwesomeIcon icon={faXmark} />
                    </div>
                </header>
                {cartData?.length === 0 ? (
                    <div className={cx('content')}>Bạn chưa thêm sản phẩm vào giỏ hàng</div>
                ) : (
                    <div className={cx('repeat-box')}>{renderCartItem}</div>
                )}
                <div className={cx('total')}>
                    <h3 className={cx('total-title')}>
                        <span>Tổng tiền: </span>
                    </h3>
                    <div className={cx('total-count')}>{formattedTotal}</div>
                </div>
                <div className={cx('btn-group')}>
                    <NavLink
                        to="/cart"
                        className={cx(cartData?.length === 0 && 'disabled')}
                        onClick={() => {
                            setToggleCart(false);
                            handleIsLoading();
                        }}
                    >
                        <div className={cx('btn-cart')}>GIỎ HÀNG</div>
                    </NavLink>
                    <NavLink
                        to="/pay"
                        className={cx(cartData?.length === 0 && 'disabled')}
                        onClick={() => {
                            setToggleCart(false);
                            handleIsLoading();
                        }}
                    >
                        <div className={cx('btn-cart', 'btn-total')}>THANH TOÁN</div>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default CartRight;
