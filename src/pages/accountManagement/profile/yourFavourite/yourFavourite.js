import classNames from 'classnames/bind';
import styles from './yourFavourite.module.scss';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';
import Cart from '../cart/cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
export const YourFavourite = ({ toggle }) => {
    const { arrayHeart, setGetLinksAcc, setAcceptHeart, setArrayHeart } = useContext(AppContext);

    return (
        <div className={cx('yourFavourite')}>
            {arrayHeart.map((item) => {
                const hendleDeleteLook = () => {
                    setAcceptHeart(item);
                    toggle(10);
                };
                return (
                    <div key={item.id}>
                        {
                            <div className={cx('iconss-dele')}>
                                <Cart data={item} toggle={toggle} />
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    className={cx('iconss')}
                                    onClick={() => hendleDeleteLook(item)}
                                />
                            </div>
                        }
                    </div>
                );
            })}
        </div>
    );
};
