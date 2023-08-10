import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './cartLibrary.module.scss';
const cx = classNames.bind(styles);
export const CartLibrary = (prop) => {
    const { name, img } = prop;
    return (
        <div className={cx('cartLibrary')}>
            <div className={cx('headerCartLibrary')}>
                <div className={cx('img')}>
                    <img src={img} alt="" />
                </div>
                <div className={cx('icon')}>
                    <FontAwesomeIcon icon={faArrowRight} className={cx('icons')} />
                </div>
            </div>
            <h4 className={cx('nameCartLibrary')}>{name}</h4>
        </div>
    );
};
