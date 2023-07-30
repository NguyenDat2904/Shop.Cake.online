import React, { useContext } from 'react';
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
    const { toggleCart, setToggleCart, productDataCart, setAcceptProduct } = useContext(AppContext);

    // 3. Function
    const total = productDataCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const formattedTotal = formatCurrencyVND(total);

    // 4. Render
    const renderCartItem = productDataCart?.map((product) => {
        const formattedPrice = formatCurrencyVND(product.price);
        const handleRemove = (product) => {
            setAcceptProduct(product);
            toggle(1);
        };
        return (
            <article className={cx('repeat-item')} key={product.id}>
                <div className="childrens flex-start">
                    <div className={cx('img')}>
                        <img className={cx('img-full')} src={product.img} alt="" />
                    </div>
                    <div className={cx('infor')}>
                        <h3 className={cx('name')}>{product.name}</h3>
                        <p className={cx('props')}>
                            {product.color} - {product.type} - {product.size}"
                        </p>
                        <div className={cx('price')}>
                            <div className={cx('count')}>{product.quantity}</div>
                            <div className={cx('tick')}>x</div>
                            <div className={cx('sold')}>{formattedPrice}</div>
                        </div>
                    </div>
                    <div className={cx('btn-delete')} onClick={() => handleRemove(product)}>
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
                <div className={cx('repeat-box')}>{renderCartItem}</div>
                <div className={cx('total')}>
                    <h3 className={cx('total-title')}>
                        <span>Tổng tiền: </span>
                    </h3>
                    <div className={cx('total-count')}>{formattedTotal}</div>
                </div>
                <div className={cx('btn-group')}>
                    <NavLink to="/cart" onClick={() => setToggleCart(false)}>
                        <div className={cx('btn-cart')}>GIỎ HÀNG</div>
                    </NavLink>
                    <NavLink to="/pay" onClick={() => setToggleCart(false)}>
                        <div className={cx('btn-cart', 'btn-total')}>THANH TOÁN</div>
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default CartRight;
