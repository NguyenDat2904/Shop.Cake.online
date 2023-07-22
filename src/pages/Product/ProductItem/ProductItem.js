import React from 'react';
import styles from './ProductItem.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function ProductItem() {
    return (
        <div className={cx('repeat-box')}>
            <article className={cx('repeat-item')}>
                <div className="childrens flex-item">
                    <div className={cx('group')}>
                        <div className="childrens">
                            <img
                                src="https://demo037126.web30s.vn/datafiles/38469/upload/images/san-pham/banh-kem-increable-removebg-preview.png?t=1668479885"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className={cx('group-text')}>
                        <div className="childrens">
                            <h3>THE INCREDIBLE</h3>
                            <div>
                                <div className="childrens flex-item">
                                    <p className={cx('sold-discount')}>380.000 đ</p>
                                    <p className={cx('sold')}>450.000 đ</p>
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
