import classNames from 'classnames/bind';
import styles from './yourFavourite.module.scss';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';
import Cart from '../cart/cart';
const cx = classNames.bind(styles);
export const YourFavourite = () => {
    const { getLikes, setGetLinksAcc } = useContext(AppContext);
    const hendleDeleteFavourite = (id) => {
        setGetLinksAcc(id);
    };
    return (
        <div className={cx('yourFavourite')}>
            {getLikes.map((item) => {
                return (
                    <div key={item.id}>
                        {<Cart data={item.favouriteData} hendleDeleteLook={hendleDeleteFavourite} />}
                    </div>
                );
            })}
        </div>
    );
};
