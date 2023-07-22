import React from 'react';
import styles from './ProductItem.module.scss';
import classnames from 'classnames/bind';
import { formatCurrencyVND } from '~/component/NumberToPrice/currency';
const cx = classnames.bind(styles);
function ProductItem({ data }) {
    const formattedPrice = formatCurrencyVND(data.price);
    const formattedCost = formatCurrencyVND(data.cost);

    return (
        <div className={cx('repeat-box')}>
            <article className={cx('repeat-item')}>
                <div className="childrens flex-item">
                    <div className={cx('group')}>
                        <div className="childrens">
                            <img src={data.img} alt="" />
                        </div>
                    </div>
                    <div className={cx('group-text')}>
                        <div className="childrens">
                            <h3>{data.name}</h3>
                            <div>
                                <div className="childrens flex-item">
                                    <p className={cx('sold-discount')}>{formattedPrice}</p>
                                    <p className={cx('sold')}>{formattedCost}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default ProductItem;
