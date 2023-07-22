import React from 'react';
import styles from './ItemCart.module.scss';
import classnames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faEye, faHeart, faRotate } from '@fortawesome/free-solid-svg-icons';
import { formatCurrencyVND } from '../NumberToPrice/currency';
const cx = classnames.bind(styles);
function ItemCart({ data }) {
    const formattedPrice = formatCurrencyVND(data.price);
    const formattedCost = formatCurrencyVND(data.cost);
    return (
        <article>
            <div className="childrens flex-column">
                <div className={cx('img', "flex-center")}>
                    <img src={data.img} alt="" />
                    <div className={cx('group')}>
                        <div className="childrens flex-center">
                            <div className={cx('btn', 'flex-center')}>
                                <FontAwesomeIcon icon={faEye} />
                            </div>
                            <div className={cx('btn', 'flex-center')}>
                                <FontAwesomeIcon icon={faBagShopping} />
                            </div>
                            <div className={cx('btn', 'flex-center')}>
                                <FontAwesomeIcon icon={faHeart} />
                            </div>
                            <div className={cx('btn', 'flex-center')}>
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
    );
}

export default ItemCart;
