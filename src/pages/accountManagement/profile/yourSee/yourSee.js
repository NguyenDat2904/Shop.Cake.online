import classNames from 'classnames/bind';
import styles from './yourSee.module.scss';
import { useContext } from 'react';
import { AppContext } from '~/hook/context';
import Cart from '../cart/cart';
const cx = classNames.bind(styles);
export const YourSee = () => {
    const { getLook, setGetlookAcc } = useContext(AppContext);
    const hendleDeleteLook = (id) => {
        setGetlookAcc(id);
    };
    return (
        <div className={cx('yourSee')}>
            {getLook.map((item) => {
                return <div key={item.id}>{<Cart data={item.dataSee} hendleDeleteLook={hendleDeleteLook} />}</div>;
            })}
        </div>
    );
};
