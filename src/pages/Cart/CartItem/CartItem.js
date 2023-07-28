import React, { useContext, useEffect, useState } from 'react';
import styles from './CartItem.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { formatCurrencyVND } from '~/component/NumberToPrice/currency';
import { AppContext } from '~/hook/context';
const cx = classnames.bind(styles);
function CartItem({ product, toggle }) {
    // 1. State
    const [count, setCount] = useState(product.quantity);
    const { productDataCart, setProductDataCart, setAcceptProduct } = useContext(AppContext);
    // 2. UseEffect
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productDataCart));
    }, [productDataCart]);
    // 3. Function
    let priceSold = product.price * count;
    const formattedSold = formatCurrencyVND(priceSold);
    const formattedPrice = formatCurrencyVND(product.price);

    const handleRemove = (product) => {
        setAcceptProduct(product);
        toggle(1);
    };

    const handleCountPlus = (id) => {
        const productIndex = productDataCart.findIndex((product) => product.id === id);
        if (productIndex !== -1) {
            const updatedCart = [...productDataCart];
            updatedCart[productIndex].quantity += 1;
            setProductDataCart(updatedCart);
        }
        setCount(count + 1);
    };
    const handleCountMinus = (id) => {
        const productIndex = productDataCart.findIndex((product) => product.id === id);
        if (productIndex !== -1) {
            const updatedCart = [...productDataCart];
            if (updatedCart[productIndex].quantity > 1) {
                updatedCart[productIndex].quantity -= 1;
                setCount(count - 1);
                setProductDataCart(updatedCart);
            } else {
                setCount(1);
            }
        }
    };
    // 4. Render
    return (
        <>
            <article className={cx('wrapper')}>
                <div className="childrens flex-start">
                    <div className={cx('product')}>
                        <div className={cx('img')}>
                            <img className="img-full" src={product.img} alt="" />
                        </div>
                        <div className={cx('infor')}>
                            <h2 className={cx('name')}>
                                <span>{product.name}</span>
                            </h2>
                            <div className={cx('detail')}>Đỏ-Bánh kem-10 "</div>
                            <div className={cx('delete')} onClick={() => handleRemove(product)}>
                                <FontAwesomeIcon className={cx('btn-delete', 'flex-center')} icon={faTrash} />
                                <span className={cx('delete-text')}>Xóa</span>
                            </div>
                        </div>
                    </div>
                    <div className={cx('price')}>
                        <p className={cx('sold')}>{formattedPrice}</p>
                    </div>
                    <div className={cx('price', 'flex-start')}>
                        <div className={cx('icon', 'flex-center')} onClick={() => handleCountMinus(product.id)}>
                            <FontAwesomeIcon icon={faMinus} />
                        </div>
                        <div className={cx('count', 'flex-center')}>{count}</div>
                        <div className={cx('icon', 'flex-center')} onClick={() => handleCountPlus(product.id)}>
                            <FontAwesomeIcon icon={faPlus} />
                        </div>
                    </div>
                    <div className={cx('price')}>
                        <p className={cx('total')}>{formattedSold}</p>
                    </div>
                </div>
            </article>
        </>
    );
}

export default CartItem;
