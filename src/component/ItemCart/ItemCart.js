import React, { useContext, useEffect } from 'react';
import styles from './ItemCart.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEye, faHeart, faRotate } from '@fortawesome/free-solid-svg-icons';
import { formatCurrencyVND } from '../NumberToPrice/currency';
import { NavLink } from 'react-router-dom';
import { AppContext } from '~/hook/context';
import * as favour from '~/services/registerService';
import * as seList from '~/services/loginService';
import { useNavigate } from 'react-router-dom';
const cx = classnames.bind(styles);
function ItemCart({ data, toggle }) {
    const navigate = useNavigate();
    // 1. State
    const { productDataCart, setProductDataCart, arrayCompare, setArrayCompare, arrayHeart, setArrayHeart, userName } =
        useContext(AppContext);

    // 2. UseEffect
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(productDataCart));
    }, [productDataCart]);
    useEffect(() => {
        localStorage.setItem('compare', JSON.stringify(arrayCompare));
    }, [arrayCompare]);
    useEffect(() => {
        localStorage.setItem('heart', JSON.stringify(arrayHeart));
    }, [arrayHeart]);
    // 3. Function
    const formattedPrice = formatCurrencyVND(data.price);
    const formattedCost = formatCurrencyVND(data.cost);

    const handleClickCart = (e) => {
        e.preventDefault();
        toggle(2);
        const existingItemIndex = productDataCart.findIndex((item) => item.id === data.id);
        if (existingItemIndex >= 0) {
            const updatedItems = [...productDataCart];
            updatedItems[existingItemIndex].quantity += 1;
            setProductDataCart(updatedItems);
        } else {
            const product = {
                id: data.id,
                name: data.name,
                price: data.price,
                img: data.img,
                color: data.color,
                type: data.type,
                size: data.size,
                quantity: 1,
            };
            setProductDataCart([...productDataCart, product]);
        }
    };
    // só sánh
    const hendleCompare = (e) => {
        e.preventDefault();
        toggle(9);
        const existingItemIndex = arrayCompare?.findIndex((item) => item.id === data.id);
        if (existingItemIndex < 0) {
            const product = {
                id: data.id,
                name: data.name,
                price: data.price,
                img: data.img,
                color: data.color,
                type: data.type,
                size: data.size,
                cost: data.cost,
                quantity: 1,
            };
            setArrayCompare([...arrayCompare, product]);
        }
    };
    // Yeu thich
    const hendleFavourite = async (e) => {
        e.preventDefault();
        toggle(11);
        const existingItemIndex = arrayHeart?.findIndex((item) => item.id === data.id);
        if (existingItemIndex < 0) {
            const product = {
                id: data.id,
                name: data.name,
                price: data.price,
                img: data.img,
                color: data.color,
                type: data.type,
                size: data.size,
                cost: data.cost,
                quantity: 1,
            };
            setArrayHeart([...arrayHeart, product]);
        }
    };
    const hendleSee = async (e) => {
        e.preventDefault();
        const toGetSees = await seList.getSee();
        const listtoget = toGetSees?.findIndex((item) => item.id === data.id);
        if (listtoget < 0) {
            const see = await favour.postSee(data, userName);
            if (see) navigate(`product/${data.id}`);
        }
    };

    return (
        <NavLink to={`/product/${data.id}`}>
            <article>
                <div className="childrens flex-column">
                    <div className={cx('img', 'flex-center')}>
                        <img src={data.img} alt="" />
                        <div className={cx('group')}>
                            <div className="childrens flex-center">
                                <div className={cx('btn', 'flex-center')}>
                                    <FontAwesomeIcon icon={faEye} onClick={hendleSee} />
                                </div>
                                <div className={cx('btn', 'flex-center')} onClick={handleClickCart}>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </div>
                                <div className={cx('btn', 'flex-center')} onClick={hendleFavourite}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>

                                <div className={cx('btn', 'flex-center')} onClick={hendleCompare}>
                                    <FontAwesomeIcon icon={faRotate} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('infor')}>
                        <div className="childrens">
                            <h3>{data.name}</h3>
                            <div className={cx('price')}>
                                <div className="childrens flex-center">
                                    <p className={cx('sold')}>{formattedPrice}</p>
                                    <p className={cx('cost')}>{formattedCost}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </NavLink>
    );
}

export default ItemCart;
