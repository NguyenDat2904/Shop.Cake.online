import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faBagShopping, faHeart, faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './cart.module.scss';
const cx = classNames.bind(styles);
const Cart = (prop) => {
    const { img, price, oldPrice, name, index } = prop;
    return (
        <div key={index} className={cx('cart')}>
            <div className={cx('img')}>
                <img src={img} alt="" />
                <div className={cx('fontIconAwn')}>
                    <div className={cx('icon')}>
                        <div className={cx('fontIcon')}>
                            {' '}
                            <FontAwesomeIcon icon={faEye} className={cx('font')} />
                        </div>
                        <div className={cx('fontIcon')}>
                            {' '}
                            <FontAwesomeIcon icon={faBagShopping} className={cx('font')} />
                        </div>
                        <div className={cx('fontIcon')}>
                            {' '}
                            <FontAwesomeIcon icon={faHeart} className={cx('font')} />
                        </div>
                        <div className={cx('fontIcon')}>
                            <FontAwesomeIcon icon={faArrowsRotate} className={cx('font')} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={cx('price')}>
                <h4>{name}</h4>
                <div className={cx('span')}>
                    <span className={cx('span1')}>{price} đ</span>
                    <span className={cx('span2')}>{oldPrice} đ</span>
                </div>
            </div>
        </div>
    );
};
export default Cart;
