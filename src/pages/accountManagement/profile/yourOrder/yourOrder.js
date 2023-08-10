import classNames from 'classnames/bind';
import styles from './yourOrder.module.scss';
import { useContext, useEffect } from 'react';
import { AppContext } from '~/hook/context';
import { Your } from './your/your';
const cx = classNames.bind(styles);
const YourOrder = () => {
    const { userOrder, setUserOder } = useContext(AppContext);
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('orders'));
        if (storedData && JSON.stringify(storedData) !== JSON.stringify(userOrder)) {
            setUserOder(storedData);
        }
    }, [userOrder, setUserOder]);
    return (
        <div className={cx('useorder')}>
            {userOrder?.map((item) => {
                return (
                    <div key={item.id}>
                        {
                            <Your
                                product={item.product}
                                formattedTotal={item.formattedTotal}
                                payIn={item.payIn}
                                deliveryMethod={item.deliveryMethod}
                                phone={item.phoneReceive}
                            />
                        }
                    </div>
                );
            })}
        </div>
    );
};
export default YourOrder;
