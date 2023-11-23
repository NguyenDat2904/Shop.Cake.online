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
import * as postCart from '../../services/productService';
import { useNavigate } from 'react-router-dom';
const cx = classnames.bind(styles);
function ItemCart({ data, toggle }) {
    const navigate = useNavigate();
    // 1. State
    const { arrayCompare, setArrayCompare, arrayHeart, setArrayHeart, userName, userDetail, userInfos, setCartData } =
        useContext(AppContext);
    const userInfo = JSON.parse(userInfos);

    useEffect(() => {
        localStorage.setItem('compare', JSON.stringify(arrayCompare));
    }, [arrayCompare]);
    useEffect(() => {
        localStorage.setItem('heart', JSON.stringify(arrayHeart));
    }, [arrayHeart]);
    // 3. Function
    const formattedPrice = formatCurrencyVND(data.price);
    const formattedCost = formatCurrencyVND(data.cost);

    const handleClickCart = async (e) => {
        e.preventDefault();
        toggle(2);
        const product = { userID: userDetail._id, id: data._id };
        const cart = await postCart.addCart(userDetail._id, product, userInfo.refreshToken, userInfo.accessToken);
        if (cart.status === 200) {
            const getCart = await postCart.getCart(userDetail._id, userInfo.refreshToken, userInfo.accessToken);
            setCartData(getCart.data.carts);
        }
    };
    // só sánh
    const handleCompare = (e) => {
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
    const handleFavourite = async (e) => {
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
    const handleSee = async (e) => {
        e.preventDefault();
        const toGetSees = await seList.getSee();
        const listtoget = toGetSees?.findIndex((item) => item.id === data.id);
        if (listtoget < 0) {
            const see = await favour.postSee(data, userName);
            if (see) navigate(`product/${data.id}`);
        }
    };

    return (
        <NavLink to={`/product/${data._id}`}>
            <article>
                <div className="childrens flex-column">
                    <div className={cx('img', 'flex-center')}>
                        <img src={data.img} alt="" />
                        <div className={cx('group')}>
                            <div className="childrens flex-center">
                                <div className={cx('btn', 'flex-center')}>
                                    <FontAwesomeIcon icon={faEye} onClick={handleSee} />
                                </div>
                                <div className={cx('btn', 'flex-center')} onClick={handleClickCart}>
                                    <FontAwesomeIcon icon={faBagShopping} />
                                </div>
                                <div className={cx('btn', 'flex-center')} onClick={handleFavourite}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>

                                <div className={cx('btn', 'flex-center')} onClick={handleCompare}>
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
